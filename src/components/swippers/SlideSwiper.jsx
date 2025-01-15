import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import ImageSlide from '../../stores/data/static/slide.json'

const SlideSwiper = () => {
    const images = ImageSlide;
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
            {images?.data?.map((image) => (
                <SwiperSlide key={image.imageId}>
                    <img src={image?.imageUrl || ''} alt="" className="w-full" />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default SlideSwiper