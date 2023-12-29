import PageNavbar from "src/public/components/PageNavbar"
import PageHeader from "src/public/components/PageHeader"
import Business from "src/info/Business"
import HeadMeta from "src/public/HeadMeta"
//https://cdn.imweb.me/thumbnail/20220721/d57f018ea93e2.png
const Greet = () =>{


  return(
    <>
      <HeadMeta
        title="동우그룹-경영방침"
        description="동우그룹의 경영방침은 df(dongwoo fidelity)를 이니셜을 모티브로 하여..."
        url="https://xn--2i0bm5iryeh7q.kr/info/business"
      />
      <PageHeader main="동우그룹" sub="경영방침" link="/info/greet"/>

      <Business />
    </>
  )
}

export default Greet