import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

    static async getInitialProps(ctx) {
        const originalRenderPage = ctx.renderPage

        ctx.renderPage = () =>
            originalRenderPage({
                // useful for wrapping the whole react tree
                enhanceApp: (App) => App,
                // useful for wrapping in a per-page basis
                enhanceComponent: (Component) => Component,
            })

        // Run the parent `getInitialProps`, it now includes the custom `renderPage`
        const initialProps = await Document.getInitialProps(ctx)

        return initialProps
    }

    render() {
        return (
            <Html>
                <Head>
                    <meta name="google-site-verification" content="1JiApoByli9O5mImi-eZFE2w8W1wASTj_XVe9I2OydU" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                    <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap" rel="stylesheet" />
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css" />
                    <link rel="manifest" href="/manifest.json" />
                    <link rel="apple-touch-icon" href="/icon.png"></link>
                    <meta name="theme-color" content="#212121" />
                    <meta charset="UTF-8" />
                    <meta name="keywords" content="Paweł Nowicki, Web Devepoper, strony internetowe, React, Lublin, Javascript, Programista" />
                    <meta name="author" content="Paweł Nowicki" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Web Developer - Paweł Nowicki</title>
                    <meta name="description" content="Web Developer- Paweł Nowicki. Witam! Nazywam sie Paweł Nowicki. Zajmuję tworzeniem aplikacji React. Zapraszam do kontaktu." />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument