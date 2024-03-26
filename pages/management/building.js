import PageHeader from "src/public/components/PageHeader"
import BuildingCompo from "src/management/Building"


import HeadMeta from "src/public/HeadMeta"

const Building = () => {
  return(
    <>

      <HeadMeta
        title="빌딩종합관리 - 동우그룹"
        description="(주)동우개발은 공동주택관리 분야를 선도하고 있습니다. 동우그룹의 빌딩종합관리에 대해 소개드립니다."
        url="https://xn--2i0bm5iryeh7q.kr/management/building"
      />


      <PageHeader main="사업분야" sub="빌딩종합관리" link="/management/housing"/>

      <BuildingCompo />
    </>
  )
}

export default Building