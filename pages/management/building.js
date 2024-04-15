import PageHeader from "src/public/components/PageHeader"
import BuildingCompo from "src/management/Building"


import HeadMeta from "src/public/HeadMeta"

const Building = () => {
  return(
    <>

      <HeadMeta
        title="빌딩종합관리 - 동우그룹"
        description="동우그룹의 빌딩종합관리는 빌딩 관리를 통해 건물의 수명 연장과 재산가치 증대를 위해 서비스를 제공하"
        url="https://xn--2i0bm5iryeh7q.kr/management/building"
      />


      <PageHeader main="사업분야" sub="빌딩종합관리" link="/management/housing"/>

      <BuildingCompo />
    </>
  )
}

export default Building