import 'src/public/styles/bootstrap.min.css';
import 'src/public/styles/fontawesome.min.css';
import 'src/public/styles/animate.min.css';
import 'src/public/styles/flaticon.css';
import 'src/public/styles/quill.css';
import "swiper/css";
import "swiper/css/bundle";
// Global Style
import 'src/public/styles/style.css';
import 'src/public/styles/responsive.css';

import { useRouter } from 'next/router';

import App from 'next/app';
import Head from 'next/head';
// import Loader from 'src/public/components/Loader';
import GoTop from 'src/public/components/GoTop';
import Footer from 'src/public/components/Footer';
import Script from 'next/script';
import PageNavbar from "src/public/components/PageNavbar"
import { useEffect } from 'react';
import EditControl from 'src/admin/EditControl';

import { UserDataProvider } from "context/userData";
import { DataProvider } from "context/data";

import AuthStateChanged from "src/public/hooks/AuthStateChanged";



// export default class MyApp extends App {


const MyApp = ({Component, pageProps}) => {
    const router = useRouter()
    // useEffect(() => {
    //     suppressHydrationWarning(false);
    // }, []); 
    // useEffect(())

    useEffect(()=>{},[])
    return(
            <>
                <Head>
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
                    <meta charSet="utf-8" />
                    <meta name="robots" content="index,follow"></meta>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                </Head>
                <UserDataProvider>
                    <DataProvider>
                        <AuthStateChanged>
                            {router.pathname!=="/" && router.pathname!=="/admin/login" && <PageNavbar />}
                            <Component {...pageProps} />
                            {router.pathname!=="/admin/login" && <Footer />}
                            {/* <Loader />  */}
                            <EditControl />
                        </AuthStateChanged>
                    </DataProvider>
                </UserDataProvider>
                {/* Preloader */}

                {/* Go Top Button */}
                <GoTop scrollStepInPx="50" delayInMs="16.66" />
                
            </>
    )
}

export default MyApp