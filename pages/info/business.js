import PageNavbar from "src/public/components/PageNavbar"
import PageHeader from "src/public/components/PageHeader"
import Business from "src/info/Business"
import HeadMeta from "src/public/HeadMeta"
//https://cdn.imweb.me/thumbnail/20220721/d57f018ea93e2.png
const Greet = () =>{


  return(
    <>
      <HeadMeta
        title="경영방침 - 동우그룹"
        description="동우그룹의 경영방침은 df(dongwoo fidelity)를 이니셜을 모티브로 하여 (주)동우개발의 의지를 담아낸 CI 입니다."
        url="https://xn--2i0bm5iryeh7q.kr/info/business"
      />
      <PageHeader main="동우그룹" sub="경영방침" link="/info/greet"/>

      <Business />
    </>
  )
}

export default Greet