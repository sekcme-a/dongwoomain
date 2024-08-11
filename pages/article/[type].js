import { CircularProgress, Grid } from "@mui/material"
import Type from "src/article/Type"
import PageHeader from "src/public/components/PageHeader"
import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import useData from "context/data"
import AnnouncementCompo from "src/article/Announcement"
import HeadMeta from "src/public/HeadMeta"
import Head from "next/head"

const Article = () => {
  const router = useRouter()
  const {type} = router.query
  const [typeText, setTypeText] = useState("")
  const {thumbnailsList, fetch_thumbnails_list} = useData()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(()=> {
    const fetchData = async () => {
      if(type && thumbnailsList[type]) setIsLoading(false)
      else if (type) {
        await fetch_thumbnails_list(type)
        setIsLoading(false)
      }
    }
    fetchData()
  },[type])

  useEffect(() =>{
    if(type==="announcement")
      setTypeText("공지사항")
    else if(type==="news")
      setTypeText("동행뉴스")
    else if(type==="24h")
      setTypeText("동우24시")
    // else if(type==="gallery")
    //   setTypeText("동우사보")
  },[type])


  return(
    <>
      <HeadMeta
        title="동행소식 - 동우그룹"
        description="동우그룹의 동행소식을 확인하세요."
        url={`https://xn--2i0bm5iryeh7q.kr/info/article/${type}`}
      />
      <PageHeader main="동행소식" sub={typeText} link={`/article/${type}`}/>

      {isLoading ? <div style={{width:"100vw", marginTop:'100px',marginBottom:"100px",  display:"flex", justifyContent:"center"}}><CircularProgress /></div> : 
        // type==="announcement" ?
        //   <AnnouncementCompo list={thumbnailsList[type]}/> 
        //   :
          <Type list={thumbnailsList[type]} {...{type, typeText}}/>}
      <div style={{marginBottom:"100px"}}></div>
    </>
  )
}

export default Article