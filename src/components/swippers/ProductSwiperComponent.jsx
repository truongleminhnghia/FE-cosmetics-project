import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Button } from 'antd';
import { Icon } from '@iconify/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import ListProduct from '../../stores/data/static/product.json';


const ProductSwiperComponent = () => {
    const products = ListProduct;
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
            {products?.data?.map((item, index) => (
                <SwiperSlide key={index}>
                    <div className="bg-white shadow-xl max-w-[250px] h-auto rounded-xl">
                        {item.images &&
                            item.images.map((image, imgIndex) =>
                                image.main ? (
                                    <img
                                        key={imgIndex}
                                        className="w-full h-[250px] object-cover"
                                        src={image.imageUrl}
                                        alt={item.porductName}
                                    />
                                ) : null
                            )}
                        <div className="p-[12px]">
                            <h2 className="text-[16px] text-black font-medium mt-3 mb-1 h-[45px] line-clamp-2">
                                {item.porductName}
                            </h2>
                            <p className="text-[16px] my-[12px]">
                                <strong className="text-[#ff9897] font-medium mr-[12px]">
                                    {item.promotionPrice}đ
                                </strong>
                                <strong className="text-[#888888] font-normal inline-block line-through">
                                    {item.price}đ
                                </strong>
                            </p>
                            <Button className="w-full">
                                <Icon icon="solar:cart-3-outline" width="20" height="20" />
                                Chọn mua
                            </Button>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default ProductSwiperComponent
