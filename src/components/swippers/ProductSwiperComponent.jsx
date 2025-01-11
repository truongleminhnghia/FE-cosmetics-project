import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Button } from 'antd';
import { Icon } from '@iconify/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const ProductSwiperComponent = () => {
    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={8}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            loop={true}
            // pagination={{
            //     clickable: true,
            // }}
            breakpoints={{
                640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="w-full min-h-[430px]"
        >
            <SwiperSlide>
                <div
                    className='bg-white shadow-xl max-w[250px] h-auto rounded-xl'
                >
                    <img
                        className='w-full h-[250px] object-cover'
                        src="../../../public/images/products/image.png"
                        alt=""
                    />
                    <div className='p-[12px]'>
                        <h2
                            className='text-[16px] text-black font-medium mt-3 mb-1 h-[45px] line-clamp-2'
                        >Dầu dưỡng da Phytoceuticals Argan Dầu dưỡng da Phytoceuticals Argan Dầu dưỡng da Phytoceuticals Argan Dầu dưỡng da Phytoceuticals Argan Dầu dưỡng da Phytoceuticals Argan</h2>
                        <p className='text-[16px] my-[12px]'>
                            <strong className='text-[#ff9897] font-medium mr-[12px]'>169.000đ</strong>
                            <strong className='text-[#888888] font-normal inline-block line-through'>196.000đ</strong>
                        </p>
                        <Button className='w-full'>
                            <Icon icon="solar:cart-3-outline" width="20" height="20" />
                            Chọn mua
                        </Button>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div
                    className='bg-white shadow-xl max-w[250px] h-auto rounded-xl'
                >
                    <img
                        className='w-full h-[250px] object-cover'
                        src="../../../public/images/products/image.png"
                        alt=""
                    />
                    <div className='p-[12px]'>
                        <h2
                            className='text-[16px] text-black font-medium mt-3 mb-1 h-[45px] line-clamp-2'
                        >Dầu dưỡng da Phytoceuticals Argan
                        </h2>
                        <p className='text-[16px] my-[12px]'>
                            <strong className='text-[#ff9897] font-medium mr-[12px]'>169.000đ</strong>
                            <strong className='text-[#888888] font-normal inline-block line-through'>196.000đ</strong>
                        </p>
                        <Button className='w-full'>
                            <Icon icon="solar:cart-3-outline" width="20" height="20" />
                            Chọn mua
                        </Button>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div
                    className='bg-white shadow-xl max-w[250px] h-auto rounded-xl'
                >
                    <img
                        className='w-full h-[250px] object-cover'
                        src="../../../public/images/products/image.png"
                        alt=""
                    />
                    <div className='p-[12px]'>
                        <h2
                            className='text-[16px] text-black font-medium mt-3 mb-1 h-[45px] line-clamp-2'
                        >Dầu dưỡng da Phytoceuticals Argan
                        </h2>
                        <p className='text-[16px] my-[12px]'>
                            <strong className='text-[#ff9897] font-medium mr-[12px]'>169.000đ</strong>
                            <strong className='text-[#888888] font-normal inline-block line-through'>196.000đ</strong>
                        </p>
                        <Button className='w-full'>
                            <Icon icon="solar:cart-3-outline" width="20" height="20" />
                            Chọn mua
                        </Button>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div
                    className='bg-white shadow-xl max-w[250px] h-auto rounded-xl'
                >
                    <img
                        className='w-full h-[250px] object-cover'
                        src="../../../public/images/products/image.png"
                        alt=""
                    />
                    <div className='p-[12px]'>
                        <h2
                            className='text-[16px] text-black font-medium mt-3 mb-1 h-[45px] line-clamp-2'
                        >Dầu dưỡng da Phytoceuticals Argan
                        </h2>
                        <p className='text-[16px] my-[12px]'>
                            <strong className='text-[#ff9897] font-medium mr-[12px]'>169.000đ</strong>
                            <strong className='text-[#888888] font-normal inline-block line-through'>196.000đ</strong>
                        </p>
                        <Button className='w-full'>
                            <Icon icon="solar:cart-3-outline" width="20" height="20" />
                            Chọn mua
                        </Button>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div
                    className='bg-white shadow-xl max-w[250px] h-auto rounded-xl'
                >
                    <img
                        className='w-full h-[250px] object-cover'
                        src="../../../public/images/products/image.png"
                        alt=""
                    />
                    <div className='p-[12px]'>
                        <h2
                            className='text-[16px] text-black font-medium mt-3 mb-1 h-[45px] line-clamp-2'
                        >Dầu dưỡng da Phytoceuticals Argan
                        </h2>
                        <p className='text-[16px] my-[12px]'>
                            <strong className='text-[#ff9897] font-medium mr-[12px]'>169.000đ</strong>
                            <strong className='text-[#888888] font-normal inline-block line-through'>196.000đ</strong>
                        </p>
                        <Button className='w-full'>
                            <Icon icon="solar:cart-3-outline" width="20" height="20" />
                            Chọn mua
                        </Button>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div
                    className='bg-white shadow-xl max-w[250px] h-auto rounded-xl'
                >
                    <img
                        className='w-full h-[250px] object-cover'
                        src="../../../public/images/products/image.png"
                        alt=""
                    />
                    <div className='p-[12px]'>
                        <h2
                            className='text-[16px] text-black font-medium mt-3 mb-1 h-[45px] line-clamp-2'
                        >Dầu dưỡng da Phytoceuticals Argan
                        </h2>
                        <p className='text-[16px] my-[12px]'>
                            <strong className='text-[#ff9897] font-medium mr-[12px]'>169.000đ</strong>
                            <strong className='text-[#888888] font-normal inline-block line-through'>196.000đ</strong>
                        </p>
                        <Button className='w-full'>
                            <Icon icon="solar:cart-3-outline" width="20" height="20" />
                            Chọn mua
                        </Button>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div
                    className='bg-white shadow-xl max-w[250px] h-auto rounded-xl'
                >
                    <img
                        className='w-full h-[250px] object-cover'
                        src="../../../public/images/products/image.png"
                        alt=""
                    />
                    <div className='p-[12px]'>
                        <h2
                            className='text-[16px] text-black font-medium mt-3 mb-1 h-[45px] line-clamp-2'
                        >Dầu dưỡng da Phytoceuticals Argan
                        </h2>
                        <p className='text-[16px] my-[12px]'>
                            <strong className='text-[#ff9897] font-medium mr-[12px]'>169.000đ</strong>
                            <strong className='text-[#888888] font-normal inline-block line-through'>196.000đ</strong>
                        </p>
                        <Button className='w-full'>
                            <Icon icon="solar:cart-3-outline" width="20" height="20" />
                            Chọn mua
                        </Button>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div
                    className='bg-white shadow-xl max-w[250px] h-auto rounded-xl'
                >
                    <img
                        className='w-full h-[250px] object-cover'
                        src="../../../public/images/products/image.png"
                        alt=""
                    />
                    <div className='p-[12px]'>
                        <h2
                            className='text-[16px] text-black font-medium mt-3 mb-1 h-[45px] line-clamp-2'
                        >Dầu dưỡng da Phytoceuticals Argan
                        </h2>
                        <p className='text-[16px] my-[12px]'>
                            <strong className='text-[#ff9897] font-medium mr-[12px]'>169.000đ</strong>
                            <strong className='text-[#888888] font-normal inline-block line-through'>196.000đ</strong>
                        </p>
                        <Button className='w-full'>
                            <Icon icon="solar:cart-3-outline" width="20" height="20" />
                            Chọn mua
                        </Button>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    )
}

export default ProductSwiperComponent
