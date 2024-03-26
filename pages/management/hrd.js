
import PageHeader from "src/public/components/PageHeader"
import HrdCompo from "src/management/Hrd"

import HeadMeta from "src/public/HeadMeta"

const Estate = () => {
  return(
    <>

      <HeadMeta
        title="인사관리 - 동우그룹"
        description="(주)동우개발은 분야별 전문이력의 총원과 체계적인 교육 및 관리를 실시합니다."
        url="https://xn--2i0bm5iryeh7q.kr/management/hrd"
      />

      <PageHeader main="사업분야" sub="인사관리" link="/management/housing"/>

      <HrdCompo/>
    </>
  )
}

export default Estate