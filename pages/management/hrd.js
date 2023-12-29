
import PageHeader from "src/public/components/PageHeader"
import HrdCompo from "src/management/Hrd"

import HeadMeta from "src/public/HeadMeta"

const Estate = () => {
  return(
    <>

      <HeadMeta
        title="동우그룹-인사관리"
        description="동우그룹의 인사관리에 대해 소개드립니다."
        url="https://xn--2i0bm5iryeh7q.kr/management/hrd"
      />

      <PageHeader main="사업분야" sub="인사관리" link="/management/housing"/>

      <HrdCompo/>
    </>
  )
}

export default Estate