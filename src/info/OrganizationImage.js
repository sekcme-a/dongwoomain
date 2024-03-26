import { useState, useEffect } from "react"
import styles from "./OrganizationImage.module.css"
import useData from "context/data"
import EditButton from "src/admin/EditButton"


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
      <img src={fetchedData.imgUrl} />
    </div>
  )
}

export default OrganizationImage