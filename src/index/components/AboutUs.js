import React from 'react';
import Link from 'next/link';
import styles from "../styles/AboutUs.module.css";
import EditButton from 'src/admin/EditButton';
import useData from 'context/data';
import Image from 'next/image';

const AboutUs = () => {

    const {data} = useData()
    return (
        <>
            <section className="about-section ptb-100">
                <div className="dwg-con-fluid">
                    <div className="row align-items-center">

                        <div className="col-lg-6 col-md-12">
                            <div className="abt-img" >
                                <div className="img1" >
                                    <Image
                                        src={data.main.aboutUsImg ?? "https://firebasestorage.googleapis.com/v0/b/dongwoo-315ab.appspot.com/o/data%2Fmain%2FaboutUsImg?alt=media&token=7566a5f9-59d2-4e07-a892-67919953adcf"}
                                        alt="about us"
                                        width={460}
                                        height={570}
                                        objectFit='contain'
                                        className={styles.img1}
                                    />
                                    {/* <img src={data.main.aboutUsImg ?? "https://firebasestorage.googleapis.com/v0/b/dongwoo-315ab.appspot.com/o/data%2Fmain%2FaboutUsImg?alt=media&token=7566a5f9-59d2-4e07-a892-67919953adcf"} alt="image" className={styles.img1} /> */}
                                    <EditButton type="main" item="aboutUsImg" text="이미지 삽입" mode="image" defaultImg="/aboutUs1.jpg"/>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="abt-cont">
                                <span className="subtitle">About Us</span><EditButton type="main" item="aboutUsTitle" text="제목" />   
                                <h2 style={{position:"relative"}}>{data.main.aboutUsTitle ?? "동우그룹은 공동주택관리의 선도주자로 동행합니다."}<EditButton type="main" item="aboutUsTitle" text="제목" /></h2> 
                                <p className={styles.border} />
                                <h3 className={styles.subtitle} style={{position:"relative"}}>{data.main.aboutUsSubtitle ?? "투명하고 차별화된 관리"}<EditButton type="main" item="aboutUsSubtitle" text="부제목" /></h3>
                                <p className={styles.text} style={{position:"relative"}}>
                                    {data.main.aboutUsContent ?? "동우 그룹은 고객의 만족을 위해 안전하고 합리적인 관리를 제공하며 부동산 자산가치 상승에 기여합니다."}
                                    <EditButton type="main" item="aboutUsContent" text="내용" />
                                </p>

                                <Link href="/info/business">
                                    {/* <a className="readmore-btn"> */}
                                    <div className="readmore-btn" style={{cursor:"pointer"}}>
                                        자세히 보기 <i className="flaticon-next"></i>
                                    </div>
                                    {/* </a> */}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutUs;
