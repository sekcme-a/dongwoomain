import PageNavbar from "src/public/components/PageNavbar"
import PageHeader from "src/public/components/PageHeader"
import EstateCompo from "src/management/Estate"

import HeadMeta from "src/public/HeadMeta"

const  Estate = () => {
  return(
    <>
      <HeadMeta
        title="동우그룹-부동산자산관리"
        description="동우그룹의 부동산자산관리에 대해 소개드립니다."
        url="https://xn--2i0bm5iryeh7q.kr/management/estate"
      />

      <PageHeader main="사업분야" sub="부동산자산관리" link="/management/housing"/>

      <EstateCompo/>
    </>
  )
}

export default Estate