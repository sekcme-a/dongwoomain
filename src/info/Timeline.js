import React from 'react';
import styles from './Timeline.module.css';
import useData from 'context/data';
import { useEffect, useState } from 'react';
import EditButton from 'src/admin/EditButton';

const Timeline = () => {
  const {data, fetch_data} = useData()
  const [fetchedData, setFetchedData]= useState({
    title: '동우개발 연혁',
    description: '동우개발의 주요 사건과 발전 과정',
    events: [
      {
        date: '1998',
        title: '법인 설립',
        text: '서울시 강북구 수유동 법인 설립 (자본금 3억) / 소독업, 위생관리업, 물탱크 청소업, 수처리 제조업',
      },
      {
        date: '2005',
        title: '주식회사 동우개발 인수',
        text: '자본금 5억으로 증자, 공동주택관리업 등록, ISO 9001, 14001 인증',
      },
      {
        date: '2006',
        title: '주식회사 동우 C/S자회사 설립',
        text: '(주)동우C/S 설립(자본금 1억) - 위생관리용역업, 용역경비업, 건물관리업 허가 취득 / (주)우신프라임 자회사 설립(자본금 5억) - 승강기 유지관리업, 승강기 제조 및 설치업 허가 취득',
      },
      {
        date: '2009',
        title: '주식회사 혜진종합관리 인수',
        text: '(주)혜진종합관리 인수(자본금 5억) - 위생관리용역업, 용역 경비업, 건물 관리업 허가 취득',
      },
      {
        date: '2012', 
        title: '주식회사 동우개발 자본증자',
        text: '(주)동우개발 10억원으로 자본증자 / (주)동원ENG, 아람ENG 인수(자본금 각 4억원) - 시설물 유지관리업, 전기공사업, 전기감리업, 도장·방수 공사업 취득',
      },
    ],
  })

  useEffect(()=>{
    if(!data.history.fetched) fetch_data("history")
  },[])

  useEffect(() => {
    if(data?.history?.fetched){
      setFetchedData({
        ...data.history
      })
    }
  },[data?.history])


  return (
    <div className={styles.containerFluid}>
      <div className={styles.row}>
        <div className={styles.exampleTitle}>
          <h2 style={{position:"relative"}}>{fetchedData.title ?? "동우그룹 연혁"}<EditButton type="history" item="title" text="제목"/></h2>
          <p style={{position:"relative"}}>{fetchedData.subtitle ?? "동우그룹의 주요 사건과 발전 과정"}<EditButton type="history" item="subtitle" text="부제목"/></p>
        </div>
        <div className={styles.colXs10}>
          <ul className="timeline" style={{position:"relative"}}>
            <EditButton type="history" item="events" text="타임라인" mode="arrOfObj"/>
            {fetchedData.events?.map((event, eventIndex) => (
              <li key={eventIndex} className={styles.timelineItem}>
                <div className={styles.timelineInfo}>
                  <span>{event.date}</span>
                </div>
                <div className={styles.timelineMarker}></div>
                <div className={styles.timelineContent}>
                  <h3 className={styles.timelineTitle}>{event.title}</h3>
                  <p>{event.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Timeline;



// import React from 'react';
// import styles from './Timeline.module.css';
// import useData from 'context/data';
// import { useEffect, useState } from 'react';

// const Timeline = () => {
//   const {data, fetch_data} = useData()
//   const [fetchedData, setFetchedData]= useState({
//     timeline : [{
//     title: '동우개발 연혁',
//     description: '동우개발의 주요 사건과 발전 과정',
//     timelineLayout: 'timeline',
//     events: [
//       {
//         date: '2000년 1월 10일',
//         title: '회사 설립',
//         content: '동우개발은 이동우 대표에 의해 2000년 1월 10일에 설립되었습니다. 처음에는 작은 스타트업 기업으로 시작하였지만, 이동우 대표의 열정과 끈기로 빠르게 성장하였습니다. 회사 설립 당시에는 주로 소프트웨어 개발과 IT 서비스를 중심으로 사업을 진행하였습니다. 지난 20년 간의 노력과 경험을 바탕으로 동우개발은 지역적으로만 국한되지 않고 국제 시장으로도 진출하는데 성공하였습니다.',
//       }
//     ],
//   },
//     {
//       title: '동우개발 연혁',
//       description: '동우개발의 주요 사건과 발전 과정',
//       timelineLayout: 'timeline',
//       events: [
//         {
//           date: '2000년 1월 10일',
//           title: '회사 설립',
//           content: '동우개발은  대표에 의해 소프트웨어 개발과 IT 서비스를 목표로 설립되었습니다.',
//         }
//       ],
//     },
//   ]})

//   useEffect(()=>{
//     if(!data.history.fetched) fetch_data("history")
//   },[])

//   // useEffect(() => {
//   //   if(data?.history?.fetched){
//   //     setFetchedData({
//   //       ...data.history
//   //     })
//   //   }
//   // },[data?.history])


//   return (
//     <div className={styles.containerFluid}>
//       {fetchedData?.timeline?.map((section, index) => (
//         <div key={index} className={index % 2 === 0 ? styles.row : styles.rowEven}>
//           <div className={styles.exampleTitle}>
//             <h2>{section.title}</h2>
//             <p>{section.description}</p>
//           </div>
//           <div className={styles.colXs10}>
//             <ul className={section.timelineLayout}>
//               {section.events.map((event, eventIndex) => (
//                 <li key={eventIndex} className={styles.timelineItem}>
//                   <div className={styles.timelineInfo}>
//                     <span>{event.date}</span>
//                   </div>
//                   <div className={styles.timelineMarker}></div>
//                   <div className={styles.timelineContent}>
//                     <h3 className={styles.timelineTitle}>{event.title}</h3>
//                     <p>{event.content}</p>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Timeline;
