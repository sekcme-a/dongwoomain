import React, { useEffect } from 'react';
import Navbar from "src/public/components/Navbar"
import Banner from "src/index/components/Banner"
import AboutUs from "src/index/components/AboutUs"
import JoinNow from "src/index/components/JoinNow"
import Service from "src/index/components/Service"
import ScrollCount from "src/index/components/ScrollCount"
import Subsidiary from "src/index/components/Subsidiary"
import Post from "src/index/components/Post"
import HeadMeta from 'src/public/HeadMeta';
import PopUp from "src/index/components/PopUp"

import useData from 'context/data';


const Index2 = () => {
    const {data, fetch_data} = useData()
    useEffect(()=>{
        if(!data.main.fetched) fetch_data("main")   

    },[])

    return (
        <>
            <HeadMeta
                title="동우그룹"
                description="공동주택관리 전문기업 동우그룹입니다, 안전하고 합리적인 관리를 제공하며 부동산 자산가치 상승에 기여합니다."
                url="https://xn--2i0bm5iryeh7q.kr"
            />

            <PopUp />
            <Navbar />
            <Banner />
            <AboutUs />
            <JoinNow />
            <Service />
            <Post />    
            {/* <ScrollCount /> */}
            <Subsidiary />
            
        </>
    );
};

export default Index2;
