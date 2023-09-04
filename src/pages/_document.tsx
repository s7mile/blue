import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });
      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles} {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="ko">
        <Head>
          <title>미스터블루 과제</title>
          <meta name="description" content="미스터블루 과제 사이트 입니다." />

          <meta
            name="keywords"
            content="미스터블루,미블,mrblue,웹툰,만화,소설,코믹,이북,무료,성인,19,webtoon,comic,novel,ebook,free,무협,할리퀸,정액제,블루머니,방,책,유료,웹,추천,manga,comix"
          />
          <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <meta charset="utf-8" />
          <meta property="fb:app_id" content="134521413788558" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="미스터블루 - 웹툰, 만화, 소설" />
          <meta property="og:url" content="http://www.mrblue.com/" />
          <meta
            property="og:description"
            content="국내 최다 80만권 보유, No.1 만화·웹툰·소설 콘텐츠 플랫폼 미스터블루! 파격 할인과 대여쿠폰은 덤"
          />
          <meta
            property="og:image"
            content="https://img.mrblue.com/images/share/share_mrblue.jpg?ver=202309031518"
          />
          <meta property="og:site_name" content="미스터블루" />
          <meta property="og:locale" content="ko_KR" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@mrblue_com" />
          <meta name="twitter:creator" content="@mrblue_com" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
