import { useRouter } from "next/router";
import Head from "next/head";
import { useRef } from "react";
import { LocomotiveScrollProvider as RLSProvider } from "react-locomotive-scroll";

import Header from "../components/Header";
import Footer from "../components/Footer";

import "locomotive-scroll/dist/locomotive-scroll.css";
import "../styles/reset.scss";
import "../styles/global.scss";
import "../styles/utils.scss";

export default function MyApp({ Component, pageProps }) {
  const { asPath } = useRouter();
  const containerRef = useRef(null);
  return (
    <RLSProvider
      options={{
        smooth: true,
        lerp: 0.08,
        multiplier: 0.6,
      }}
      watch={[]}
      location={asPath}
      onLocationChange={(scroll) =>
        scroll.scrollTo(0, { duration: 0, disableLerp: false })
      }
      containerRef={containerRef}
    >
      <div
        className="container_wrapper"
        data-scroll-container
        ref={containerRef}
      >
        <Head>
          <title>Faraway autopeças</title>
        </Head>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </RLSProvider>
  );
}
