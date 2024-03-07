'use client'
import React, { useEffect } from 'react'; // Make sure to import React
import './globals.css'
import { Header } from '../components/Header'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './page.module.css'
import Footer from '../components/Footer'

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import 'rodal/lib/rodal.css';
 

import { ParallaxProvider } from "react-scroll-parallax";
import { useRouter } from 'next/navigation';



export default function RootLayout({ children }) {
  
 
   
  return (

    <>
      <html lang="en">
        <head>
          <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap" rel="stylesheet" />
        </head>
        <body className=''>
          <Header />
          <ParallaxProvider>

        
          {children}
          </ParallaxProvider>
          {''}
       
        </body>
        
      </html>
     
    </>
  );
}
