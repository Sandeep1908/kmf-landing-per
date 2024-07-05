'use client'
import React, { useEffect } from 'react'; // Make sure to import React
import './globals.css'
import { Header } from '../components/Header'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './page.module.css'
import logo from '@/images/logo/logo.png';
import Head from 'next/head';



import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import 'rodal/lib/rodal.css';
import { SpeedInsights } from '@vercel/speed-insights/next';


import { register } from 'swiper/element/bundle';
import { ParallaxProvider } from "react-scroll-parallax";
import { pdfjs } from 'react-pdf';

import 'react-photo-view/dist/react-photo-view.css';
import { MyContextProvider } from '@/context/headerContext';


pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();
register();

export default function RootLayout({ children }) {




  return (

    <>
      <html lang="en">
        <head>
          <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap" rel="stylesheet" />
          <link rel="icon" type="image/png" href={logo.src} />
        </head>
        <Head>
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-DP4FBEQWDL"></script>
            <script
              dangerouslySetInnerHTML={{
                __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-DP4FBEQWDL');
            `,
              }}
            />
          </Head>
        <body className='relative'>
          <MyContextProvider>
            <Header />
            <ParallaxProvider>
              {children}
              <SpeedInsights />
            </ParallaxProvider>
          </MyContextProvider>
          {''}



        </body>

      </html>

    </>
  );
}
