import type { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = {
  status: string;
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      status: 'error',
      message: 'Método no permitido' 
    });
  }

  try {
    const scriptURL = process.env.APPSCRIPT_URL;

    if (!scriptURL) {
      return res.status(500).json({ 
        status: 'error', 
        message: 'Variable de entorno APPSCRIPT_URL no configurada' 
      });
    }

    const response = await fetch(scriptURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req.body),
    });

    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ 
      status: 'error', 
      message: 'Error al procesar tu solicitud' 
    });
  }
}