import PageNavbar from "src/public/components/PageNavbar"
import PageHeader from "src/public/components/PageHeader"
import HousingCompo from "src/management/Housing"

import HeadMeta from "src/public/HeadMeta"


const Housing = () => {
  return(
    <>
      <HeadMeta
        title="동우그룹-공동주택관리"
        description="동우그룹의 공동주택관리에 대해 소개드립니다."
        url="https://xn--2i0bm5iryeh7q.kr/management/housing"
      />

      <PageHeader main="사업분야" sub="공동주택관리" link="/management/housing"/>

      <HousingCompo />
    </>
  )
}

export default Housing