import React from 'react';
import styles from '../styles/Subsidiary.module.css';
import { Button, Grid } from '@mui/material';
import { useEffect, useState } from 'react';

import EditButton from 'src/admin/EditButton';
import useData from 'context/data';

// 1024*819 사이즈 추천
const Card = () => {
  const { data } = useData();
  const [monitorWidth, setMonitorWidth] = useState(1200);

  const handleResize = () => {
    setMonitorWidth(window.innerWidth);
  };

  useEffect(() => {
    // 컴포넌트가 마운트될 때 이벤트 리스너를 추가합니다.
    window.addEventListener('resize', handleResize);

    // 컴포넌트가 언마운트될 때 이벤트 리스너를 제거합니다.
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // 빈 배열을 전달하여 처음 한 번만 이벤트 리스너를 추가합니다.

  const onButtonClick = (url) => {
    if (url) {
      window.open(url, '_blank');
    }
  };

  return (
    <section className="for-service ptb-100 bg-f8f8f8">
      <div className="sec-title">
        <h2>계열사</h2>
        <p style={{ fontWeight: "normal", position: "relative" }}>
          {data?.main?.subSidiarySubtitle ?? "동우그룹의 계열사를 소개합니다."}
          <EditButton type="main" item="subSidiarySubtitle" text="부제목" />
        </p>
      </div>

      {/* 
        💡 [간격 조정 디자인 - 1.4배 추가 확대 반영]
        카드 간 여백이 대폭 넓어짐에 따라 레이아웃의 좌우 균형을 튼튼하게 잡고자
        전체 가로 최대 크기(maxWidth)를 1300px에서 1400px로 쾌적하게 넓혔습니다.
      */}
      <Grid 
        container 
        justifyContent="center" 
        width="100%" 
        style={{ 
          padding: "40px 0 0 0", 
          maxWidth: "1400px", 
          margin: "0 auto" 
        }}
      >
        
        {/* ==================== 1번째 카드: 동우개발 ==================== */}
        {/* 
          💡 기존 padding "30px 15px"에서 1.4배 증가한 "42px 21px"를 적용하여
             카드 간의 시각적 호흡을 한층 더 정돈되고 기품 있게 늘렸습니다.
        */}
        <Grid item xs={12} sm={6} md={3} display="flex" justifyContent="center" style={{ padding: "42px 21px" }}>
          <div className={styles.container1}>
            <div className={styles.card}>
              <div className={styles.image}>
                <img
                  src={data?.main?.subSidiaryImg1 ?? "https://firebasestorage.googleapis.com/v0/b/dongwoo-315ab.appspot.com/o/data%2Fmain%2FsubSidiaryImg1?alt=media&token=6d077f54-7065-4f20-bb97-2cffb06e6932"}
                  alt="동우개발 로고"
                  width={300}
                  height={200}
                  style={{ objectFit: 'contain' }}
                />
                <EditButton type="main" item="subSidiaryImg1" text="이미지 삽입" mode="image" defaultImg="/example-logo.png" />
              </div>
              <div className={styles.content}>
                <h3>{data?.main?.subSidiaryTitle1 ?? "동우개발"}<EditButton type="main" item="subSidiaryTitle1" text="제목" /></h3>
                <p style={{ position: "relative", fontWeight: "normal", minHeight: "80px" }}>
                  {data?.main?.subSidiaryContent1 ?? "주택관리업 / 주택임대관리업 / 소독·청소 용역 / 경비업 / 근로자파견사업 / 입주관리업"}
                  <EditButton type="main" item="subSidiaryContent1" text="내용 " />
                </p>
                <Button onClick={() => onButtonClick(data?.main?.subSidiaryUrl1)} style={{ color: '#FF5D22', position: "relative" }}>
                  홈페이지로 이동
                  <EditButton type="main" item="subSidiaryUrl1" text="이동할 링크(https나 http가 포함되어야합니다." />
                </Button>
              </div>
            </div>
          </div>
        </Grid>

        {/* ==================== 2번째 카드: 혜진종합관리 ==================== */}
        {/* 💡 기존 대비 1.4배 넓어진 여백 반영 ("42px 21px") */}
        <Grid item xs={12} sm={6} md={3} display="flex" justifyContent="center" style={{ padding: "42px 21px" }}>
          <div className={styles.container2}>
            <div className={styles.card}>
              <div className={styles.image}>
                <img
                  src={data?.main?.subSidiaryImg2 ?? "https://firebasestorage.googleapis.com/v0/b/dongwoo-315ab.appspot.com/o/data%2Fmain%2FsubSidiaryImg2?alt=media&token=2610edf6-3000-470c-8622-fba8d7b0a4b5"}
                  alt="혜진종합관리 로고"
                  width={300}
                  height={200}
                  style={{ objectFit: 'contain' }}
                />
                <EditButton type="main" item="subSidiaryImg2" text="이미지 삽입" mode="image" defaultImg="/example-logo.png" />
              </div>
              <div className={styles.content}>
                <h3>{data?.main?.subSidiaryTitle2 ?? "혜진종합관리"}<EditButton type="main" item="subSidiaryTitle2" text="제목" /></h3>
                <p style={{ position: "relative", fontWeight: "normal", minHeight: "80px" }}>
                  {data?.main?.subSidiaryContent2 ?? "경비·경호 서비스업 / 입주관리업 / 이주관리서비스 / 근로자파견사업"}
                  <EditButton type="main" item="subSidiaryContent2" text="내용 " />
                </p>
                <Button onClick={() => onButtonClick(data?.main?.subSidiaryUrl2)} style={{ color: '#FF5D22', position: "relative" }}>
                  홈페이지로 이동
                  <EditButton type="main" item="subSidiaryUrl2" text="이동할 링크(https나 http가 포함되어야합니다." />
                </Button>
              </div>
            </div>
          </div>
        </Grid>

        {/* ==================== 3번째 카드: 삼성조경 ==================== */}
        {/* 💡 기존 대비 1.4배 넓어진 여백 반영 ("42px 21px") */}
        <Grid item xs={12} sm={6} md={3} display="flex" justifyContent="center" style={{ padding: "42px 21px" }}>
          <div className={styles.container3}>
            <div className={styles.card}>
              <div className={styles.image}>
                <img
                  src={data?.main?.subSidiaryImg3 ?? "https://firebasestorage.googleapis.com/v0/b/dongwoo-315ab.appspot.com/o/data%2Fmain%2FsubSidiaryImg3?alt=media&token=7d7d0eaf-a1bf-496e-a908-e749cc473336"}
                  alt="삼성조경 로고"
                  width={300}
                  height={200}
                  style={{ objectFit: 'contain' }}
                />
                <EditButton type="main" item="subSidiaryImg3" text="이미지 삽입" mode="image" defaultImg="/example-logo.png" />
              </div>
              <div className={styles.content}>
                <h3>{data?.main?.subSidiaryTitle3 ?? "삼성조경"}<EditButton type="main" item="subSidiaryTitle3" text="제목" /></h3>
                <p style={{ position: "relative", fontWeight: "normal", minHeight: "80px" }}>
                  {data?.main?.subSidiaryContent3 ?? "조경식재공사업 / 시설물설치공사"}
                  <EditButton type="main" item="subSidiaryContent3" text="내용 " />
                </p>
                <Button onClick={() => onButtonClick(data?.main?.subSidiaryUrl3)} style={{ color: '#FF5D22', position: "relative" }}>
                  홈페이지로 이동
                  <EditButton type="main" item="subSidiaryUrl3" text="이동할 링크(https나 http가 포함되어야합니다." />
                </Button>
              </div>
            </div>
          </div>
        </Grid>

        {/* ==================== ⭐ 4번째 카드: 삼성웰니스 ==================== */}
        {/* 💡 기존 대비 1.4배 넓어진 여백 반영 ("42px 21px") */}
        <Grid item xs={12} sm={6} md={3} display="flex" justifyContent="center" style={{ padding: "42px 21px" }}>
          <div className={styles.container4 || styles.container1}>
            <div className={styles.card}>
              <div className={styles.image}>
                <img
                  src={data?.main?.subSidiaryImg4 ?? "/samlogo.png"}
                  alt="삼성웰니스 로고"
                  width={300}
                  height={200}
                  style={{ objectFit: 'contain' }}
                />
                <EditButton type="main" item="subSidiaryImg4" text="이미지 삽입" mode="image" defaultImg="/samlogo.png" />
              </div>
              <div className={styles.content}>
                <h3>
                  {data?.main?.subSidiaryTitle4 ?? "삼성웰니스"}
                  <EditButton type="main" item="subSidiaryTitle4" text="제목" />
                </h3>
                {/* 💡 다른 카드와 완벽히 동일하게 스타일(fontSize, lineHeight 제거)을 통일했습니다. */}
                <p style={{ position: "relative", fontWeight: "normal", minHeight: "80px" }}>
                  {data?.main?.subSidiaryContent4 ?? (
                    <>
                      커뮤니티 시설 운영 / 피트니스 센터 운영 / 수영장 운영 /  <br />
                      G.X 프로그램 / 안전관리 시스템
                    </>
                  )}
                  <EditButton type="main" item="subSidiaryContent4" text="내용 " />
                </p>
                <Button 
                  onClick={() => onButtonClick(data?.main?.subSidiaryUrl4 ?? "https://www.xn--9i1bp8xbkap3cd5j.kr/")} 
                  style={{ color: '#FF5D22', position: "relative" }}
                >
                  홈페이지로 이동
                  <EditButton type="main" item="subSidiaryUrl4" text="이동할 링크(https나 http가 포함되어야합니다." />
                </Button>
              </div>
            </div>
          </div>
        </Grid>

      </Grid>
    </section>
  );
};

export default Card;