import { useState, useEffect } from "react"
import styles from "./OrganizationImage.module.css"
import useData from "context/data"
import EditButton from "src/admin/EditButton"
import Image from "next/image"


const OrganizationImage = () => {
  const {data, fetch_data} = useData()
  const [fetchedData, setFetchedData] = useState({
    imgUrl: "/dwgroup_organization.png"
  })

  useEffect(()=>{
    if(!data.organization.fetched) fetch_data("organization")
  },[])

  useEffect(() => {
    if(data?.organization?.fetched){
      setFetchedData({
        ...data.organization
      })
    }
  },[data?.organization])


  return(
    <div className={styles.main_container} style={{position:"relative"}}>
      {/* <h1 style={{textAlign:"center", color:"black", fontWeight:'bold'}}>동우그룹의 조직도를 소개합니다.</h1> */}
      <EditButton type="organization" item="imgUrl" text="조직도 이미지 삽입" mode="image" defaultImg="/dwgroup_organization.png"/>
      <div style={{width:"100%",height:"120vh", position:"relative"}}>
        <Image
          src={fetchedData.imgUrl ?? "https://firebasestorage.googleapis.com/v0/b/dongwoo-315ab.appspot.com/o/data%2Forganization%2FimgUrl?alt=media&token=86d699e8-3095-458f-8766-91822354e246"}
          alt="동우그룹 조직도"
          // width={500}
          // height={300}
          // layout="fill"
          objectFit="contain"
          // width={0}
          // height={0}
          // sizes="70vw"
          layout="fill"
          
          // style={{width:"100%", height:"auto"}}
        />
      </div>
    </div>
  )
}

export default OrganizationImage