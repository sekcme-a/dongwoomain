import PageNavbar from "src/public/components/PageNavbar"
import PageHeader from "src/public/components/PageHeader"
import FinancialCompo from "src/management/Financial"

import HeadMeta from "src/public/HeadMeta"

const Financial = () => {
  return(
    <>
      <HeadMeta
        title="회계관리 - 동우그룹"
        description="(주)동우개발은 분야별 전문이력의 총원과 체계적인 교육 및 관리를 실시합니다."
        url="https://xn--2i0bm5iryeh7q.kr/management/financial"
      />

      <PageHeader main="사업분야" sub="회계관리" link="/management/housing"/>

      <FinancialCompo />
    </>
  )
}

export default Financial