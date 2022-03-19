import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='pt-BR'>
      <Head>
        <meta name="description" content="AluraGeek, encontre aqui os melhores produtos para você ou para presentear quem você gosta."></meta>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={true.toString()} />
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;700&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}