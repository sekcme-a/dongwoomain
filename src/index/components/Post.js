import { useState } from "react"
import useData from "context/data"
import EditButton from "src/admin/EditButton"
import Link from "next/link"
import { Grid } from "@mui/material"

import styles from "./Post.module.css"
import { useEffect } from "react"

import { firestore as db } from "firebase/firebase"
import { useRouter } from "next/router"

// export const Card = () => {
//   const [isHover, setIsHover] = useState(false)

//   const handleHover = (isIn) => {
//     if(isIn && !isHover) setIsHover(true)
//     else if(!isIn && isHover) setIsHover(false)
//   }

//   return(
//     <Grid item xs={12} sm={6} md={4}>
//     <div className={styles.item_container}
//       onMouseEnter={()=>handleHover(true)}
//       onMouseLeave={()=>handleHover(false)}
//     >
//       <img src="/aboutUs3.jpg" alt="공지사항" />
//       <div className={styles.gradient_container} />
//       <div className={`${styles.content_container} ${isHover ? styles.hover : ""}`}>
//         <p>Notice</p>
//         <h4>공지사항</h4>
//         <ul className={`${styles.post_container} ${isHover ? styles.hover : ""}`}>
//           <li>asdf lasdkjlkasd fldjaks asldkfj</li>
//           <li>asdf lasdkjlkasd fldjaks asldkfj</li>
//           <li>asdf lasdkjlkasd fldjaks asldkfj</li>
//         </ul>
//       </div>
//     </div>
//   </Grid>
//   )
// }
const Post = () => {
  const router = useRouter()
  const {data} = useData()
  const [isHover, setIsHover] = useState(false)
  const handleHover = (isIn) => {
    if(isIn && !isHover) setIsHover(true)
    else if(!isIn && isHover) setIsHover(false)
  }
  const [isHover2, setIsHover2] = useState(false)
  const handleHover2 = (isIn) => {
    if(isIn && !isHover2) setIsHover2(true)
    else if(!isIn && isHover2) setIsHover2(false)
  }
  const [isHover3, setIsHover3] = useState(false)
  const handleHover3 = (isIn) => {
    if(isIn && !isHover3) setIsHover3(true)
    else if(!isIn && isHover3) setIsHover3(false)
  }

  const [isLiHover1, setIsLiHover1] = useState(false)
  const handleLiHover1 = (isIn) => {
    if(isIn && !isLiHover1) setIsLiHover1(true)
    else if(!isIn && isLiHover1) setIsLiHover1(false)
  }

  // const [isHover2, setIsHover2] = useState(false)
  // const handleHover2 = (isIn) => {
  //   if(isIn && !isHover2) setIsHover2(true)
  //   else if(!isIn && isHover2) setIsHover2(false)
  // }

  const [announcements, setAnnouncements] = useState([])
  const [news, setNews] = useState([])

  useEffect(()=> {
    const fetchData = async () => {
      const querySnapshot = await db.collection("team").doc("dongwoomain")
      .collection("thumbnails").where("condition","==","게제중")
      .where("type","==",'announcement').orderBy("savedAt","desc").limit(3).get()
      
      if(!querySnapshot.empty){
        const list = querySnapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}))
        setAnnouncements(list)
      }

      const querySnapshot2 = await db.collection("team").doc("dongwoomain")
      .collection("thumbnails").where("condition","==","게제중")
      .where("type","==",'news').orderBy("savedAt","desc").limit(3).get()
      
      if(!querySnapshot2.empty){
        const list = querySnapshot2.docs.map((doc) => ({id: doc.id, ...doc.data()}))
        setNews(list)
      }
    }

    fetchData()
  },[])

  return(
    <>
      <section className="services-area ptb-100 bg-f8f8f8">
        <div className={styles.main_container} >
          <div className="section-title">
              <h2>동행소식</h2>
              <p style={{fontWeight:"normal", position:"relative"}}>
                {data.main.postSubtitle ?? "동우그룹의 동행소식입니다."}
                <EditButton type="main" item="postSubtitle" text="부제목" />
              </p>
          </div>

          <Grid container columnSpacing={2} rowSpacing={3}>

          <Grid item xs={12} sm={6} md={4} style={{position:'relative'}}>
            <EditButton type="main" item={`postImg1`} 
                text="이미지" mode="image" defaultImg="/aboutUs1.jpg"
              />
            <div className={styles.item_container}
              onMouseEnter={()=>handleHover(true)}
              onMouseLeave={()=>handleHover(false)}
              onClick={()=>{
                if(!isLiHover1) router.push(`/article/announcement`)}}
            >
              <img src={data.main.postImg1 ?? "https://firebasestorage.googleapis.com/v0/b/dongwoo-315ab.appspot.com/o/data%2Fmain%2FpostImg1?alt=media&token=61c49ed0-e2d1-4fb8-9693-fd680cbd663f"} alt="공지사항" />


              <div className={styles.gradient_container} />
              <div className={`${styles.content_container} ${isHover ? styles.hover : ""}`}>
                <p>Notice</p>
                <h4>공지사항</h4>
                {announcements.length===0 &&
                    <div style={{width:"100%", textAlign:"center", marginTop:"20px"}}>아직 공지사항이 없습니다.</div>
                  }
                <ul className={`${styles.post_container} ${isHover ? styles.hover : ""}`}>

                  {announcements.map((item, index) => (
                    <li key={index}
                      onClick={()=>router.push(`/post/announcement/${item.id}`)}
                      onMouseEnter={()=>handleLiHover1(true)}
                      onMouseLeave={()=>handleLiHover1(false)}
                    >
                      {item.title}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Grid>

          <Grid item xs={12} sm={6} md={4}  style={{position:'relative'}}>
          <EditButton type="main" item={`postImg2`} 
                text="이미지" mode="image" defaultImg="/aboutUs1.jpg"
              />
          <div className={styles.item_container}
              onMouseEnter={()=>handleHover2(true)}
              onMouseLeave={()=>handleHover2(false)}
              onClick={()=>{
                if(!isLiHover1) router.push(`/article/news`)}}
            >
              <img src={data.main.postImg2 ?? "https://firebasestorage.googleapis.com/v0/b/dongwoo-315ab.appspot.com/o/data%2Fmain%2FpostImg2?alt=media&token=6cbed266-1d72-4442-8e6a-8c9a9eff887a"} alt="공지사항" />
              <div className={styles.gradient_container} />
              <div className={`${styles.content_container} ${isHover2 ? styles.hover : ""}`}>
                <p>News</p>
                <h4>동행뉴스</h4>
                {news.length===0 &&
                    <div style={{width:"100%", textAlign:"center", marginTop:"20px"}}>아직 동행뉴스가 없습니다.</div>
                  }
                <ul className={`${styles.post_container} ${isHover2 ? styles.hover : ""}`}>

                  {news.map((item, index) => (
                    <li key={index}
                      onClick={()=>router.push(`/post/news/${item.id}`)}
                      onMouseEnter={()=>handleLiHover1(true)}
                      onMouseLeave={()=>handleLiHover1(false)}
                    >
                      {item.title}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Grid>


          <Grid item xs={12} sm={6} md={4} style={{position:"relative"}}>
          <EditButton type="main" item={`postImg3`} 
                text="이미지" mode="image" defaultImg="/aboutUs1.jpg"
              />
          <div className={styles.item_container}
            onClick={()=>router.push(`https://www.youtube.com/@user-wq1ug3dw6k`)}
              onMouseEnter={()=>handleHover3(true)}
              onMouseLeave={()=>handleHover3(false)}
            >
              <img src={data.main.postImg3 ?? "https://firebasestorage.googleapis.com/v0/b/dongwoo-315ab.appspot.com/o/data%2Fmain%2FpostImg3?alt=media&token=df3a802a-f1ae-4995-afcc-9a1b3da272d4"} alt="공지사항" />
              <div className={styles.gradient_container} />
              <div className={`${styles.content_container} ${isHover3 ? styles.hover3 : ""}`}>
                <p>Youtube</p>
                <h4>동우24시</h4>
              </div>
            </div>
          </Grid>

          </Grid>
        </div>
      </section>
    </>
  )
}

export default Post