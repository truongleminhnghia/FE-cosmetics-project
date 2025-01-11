import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const SwiperResponsiveBreakpoints = () => {
    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={8}
            // pagination={{
            //     clickable: true,
            // }}
            breakpoints={{
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 5,
                    spaceBetween: 50,
                },
            }}
            // modules={[Pagination]}
            className="mySwiper"
        >
            <SwiperSlide>
                <img src="../../../public/images/brands/image.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="../../../public/images/brands/brand_6.webp" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="../../../public/images/brands/brand_5.webp" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="../../../public/images/brands/brand_4.webp" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="../../../public/images/brands/brand_3.webp" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="../../../public/images/brands/image.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="../../../public/images/brands/brand_6.webp" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="../../../public/images/brands/brand_5.webp" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="../../../public/images/brands/brand_4.webp" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="../../../public/images/brands/brand_3.webp" alt="" />
            </SwiperSlide>
        </Swiper>
    )
}

export default SwiperResponsiveBreakpoints
