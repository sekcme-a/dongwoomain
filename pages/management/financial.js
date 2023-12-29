import PageNavbar from "src/public/components/PageNavbar"
import PageHeader from "src/public/components/PageHeader"
import FinancialCompo from "src/management/Financial"

import HeadMeta from "src/public/HeadMeta"

const Financial = () => {
  return(
    <>
      <HeadMeta
        title="동우그룹-회계관리"
        description="동우그룹의 회계관리에 대해 소개드립니다."
        url="https://xn--2i0bm5iryeh7q.kr/management/financial"
      />

      <PageHeader main="사업분야" sub="회계관리" link="/management/housing"/>

      <FinancialCompo />
    </>
  )
}

export default Financial