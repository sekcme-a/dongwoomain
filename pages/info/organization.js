import PageNavbar from "src/public/components/PageNavbar"
import PageHeader from "src/public/components/PageHeader"
import Head from "next/head"
import Script from "next/script"
import OrganizationImage from "src/info/OrganizationImage"

import HeadMeta from "src/public/HeadMeta"

const Organization = () =>{

  return(
    <>
      <HeadMeta
        title="조직도 - 동우그룹"
        description="동우그룹의 조직도를 소개합니다."
        url="https://xn--2i0bm5iryeh7q.kr/info/organization"
      />

      <PageHeader main="동우그룹" sub="조직도" link="/info/greet"/>

      <OrganizationImage/>

    </>
  )
}

export default Organization