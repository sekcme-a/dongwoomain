import React, { useState } from 'react';
import FsLightbox from 'fslightbox-react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import useData from 'context/data';
import EditButton from 'src/admin/EditButton';
import Image from 'next/image';

SwiperCore.use([Navigation, Autoplay]) // Swiper

const Banner = () => {
    const [toggler, setToggler] = useState(false);
    const {data} = useData()
    return (
		<>
            <FsLightbox
                toggler={ toggler }
                sources={ [
                    data.main.introUrl,
                ] }
            />

			<div className="home-section">
                <Swiper 
                    navigation={true} 
                    modules={[Navigation]} 
                    className="home-slides"
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    loop={true}
                >
                    <SwiperSlide>
                        <div className="main-banner" style={{position:"relative"}}
                        // style={{backgroundImage:`url(${data.main.bannerBg ?? "https://firebasestorage.googleapis.com/v0/b/dongwoo-315ab.appspot.com/o/data%2Fmain%2FbannerBg?alt=media&token=38faae2d-6bc7-4331-9bc9-d743f882fb95"})`}}
                        >
                            <Image
                            src={data.main.bannerBg ?? "https://firebasestorage.googleapis.com/v0/b/dongwoo-315ab.appspot.com/o/data%2Fmain%2FbannerBg?alt=media&token=38faae2d-6bc7-4331-9bc9-d743f882fb95"}
                            alt="메인 배경"
                            layout='fill'
                            />
                            <EditButton
                                type="main" item="bannerBg" text="배경이미지 삽입" mode="image" defaultImg="/banner1.jpg" 
                                style={{position:"absolute", top: 150, right: 100}}
                            />
                            <div className="d-table">
                                <div className="d-table-cell">
                                    <div className="container">
                                        <div className="main-banner-content" style={{zIndex: 100}}>
                                            <span className="sub-title" style={{position:"relative", zIndex:"100"}}>{data.main.subtitle ?? "꺠끗하고 투명한 관리"}<EditButton type="main" item="subtitle" text="부제목"/></span>
                                            <h1 style={{position:"relative"}}>{data.main.title ?? "함께 동행하는, 동우그룹"}<EditButton type="main" item="title" text="제목"/></h1>

                                            <div className="btn-box">
                                                <Link href="/info/greet" legacyBehavior>
                                                    <a className="default-btn">
                                                        동우그룹 소개<span></span>
                                                    </a>
                                                </Link>

                                                <div
                                                    className="optional-btn"
                                                    onClick={ () => setToggler(!toggler) }
                                                    // style={{marginLeft:"20px"}}
                                                > 
                                                    <i className="flaticon-play-button"></i> 소개영상 <EditButton type="main" item="introUrl" text="소개영상 URL" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>

                <div className="banner-footer">
                    <div className="container-fluid p-0">
                        <div className="row m-0 align-items-center">
                            <div className="col-lg-5 col-md-12 p-0">
                                <div className="banner-video">
                                    <div
                                        className="video-btn"
                                        onClick={ () => setToggler(!toggler) }
                                    > 
                                        <i className="flaticon-play-button-1"></i>
                                        <EditButton type="main" item="introUrl" text="소개영상 URL" />
                                    </div>
                                
                                    <span>동우그룹 소개</span>
                                </div>
                            </div>

                            <div className="col-lg-7 col-md-12 p-0">
                                <div className="banner-contact-info">
                                    <ul>
                                        <li>
                                            <i className="flaticon-location"></i>
                                            <span>회사 위치</span>
                                            <div style={{whiteSpace:"pre-line"}}>{data.main.location ?? "서울 도봉구 시루봉로 234 동우빌딩"}</div>
                                            <EditButton type="main" item="location" text="회사 위치" />
                                        </li>

                                        <li>
                                            <i className="flaticon-email"></i>
                                            <span>이메일 주소</span>
                                            <a href={`mailto:${data.main.email ?? "dongwoodh@hanmail.net"}`}>{data.main.email ??  "dongwoodh@hanmail.net"} <EditButton type="main" item="email" text="이메일" /></a>
                                            {/* <a href="mailto:support@tuam.com">support@tuam.com</a> */}
                                        </li>

                                        <li>
                                            <i className="flaticon-calendar"></i>
                                            <span>영업시간</span>
                                            {data.main.time ?? "월-금 9AM ~ 6PM"}<EditButton type="main" item="time" text="영업시간" />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
		</>
    );
}

export default Banner;