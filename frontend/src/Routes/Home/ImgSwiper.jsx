import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

function ImgSwiper() {
  return (
    <div className="swiper-container" style={{maxWidth:"1200px", margin:"0 auto", paddingTop:"150px"}}>
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        navigation
        style={{height:"300px"}}
      >
        <SwiperSlide><img src="./img/pc04.jpg" alt="Slide 1" /></SwiperSlide>
        <SwiperSlide><img src="./img/pc05.jpg"  alt="Slide 2" /></SwiperSlide>
        <SwiperSlide><img src="./img/pc06.jpg"  alt="Slide 3" /></SwiperSlide>
        
      </Swiper>
    </div>
  );
}

export default ImgSwiper;
