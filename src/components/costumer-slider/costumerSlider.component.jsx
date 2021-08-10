import React from 'react';
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles

import './costumerSlider.style.css'
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

// import Swiper core and required modules
import SwiperCore, {
    Autoplay,Pagination,Navigation
  } from 'swiper/core';
  
  // install Swiper modules
  SwiperCore.use([Autoplay,Pagination,Navigation]);




// import 'swiper/swiper.css';




const swiperMContainer = ()=>(
    <div className="swiperMContainer">

    <Swiper
     spaceBetween={30}
     slidesPerView={5}
     loop={true}
    //  centeredSlides={true}
     autoplay={{
    "delay": 2500,
    "disableOnInteraction": false
    }}
     pagination={{
    "clickable": true
    }} 
    navigation={true}
     className="mySwiper">
    <SwiperSlide><img src="./logos/lcw-logo.png" alt="LCW" /></SwiperSlide>
    <SwiperSlide>Slide 2</SwiperSlide>
    <SwiperSlide>Slide 3</SwiperSlide>
    <SwiperSlide>Slide 4</SwiperSlide>
    <SwiperSlide>Slide 5</SwiperSlide>
    <SwiperSlide>Slide 6</SwiperSlide>
    <SwiperSlide>Slide 7</SwiperSlide>
    <SwiperSlide>Slide 8</SwiperSlide>
    <SwiperSlide>Slide 9</SwiperSlide>
    </Swiper>



    </div>
)


export default swiperMContainer;
