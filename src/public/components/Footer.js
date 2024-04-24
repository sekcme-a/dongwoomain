import React from 'react';
import Link from 'next/link';
import { useEffect } from 'react';

import EditButton from 'src/admin/EditButton';
import useData from 'context/data';
import Image from 'next/image';

const Footer = () =>  {
    const {data, fetch_data} = useData()

    useEffect(()=>{
        if(!data.footer.fetched) fetch_data("footer")
    },[])
    return (
        <>
            <footer className="ft-ar">
                <div className="container">

                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-ftWid">
                                <div className="logo">
                                    <Link href="/">
                                        <a>
                                            <img src="/logo-white.png" alt="동우그룹 로고" width={120} height={50} objectFit='contain'/>
                                        </a>
                                    </Link>

                                    <p style={{fontWeight:"bold", position:"relative"}}>{data?.footer?.leftTitle ?? "회 장 이 육 행"}<EditButton type="footer" item="leftTitle" text="제목" /></p>
                                    <p style={{marginTop:"0", position:"relative"}}>{data?.footer?.LeftContent ?? "동우그룹은 고객 만족을 위해 함께 동행하여 안전하고 합리적인 관리를 제공하며 자산가치 상승에 기여합니다."}<EditButton type="footer" item="LeftContent" text="내용"/></p>
                                </div>

                                {/* <ul className="social">
                                    <li>
                                        <a href="https://www.facebook.com/" target="_blank">
                                            <i className="flaticon-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/" target="_blank">
                                            <i className="flaticon-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/" target="_blank">
                                            <i className="flaticon-linkedin"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/" target="_blank">
                                            <i className="flaticon-instagram"></i>
                                        </a>
                                    </li>
                                </ul> */}
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-ftWid">
                                <h3>페이지 이동</h3>

                                <ul className="ft-quickLink">
                                    <li>
                                        <Link href="/">
                                            <a>Home</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/info/great">
                                            <a>인사말</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/info/business">
                                            <a>경영방침</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/info/map">
                                            <a>오시는 길</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/management/housing">
                                            <a>공동주택관리</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/management/building">
                                            <a>빌딩종합관리</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/article/announcement">
                                            <a>공지사항</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/article/news">
                                            <a>동행뉴스</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/article/gallery">
                                            <a>동우사보</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/service/contact">
                                            <a>사업문의</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-ftWid">
                                <h3>문의하기</h3>

                                <ul className="ft-contInf" style={{position:"relative"}}>
                                    {/* <li><span>주소:</span> 서울특별시 도봉구 시루봉로 234, 동우빌딩 2층</li>
                                    <li><span>사업자등록번호:</span> 210-81-24699</li>
                                    <li><span>Email:</span> <a href="mailto:dongwoodh@hanmail.net">dongwoodh@hanmail.net</a></li>
                                    <li><span>Phone:</span> <a href="tel:029762200">{`02) 976-2200`}</a></li>
                                    <li><span>Fax:</span> <a href="tel:029031297">{`02) 903-1297`}</a></li> */}
                                    <li style={{whiteSpace:"pre-line", lineHeight:"2"}}>{data?.footer?.RightContent ??
                                    `주소: 서울특별시 도봉구 시루봉로 234, 동우빌딩 2층
                                    사업자등록번호: 210-81-24699
                                    Email: dongwoodh@hanmail.net
                                    Phone: 02) 976-2200
                                    Fax: 02) 903-1297`}
                                    </li>
                                    <EditButton type="footer" item="RightContent" text="내용" />
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="copy-zone">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-sm-6 col-md-6">
                                <p><i className="far fa-copyright"></i> 2024 동우그룹</p>
                            </div>

                            {/* <div className="col-lg-6 col-sm-6 col-md-6">
                                <ul>
                                    <li>
                                        <Link href="#">
                                            <a>Privacy Policy</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>Terms & Conditions</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div> */}
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;