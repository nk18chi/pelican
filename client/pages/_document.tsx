import { Html, Head, Main, NextScript } from 'next/document';

const Document = (): JSX.Element => {
  const fontLink =
    'https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400&display=swap';
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link href={fontLink} rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
