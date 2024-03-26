import PageNavbar from "src/public/components/PageNavbar"
import PageHeader from "src/public/components/PageHeader"
import HousingCompo from "src/management/Housing"

import HeadMeta from "src/public/HeadMeta"


const Housing = () => {
  return(
    <>
      <HeadMeta
        title="공동주택관리 - 동우그룹"
        description="고객 감동서비스를 경영이념으로 실천하며 선진화 된 경영관리 방법을 현장에 적용하여 공동주택관리 업계를 선도하는 기업으로서의 책임을 다하고 있습니다."
        url="https://xn--2i0bm5iryeh7q.kr/management/housing"
      />

      <PageHeader main="사업분야" sub="공동주택관리" link="/management/housing"/>

      <HousingCompo />
    </>
  )
}

export default Housing