import PageNavbar from "src/public/components/PageNavbar"
import PageHeader from "src/public/components/PageHeader"
import Timeline from "src/info/Timeline"
//https://cdn.imweb.me/thumbnail/20220721/d57f018ea93e2.png

import HeadMeta from "src/public/HeadMeta"






const History = () =>{

  return(
    <>
      <HeadMeta
        title="동우그룹-그룹연혁"
        description="동우그룹의 그룹연혁입니다."
        url="https://xn--2i0bm5iryeh7q.kr/info/history"
      />

      <PageNavbar />

      <PageHeader main="동우그룹" sub="그룹연혁" link="/info/greet"/>

      <Timeline />
    </>
  )
}

export default History