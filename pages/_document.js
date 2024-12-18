import Document, { Html, Head, Main, NextScript, } from 'next/document';
import Script from 'next/script';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="kr">
                <Head>
                    <meta charSet="UTF-8" />
                    <meta name="author" content="동우그룹,동우개발,dongwoogroup" />
                    <meta name="naver-site-verification" content="e3179986134999f3d224c49f8c65edceb45e97f5" />
                    <meta name="google-site-verification" content="KYB6KE6U0vUi9GHkbWT_hWogRp4KEDHdhGVSC00dn2s" />

                    <Script src="https://fonts.googleapis.com/css?family=IBM+Plex+Sans:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i&display=swap"
                                   strategy="beforeInteractive"
                                   />

                    <Script
                        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=da751fb23c7f8cc96a72163af91ed742&libraries=services,clusterer&autoload=false`}
                        strategy="beforeInteractive"
                    />
                    <link rel="shortcut icon" href="https://xn--2i0bm5iryeh7q.kr/favicon.ico" />
                    <meta property="og:site_name" content="동우그룹" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument;