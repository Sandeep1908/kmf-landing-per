'use client'
import React from 'react'; // Make sure to import React
import './globals.css'
import { Header } from '../components/Header'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './page.module.css'
import Footer from '../components/Footer'

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import 'rodal/lib/rodal.css';
 

 




export default function RootLayout({ children }) {
  
 
   
  return (
    <>
      <html lang="en">
        <head>
          <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap" rel="stylesheet" />
        </head>
        <body className=''>
          <Header />
          {children}
          {''}
       
        </body>
        
      </html>
     
    </>
  );
}
