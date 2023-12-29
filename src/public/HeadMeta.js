import Head from "next/head";

const HeadMeta = ({ title, description, url }) => {
  return (
    <Head>
      <title>{title || "동우그룹"}</title>
      <meta
        name="description"
        content={
          description ||
          "공동주택관리 전문기업 동우그룹입니다."
        }
      />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:title" content={title || "동우그룹"} />
      <meta property="og:description"
        content={
        description ||
        "공동주택관리 전문기업 동우그룹입니다."
      }/>
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url || "https://xn--2i0bm5iryeh7q.kr"} />
      <meta property="og:image" content={"https://xn--2i0bm5iryeh7q.kr/logo-black.png" } />
      <meta name="keywords" content="동우그룹"/>
      <meta property="og:article:author" content="동우그룹" />
    </Head>
  );
};

export default HeadMeta;