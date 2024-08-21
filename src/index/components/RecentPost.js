import { CircularProgress, Grid } from "@mui/material"
import useData from "context/data"
import { useEffect } from "react"
import styles from "./RecentPost.module.css"
import Link from "next/link"


const RecentPost = () => {
  const {thumbnailsList, fetch_thumbnails_list} = useData()

  useEffect(()=> {
    const fetchData = async () => {
      await fetch_thumbnails_list("announcement")
      await fetch_thumbnails_list("news")
      await fetch_thumbnails_list("24h")
    }
    fetchData()
  },[])


  return(
    <div style={{margin: "10vh 9vw 0 9vw"}}>
      <Grid container columnSpacing={0} rowSpacing={4}>

        <Grid item xs={12} md={5.5}>
          <div style={{display:"flex", justifyContent:"space-between", marginBottom:"20px", flexWrap:"wrap"}}>
            <h4 style={{margin: 0}}>공지사항</h4>
            <Link href="/article/announcement">
              <p className={styles.more}>+ More</p>
            </Link>
            <div className={styles.line} />
          </div>
          
          {
            thumbnailsList?.announcement ?
            thumbnailsList.announcement?.map((item, index) => {
              if(index<7)
                return(
                <Link key={index} href={`/post/annoucement/${item.id}`}>
                  <div  className={styles.item}>
                    <p style={{
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                      flex: 1,
                      marginBottom: 0,
                      color:"inherit", fontWeight:"400"
                    }}>{item.title}</p>
                    <p style={{paddingLeft:"20px", fontSize:"13px", color:"inherit", fontWeight: 400}}>
                      {item.publishedAt}
                    </p>
                  </div>
                </Link>
                )
            })
            :
            <div className={styles.center}>
              <CircularProgress size={25} />
            </div>
          }
        </Grid>

        <Grid item xs={0} md={1}>
          {/* <div className={styles.seperator_container}>
            <div className={styles.seperator} />
          </div> */}
        </Grid>

        <Grid item xs={12} md={5.5}>
        <div style={{display:"flex", justifyContent:"space-between", marginBottom:"20px", flexWrap:"wrap"}}>
            <h4 style={{margin: 0}}>동행뉴스</h4>
            <Link href="/article/news">
              <p className={styles.more}>+ More</p>
            </Link>
            <div className={styles.line} />
          </div>
          
          {
            thumbnailsList?.news ?
            thumbnailsList.news?.map((item, index) => {
              if(index<7)
              return(
                <Link key={index} href={`/post/news/${item.id}`}>
                  <div className={styles.item}>
                    <p style={{
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                      flex: 1,
                      marginBottom: 0,
                      color:"inherit", fontWeight:"400",
                    }}>{item.title}</p>
                    <p style={{paddingLeft:"20px", fontSize:"13px", color:"inherit", fontWeight: 400}}>
                      {item.publishedAt}
                    </p>
                  </div>
                </Link>
              )
            })
            :
            <div className={styles.center}>
              <CircularProgress size={25} />
            </div>
          }
        </Grid>

        {/* <Grid item xs={12} md={4}>
          <div style={{display:"flex", justifyContent:"space-between"}}>
            <h4>동우24시</h4>
            <p>+ More</p>
          </div>
          
          {
            thumbnailsList["24h"] ?
            thumbnailsList["24h"].splice(0,7).map((item, index) => (
              <div key={index}>
                <p>{item.title}</p>
              </div>
            ))
            :
            <CircularProgress />
          }
        </Grid> */}



      </Grid>
    
    
    </div>
  )
}

export default RecentPost