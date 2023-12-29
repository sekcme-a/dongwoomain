import PageNavbar from "src/public/components/PageNavbar"
import PageHeader from "src/public/components/PageHeader"
import ContactContent from "src/contact/ContactContent"
//https://cdn.imweb.me/thumbnail/20220721/d57f018ea93e2.png

import HeadMeta from "src/public/HeadMeta"
const Greet = () =>{


  return(
    <>
      <HeadMeta
        title="동우그룹-사업문의"
        description="동우그룹에 사업문의를 하실 수 있습니다."
        url="https://xn--2i0bm5iryeh7q.kr/service/contact"
      />
      <PageHeader main="고객서비스" sub="사업문의" link="/service/contact"/>

      <ContactContent />
    </>
  )
}

export default Greet