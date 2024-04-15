import PageNavbar from "src/public/components/PageNavbar"
import PageHeader from "src/public/components/PageHeader"
import MapCompo from "src/info/Map"
import styles from "src/info/MapIndex.module.css"
import { useState, useEffect } from "react"
import useData from "context/data"
import EditButton from "src/admin/EditButton"
import HeadMeta from "src/public/HeadMeta"
const Map = () => {
  const {data, fetch_data} = useData()
  const [fetchedData, setFetchedData] = useState({
    locX: 37.668769,
    locY: 127.035654,
    address: `서울특별시 도봉구 시루봉로 234, 동우빌딩 2층
지번: 방학동 622-33`,
    subway: `1호선 방학역 1번 출구 도보 14분`,
    bus: `방학2동주민센터 92m (지선 1128,1139,1167 일반 72-3)
방학2동공영주차장 110m (지선 1128,1139,1167 일반 72-3)`,
  })

  useEffect(()=>{
    if(!data.map.fetched) fetch_data("map")
  },[])

  useEffect(() => {
    if(data?.map?.fetched){
      setFetchedData({
        ...data.map
      })
    }
  },[data?.map])


  return(
    <>
      <HeadMeta
        title="오시는 길 - 동우그룹"
        description="동우그룹으로 오시는 길을 알려드립니다. 주소: 서울특별시 도봉구 시루봉로 234, 동우빌딩 2층"
        url="https://xn--2i0bm5iryeh7q.kr/info/map"
      />

      <PageHeader main="동우그룹" sub="오시는 길" link="/info/greet"/>
      
      <div className={styles.main_container}>
        <h1>오시는 길</h1>
        <p style={{position:"relative"}}>{fetchedData.subtitle ?? "동우그룹으로 오시는 길을 알려드립니다."} <EditButton type="map" item="subtitle" text="부제목"/></p>
        <MapCompo title="동우그룹" locX={fetchedData.locX} locY={fetchedData.locY}/>
        <h2 className={styles.title} style={{position:"relative"}}><EditButton type="map" item="subtitle" mode="map" text="경도/위도"/>찾아오시는 길</h2>
          <ul className={styles.mainContainer}>

            <li className={styles.container}>
              <h5 className={styles.item} style={{position:"relative"}}>
                - 주 소 <EditButton type="map" item="address" text="주소"/>
              </h5>
              <p className={styles.context}>
                {fetchedData.address}<br/>
              </p>
            </li>


            <li className={styles.container}>
              <h5 className={styles.item} style={{position:"relative"}}>
                - 지하철 역 <EditButton type="map" item="subway" text="지하철 역 "/>
              </h5>
              <p className={styles.context}>
                {fetchedData.subway}<br/>
              </p>
            </li>


            <li className={styles.container}>
              <h5 className={styles.item} style={{position:"relative"}}>
                - 버스정류장 <EditButton type="map" item="bus" text="버스정류장"/>
              </h5>
              <p className={styles.context}>
                {fetchedData.bus}
              </p>
            </li>

          </ul>
      </div>

    </>
  )
}

export default Map