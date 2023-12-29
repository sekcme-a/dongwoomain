import PageNavbar from "src/public/components/PageNavbar"
import PageHeader from "src/public/components/PageHeader"
import ContactContent from "src/contact/ContactContent"
//https://cdn.imweb.me/thumbnail/20220721/d57f018ea93e2.png

import HeadMeta from "src/public/HeadMeta"


const Greet = () =>{


  return(
    <>
      <HeadMeta
        title="동우그룹-건의사항"
        description="동우그룹에 건의사항을 보내주세요."
        url="https://xn--2i0bm5iryeh7q.kr/service/recommand"
      />


      <PageHeader main="고객서비스" sub="건의사항" link="/service/recommand"/>

      <ContactContent type="type2"/>
    </>
  )
}

export default Greet