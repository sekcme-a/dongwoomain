import PageNavbar from "src/public/components/PageNavbar"
import PageHeader from "src/public/components/PageHeader"
import Timeline from "src/info/Timeline"
//https://cdn.imweb.me/thumbnail/20220721/d57f018ea93e2.png

import HeadMeta from "src/public/HeadMeta"






const History = () =>{

  return(
    <>
      <HeadMeta
        title="그룹연혁 - 동우그룹"
        description="동우그룹의 주요 사건과 발전 과정, 동우그룹의 연혁을 소개합니다."
        url="https://xn--2i0bm5iryeh7q.kr/info/history"
      />

      <PageNavbar />

      <PageHeader main="동우그룹" sub="그룹연혁" link="/info/greet"/>

      <Timeline />
    </>
  )
}

export default History