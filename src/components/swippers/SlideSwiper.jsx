import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import Slide from '../../assets/images/slide/image.png';

const SlideSwiper = () => {
    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            loop={true}
            // navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >
            <SwiperSlide>
                <img src={Slide} alt="" className='w-full' />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Slide} alt="" className='w-full' />
            </SwiperSlide>
        </Swiper>
    )
}

export default SlideSwiper