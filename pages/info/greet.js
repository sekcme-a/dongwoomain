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
        title="인사말 - 동우그룹"
        description="안녕하십니까, 동우그룹 회장 이육행 입니다. 인사말을 통해 우리의 목표와 가치에 대해 공유하고자 합니다."
        url="https://xn--2i0bm5iryeh7q.kr/info/greet"
      />
      <PageHeader main="동우그룹" sub="인사말" link="/info/greet"/>

      <Greetings/>
    </>
  )
}

export default Greet