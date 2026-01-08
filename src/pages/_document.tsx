import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <title>Serviecológicos FRC - Gestión Integral de Residuos</title>
        <meta name="description" content="Serviecológicos FRC: transformamos residuos en oportunidades. Recolección, clasificación, capacitaciones y disposición final certificada." />
        <meta name="keywords" content="Serviecológicos, FRC, gestión de residuos, reciclaje, recolección" />
        <meta property="og:title" content="Serviecológicos FRC" />
        <meta property="og:description" content="Gestión integral de residuos sostenible" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/pgf1fsz.css"></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}