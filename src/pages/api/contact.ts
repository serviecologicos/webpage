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
    const scriptURL = "https://script.google.com/macros/s/AKfycbyYqIQ6XZdtd0BCNgwwD0Q_YmWdbMMrk1sPDsuSWxX6_e1Pj26RvkOOB4buRHE55nud/exec";
    
    // Convertir a FormData
    const params = new URLSearchParams();
    params.append('name', req.body.name);
    params.append('email', req.body.email);
    params.append('phone', req.body.phone);
    params.append('message', req.body.message);

    const response = await fetch(scriptURL, {
      method: 'POST',
      body: params,
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