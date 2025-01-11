import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Button, Divider } from 'antd';
import { Icon } from '@iconify/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const NewAndPromotionSwiperComponent = () => {
    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={8}
            // autoplay={{
            //     delay: 2500,
            //     disableOnInteraction: false,
            // }}
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
                    slidesPerView: 2,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="w-full min-h-[430px]"
        >
            <SwiperSlide>
                <div
                    className='bg-white border-solid border-[2px] max-w[250px] h-auto rounded-xl'
                >
                    <div className='relative'>
                        <img
                            className='w-full h-[250px] object-cover'
                            src="../images/news/marks-and-spencer-gift-sets.webp"
                            alt=""
                        />
                        <div className='absolute top-[5px] left-[5px] text-white text-[12px] font-medium bg-[#ff9897] rounded-full h-[60px] w-[60px] flex flex-col justify-center items-center'>
                            <span className='block'>23</span>
                            <span className='block'>Tháng 10</span>
                        </div>
                    </div>
                    <div className='p-[12px]'>
                        <h2
                            className='text-[16px] text-black leading-normal font-medium mt-3 mb-1 h-[50px] line-clamp-2'
                        >Dầu dưỡng da Phytoceuticals Argan Dầu dưỡng da Phytoceuticals Argan Dầu dưỡng da Phytoceuticals Argan</h2>
                        <p className='flex gap-5 items-center'>
                            <Icon icon="lets-icons:user-fill" width="30" height="30" className='text-[#ff9897]' />
                            <span className='text-[#000] font-medium leading-normal text-[16px]'>Đăng bởi: Cool team</span>
                        </p>
                        <Divider className='!my-[12px] border-solid border-[1px]' />
                        <p className='line-clamp-3 text-[14px] font-normal leading-normal text-[#4a4a4a]'>
                            Da chúng ta dễ bị thâm nám là do tiếp xúc với ánh nắng mặt trời thường xuyên, chế độ ăn uống nghỉ ngơi
                            Da chúng ta dễ bị thâm nám là do tiếp xúc với ánh nắng mặt trời thường xuyên, chế độ ăn uống nghỉ ngơi
                        </p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div
                    className='bg-white border-solid border-[2px] max-w[250px] h-auto rounded-xl'
                >
                    <div className='relative'>
                        <img
                            className='w-full h-[250px] object-cover'
                            src="../images/news/marks-and-spencer-gift-sets.webp"
                            alt=""
                        />
                        <div className='absolute top-[5px] left-[5px] text-white text-[12px] font-medium bg-[#ff9897] rounded-full h-[60px] w-[60px] flex flex-col justify-center items-center'>
                            <span className='block'>23</span>
                            <span className='block'>Tháng 10</span>
                        </div>
                    </div>
                    <div className='p-[12px]'>
                        <h2
                            className='text-[16px] text-black leading-normal font-medium mt-3 mb-1 h-[50px] line-clamp-2'
                        >Dầu dưỡng da Phytoceuticals Argan Dầu dưỡng da Phytoceuticals Argan Dầu dưỡng da Phytoceuticals Argan</h2>
                        <p className='flex gap-5 items-center'>
                            <Icon icon="lets-icons:user-fill" width="30" height="30" className='text-[#ff9897]' />
                            <span className='text-[#000] font-medium leading-normal text-[16px]'>Đăng bởi: Cool team</span>
                        </p>
                        <Divider className='!my-[12px] border-solid border-[1px]' />
                        <p className='line-clamp-3 text-[14px] font-normal leading-normal text-[#4a4a4a]'>
                            Da chúng ta dễ bị thâm nám là do tiếp xúc với ánh nắng mặt trời thường xuyên, chế độ ăn uống nghỉ ngơi
                            Da chúng ta dễ bị thâm nám là do tiếp xúc với ánh nắng mặt trời thường xuyên, chế độ ăn uống nghỉ ngơi
                        </p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div
                    className='bg-white border-solid border-[2px] max-w[250px] h-auto rounded-xl'
                >
                    <div className='relative'>
                        <img
                            className='w-full h-[250px] object-cover'
                            src="../images/news/marks-and-spencer-gift-sets.webp"
                            alt=""
                        />
                        <div className='absolute top-[5px] left-[5px] text-white text-[12px] font-medium bg-[#ff9897] rounded-full h-[60px] w-[60px] flex flex-col justify-center items-center'>
                            <span className='block'>23</span>
                            <span className='block'>Tháng 10</span>
                        </div>
                    </div>
                    <div className='p-[12px]'>
                        <h2
                            className='text-[16px] text-black leading-normal font-medium mt-3 mb-1 h-[50px] line-clamp-2'
                        >Dầu dưỡng da Phytoceuticals Argan Dầu dưỡng da Phytoceuticals Argan Dầu dưỡng da Phytoceuticals Argan</h2>
                        <p className='flex gap-5 items-center'>
                            <Icon icon="lets-icons:user-fill" width="30" height="30" className='text-[#ff9897]' />
                            <span className='text-[#000] font-medium leading-normal text-[16px]'>Đăng bởi: Cool team</span>
                        </p>
                        <Divider className='!my-[12px] border-solid border-[1px]' />
                        <p className='line-clamp-3 text-[14px] font-normal leading-normal text-[#4a4a4a]'>
                            Da chúng ta dễ bị thâm nám là do tiếp xúc với ánh nắng mặt trời thường xuyên, chế độ ăn uống nghỉ ngơi
                            Da chúng ta dễ bị thâm nám là do tiếp xúc với ánh nắng mặt trời thường xuyên, chế độ ăn uống nghỉ ngơi
                        </p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div
                    className='bg-white border-solid border-[2px] max-w[250px] h-auto rounded-xl'
                >
                    <div className='relative'>
                        <img
                            className='w-full h-[250px] object-cover'
                            src="../images/news/marks-and-spencer-gift-sets.webp"
                            alt=""
                        />
                        <div className='absolute top-[5px] left-[5px] text-white text-[12px] font-medium bg-[#ff9897] rounded-full h-[60px] w-[60px] flex flex-col justify-center items-center'>
                            <span className='block'>23</span>
                            <span className='block'>Tháng 10</span>
                        </div>
                    </div>
                    <div className='p-[12px]'>
                        <h2
                            className='text-[16px] text-black leading-normal font-medium mt-3 mb-1 h-[50px] line-clamp-2'
                        >Dầu dưỡng da Phytoceuticals Argan Dầu dưỡng da Phytoceuticals Argan Dầu dưỡng da Phytoceuticals Argan</h2>
                        <p className='flex gap-5 items-center'>
                            <Icon icon="lets-icons:user-fill" width="30" height="30" className='text-[#ff9897]' />
                            <span className='text-[#000] font-medium leading-normal text-[16px]'>Đăng bởi: Cool team</span>
                        </p>
                        <Divider className='!my-[12px] border-solid border-[1px]' />
                        <p className='line-clamp-3 text-[14px] font-normal leading-normal text-[#4a4a4a]'>
                            Da chúng ta dễ bị thâm nám là do tiếp xúc với ánh nắng mặt trời thường xuyên, chế độ ăn uống nghỉ ngơi
                            Da chúng ta dễ bị thâm nám là do tiếp xúc với ánh nắng mặt trời thường xuyên, chế độ ăn uống nghỉ ngơi
                        </p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div
                    className='bg-white border-solid border-[2px] max-w[250px] h-auto rounded-xl'
                >
                    <div className='relative'>
                        <img
                            className='w-full h-[250px] object-cover'
                            src="../images/news/marks-and-spencer-gift-sets.webp"
                            alt=""
                        />
                        <div className='absolute top-[5px] left-[5px] text-white text-[12px] font-medium bg-[#ff9897] rounded-full h-[60px] w-[60px] flex flex-col justify-center items-center'>
                            <span className='block'>23</span>
                            <span className='block'>Tháng 10</span>
                        </div>
                    </div>
                    <div className='p-[12px]'>
                        <h2
                            className='text-[16px] text-black leading-normal font-medium mt-3 mb-1 h-[50px] line-clamp-2'
                        >Dầu dưỡng da Phytoceuticals Argan Dầu dưỡng da Phytoceuticals Argan Dầu dưỡng da Phytoceuticals Argan</h2>
                        <p className='flex gap-5 items-center'>
                            <Icon icon="lets-icons:user-fill" width="30" height="30" className='text-[#ff9897]' />
                            <span className='text-[#000] font-medium leading-normal text-[16px]'>Đăng bởi: Cool team</span>
                        </p>
                        <Divider className='!my-[12px] border-solid border-[1px]' />
                        <p className='line-clamp-3 text-[14px] font-normal leading-normal text-[#4a4a4a]'>
                            Da chúng ta dễ bị thâm nám là do tiếp xúc với ánh nắng mặt trời thường xuyên, chế độ ăn uống nghỉ ngơi
                            Da chúng ta dễ bị thâm nám là do tiếp xúc với ánh nắng mặt trời thường xuyên, chế độ ăn uống nghỉ ngơi
                        </p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div
                    className='bg-white border-solid border-[2px] max-w[250px] h-auto rounded-xl'
                >
                    <div className='relative'>
                        <img
                            className='w-full h-[250px] object-cover'
                            src="../images/news/marks-and-spencer-gift-sets.webp"
                            alt=""
                        />
                        <div className='absolute top-[5px] left-[5px] text-white text-[12px] font-medium bg-[#ff9897] rounded-full h-[60px] w-[60px] flex flex-col justify-center items-center'>
                            <span className='block'>23</span>
                            <span className='block'>Tháng 10</span>
                        </div>
                    </div>
                    <div className='p-[12px]'>
                        <h2
                            className='text-[16px] text-black leading-normal font-medium mt-3 mb-1 h-[50px] line-clamp-2'
                        >Dầu dưỡng da Phytoceuticals Argan Dầu dưỡng da Phytoceuticals Argan Dầu dưỡng da Phytoceuticals Argan</h2>
                        <p className='flex gap-5 items-center'>
                            <Icon icon="lets-icons:user-fill" width="30" height="30" className='text-[#ff9897]' />
                            <span className='text-[#000] font-medium leading-normal text-[16px]'>Đăng bởi: Cool team</span>
                        </p>
                        <Divider className='!my-[12px] border-solid border-[1px]' />
                        <p className='line-clamp-3 text-[14px] font-normal leading-normal text-[#4a4a4a]'>
                            Da chúng ta dễ bị thâm nám là do tiếp xúc với ánh nắng mặt trời thường xuyên, chế độ ăn uống nghỉ ngơi
                            Da chúng ta dễ bị thâm nám là do tiếp xúc với ánh nắng mặt trời thường xuyên, chế độ ăn uống nghỉ ngơi
                        </p>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    )
}

export default NewAndPromotionSwiperComponent
