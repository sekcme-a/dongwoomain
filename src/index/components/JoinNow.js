import React from 'react';
import Link from 'next/link';
import EditButton from 'src/admin/EditButton';
import useData from 'context/data';
import Image from 'next/image';

const JoinNow = () => {
    const {data} = useData()
    return (
        <>
            <section className="joinar ptb-100">
                <Image
                    src="/joinNow.jpg"
                    alt="사업문의 배경"
                    layout='fill'
                    objectFit='cover'
                    loading='lazy'
                    quality={50}
                    style={{zIndex:"-1"}}
                />
                <div className="container">
                    <div className="joincont" >
                        <h2 style={{ position: "relative", zIndex:"9999"}}>사업문의</h2>
                        <p style={{ fontWeight: "normal", fontSize: "17px", position: "relative", zIndex:"9999" }}>
                            {data.main.joinNow ?? "도움을 드릴 수 있는 내용을 자세히 알려주시면 더 나은 답변을 드릴 수 있습니다."}<EditButton type="main" item="joinNow" text="내용" />
                        </p>

                        <Link href="/service/contact">
                            <a className="dwg-single-btn">
                                문의하기 <i className="flaticon-right-chevron"></i>
                                <span></span>
                            </a>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default JoinNow;
