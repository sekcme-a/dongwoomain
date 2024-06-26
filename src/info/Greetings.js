import { Grid } from '@mui/material'
import styles from './Greetings.module.css'
import { useEffect, useState } from 'react'

import useData from 'context/data'
import EditButton from 'src/admin/EditButton'

const Greetings = () => {
  const {data, fetch_data} = useData()
  const [greetData, setGreetData] = useState({
    content: `이와 같은 목적을 달성하기 위해서는 회사의 이익도 중요하지만
  관리의 공익성을 추구하며 투명하고 신뢰받는 관리, 시설물의 하자 없는 관리, 질적인 환경 조성 관리,
  입주민과 함게 하는 공동체 문화 형성이 중요합니다.
  
  공동주택 및 복합건물의 관리목적은 시설물의 성능과 수명을 연장시키고 주거환경을 쾌적하게 조성한다는 것이라 생각합니다.
  현대의 건축물은 과거의 단순한 사용목적만을 충족시키는 공간 확보의 개념에서 벗어나
  좀 더 쾌적한 공간, 능률적인 기능 공간으로서의 복합적인 역할을 요구받고 있습니다.
  따라서 이를 완벽하게 운영하기 위해서는 고도로 훈련되고 전문적인 지식을 갖춘 관리요원들이
  필수적이라 하겠으며, 저희들은 입주민들의 재산이 바로 나의 것이라는 주인의식과 선량한 관리자로서의 
  사명감을 가지고 맡겨주신 건축물 관리에 최선을 다할 것을 다짐합니다.
  
  당사는 그동안의 축적된 관리 능력과 공신력을 바탕으로 지속적으로 새로운 관리 방법을 창출하고
  관리요원의 자질 향상과 봉사 자세의 생활화로 한층 더 노력할 것을 약속드리오니 계속적인 협조와 성원을
  부탁드리며 여러분의 가정에 행복과 건강이 함께 하시기를 진심으로 기원합니다.
  
  감사합니다.`,
    name: "이육행",
    headImg: "https://cdn.imweb.me/thumbnail/20220721/d57f018ea93e2.png",
    signImg: "https://cdn.imweb.me/upload/S202104058bb2801ba27b7/d1d00c82e785b.png"
  })
  useEffect(()=>{
    if(!data.greet.fetched) fetch_data("greet")
  },[])
  
  useEffect(() => {
    if(data?.greet?.fetched){
      setGreetData({
        content: data.greet.content,
        name: data.greet.name,
        headImg: data.greet.headImg,
        signImg: data.greet.signImg,
      })
    }
  },[data?.greet])



  return(
    <Grid container className={styles.main_container}>
      <Grid item xs={12} sm={4}>
        <div className={styles.image_container} style={{position:"relative"}}>
          <img src={greetData.headImg ?? "https://firebasestorage.googleapis.com/v0/b/dongwoo-315ab.appspot.com/o/data%2Fgreet%2FheadImg?alt=media&token=c7b90a89-96c1-4806-be57-9543c308fdf7"} alt="회장 이미지" style={{position:"relative"}}/>
          <EditButton type="greet" item="headImg" text="이미지 삽입" mode="image" defaultImg="https://cdn.imweb.me/thumbnail/20220721/d57f018ea93e2.png"/>
        </div>
        
      </Grid>


      <Grid item xs={12} sm={8} className={styles.right_container}>

        <div className={styles.header_container}>
          <div className={styles.line}></div>
          <p>회장 인사말</p>
        </div>

        <div className={styles.content_container}>
          <h3 style={{position:"relative"}}>안녕하십니까<br /> 동우그룹 <strong>회장 {greetData.name ?? "이육행"} <EditButton type="greet" item="name" text="회장명" /></strong>입니다. </h3>
          <p style={{position:"relative"}}>{greetData.content ?? `
          인사말을 통해 우리의 목표와 가치에 대해 공유하고자 합니다.

          우리의 목적은 회사의 이익 뿐만 아니라 관리의 공익성을 추구하며, 투명하고 신뢰받는 관리, 시설물의 무결한 유지, 그리고 공동체 문화 형성을 통한 품질 높은 환경 조성입니다.
          
          공동주택 및 복합건물의 관리목적은 시설물의 성능과 수명을 연장시키며 주거환경을 더 쾌적하게 만드는 것입니다. 현대 건축물은 단순한 사용 목적을 넘어 다양한 기능을 수행해야 합니다. 따라서 효율적인 운영을 위해서는 훈련 및 전문적인 지식을 보유한 관리가 필수적입니다.
          
          저희는 입주민들의 재산을 소중히 여기며 주인 의식과 선량한 관리자로서의 사명감을 갖고 최선을 다하겠습니다. 우리의 노하우와 경험을 바탕으로 지속적인 혁신을 통해 관리 방법을 개선하고, 관리주체의 역량 향상과 봉사자로서의 자세를 강화해 나가겠습니다.
          
          당사는 입주민들의 안전과 만족을 최우선에 두며, 계속적인 협조와 성원을 부탁 드립니다. 여러분의 가정에 항상 행복과 건강이 함께하길 기원합니다.
          
          감사합니다.`}<EditButton type="greet" item="content" text="인사말 작성" /></p>
          <h4>{`동우그룹 회장 ${greetData.name ?? "이육행"} 배상`}</h4>
          <img src={greetData.signImg ?? "https://cdn.imweb.me/upload/S202104058bb2801ba27b7/d1d00c82e785b.png"} alt="회장 사인" />
          <div style={{position:"relative"}}><EditButton type="greet" item="signImg" text="사인 이미지 삽입" mode="image" defaultImg="https://cdn.imweb.me/upload/S202104058bb2801ba27b7/d1d00c82e785b.png"/></div>
          
        </div>

      </Grid>

    </Grid>
  )
}

export default Greetings