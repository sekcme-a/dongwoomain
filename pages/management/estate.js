import PageNavbar from "src/public/components/PageNavbar"
import PageHeader from "src/public/components/PageHeader"
import EstateCompo from "src/management/Estate"

import HeadMeta from "src/public/HeadMeta"

const  Estate = () => {
  return(
    <>
      <HeadMeta
        title="부동산자산 관리 - 동우그룹"
        description="고객의 부동산자산가치 극대화를 최우선 목표로 최적화된 부동산 자산관리PM 서비스를 제공하고 있습니다."
        url="https://xn--2i0bm5iryeh7q.kr/management/estate"
      />

      <PageHeader main="사업분야" sub="부동산자산관리" link="/management/housing"/>

      <EstateCompo/>
    </>
  )
}

export default Estate