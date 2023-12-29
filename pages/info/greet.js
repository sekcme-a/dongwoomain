import { useEffect, useState } from "react"
import useData from "context/data"

import PageNavbar from "src/public/components/PageNavbar"
import PageHeader from "src/public/components/PageHeader"
import Greetings from "src/info/Greetings"
//https://cdn.imweb.me/thumbnail/20220721/d57f018ea93e2.png

import HeadMeta from "src/public/HeadMeta"


const Greet = () =>{
  const {data} = useData()



  return(
    <>
      <HeadMeta
        title="동우그룹-인사말"
        description="동우그룹의 인사말입니다."
        url="https://xn--2i0bm5iryeh7q.kr/info/greet"
      />
      <PageHeader main="동우그룹" sub="인사말" link="/info/greet"/>

      <Greetings/>
    </>
  )
}

export default Greet