import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Kanit:wght@300&family=Open+Sans&family=Ubuntu&display=swap"
          rel="stylesheet"
        />
        <script
          src="https://kit.fontawesome.com/cd76c07470.js"
          crossOrigin="anonymous"
          async
        ></script>
      </Head>
      <body className="white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
