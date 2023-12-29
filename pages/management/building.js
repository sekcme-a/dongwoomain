import PageHeader from "src/public/components/PageHeader"
import BuildingCompo from "src/management/Building"


import HeadMeta from "src/public/HeadMeta"

const Building = () => {
  return(
    <>

      <HeadMeta
        title="동우그룹-빌딩종합관리"
        description="동우그룹의 빌딩종합관리에 대해 소개드립니다."
        url="https://xn--2i0bm5iryeh7q.kr/management/building"
      />


      <PageHeader main="사업분야" sub="빌딩종합관리" link="/management/housing"/>

      <BuildingCompo />
    </>
  )
}

export default Building