import React from 'react'
import SlideSwiper from '../components/swippers/SlideSwiper';
import { Button, Col, Row } from 'antd';
import SwiperResponsiveBreakpoints from '../components/swippers/SwiperResponsiveBreakpoints';
import ProductSwiperComponent from '../components/swippers/ProductSwiperComponent';
import { Link } from 'react-router-dom';
import NewAndPromotionSwiperComponent from '../components/swippers/NewAndPromotionSwiperComponent';
import SwiperThreeItemComponent from '../components/swippers/SwiperThreeItemComponent';

const Home = () => {
  return (
    <div>
      <SlideSwiper />
      <div className='bg-[#fff3f3] py-[30px]'>
        <Row className="container items-center">
          <Col span={6}>
            <h1 className='text-[24px] font-bold uppercase mb-[8px]'>Thương hiệu</h1>
            <span className='block text-[16px] text-[#ff6564]'>Nổi bật</span>
          </Col>
          <Col span={18}>
            <SwiperResponsiveBreakpoints/>
          </Col>
        </Row>
      </div>
      <div className='content'>
        <div className="container">
          <h1
            className="
              text-center uppercase font-bold text-[24px] mb-[20px] p-0 relative bg-white z-10
              before:content-[''] before:absolute before:w-full before:h-[1px] before:bg-pink-300 before:top-1/2 before:left-0
              "
          >
            <a
              href="#"
              className="
                z-10 relative inline-block px-[10px] py-[5px] bg-white text-black hover:text-[#ff9897]
                "
            >
              Sản phẩm bán chạy
            </a>
          </h1>
          <Row>
            <ProductSwiperComponent />
          </Row>
        </div>
      </div>

      <div className="content bg-[#fff3f3]">
        <Row className='container'>
          <Col span={6}>
            <div className='relative h-full w-full border-solid border-[5px] border-[#ff9897]'>
              <img
                className='w-full h-full object-cover'
                src="../../../public/images/banners/matita-labbra-1024x538.jpg"
                alt=""
              />
              <div className='flex flex-col absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] '>
                <h1 className=' w-[130px] uppercase font-bold text-[24px] p-0 inline-block mx-auto text-black text-center'
                >
                  <Link className='hover-ff9897'>Sản phẩm nổi bật</Link>
                </h1>
                <Button
                  className='bg-[#ff9897] border-none text-white text-[16px] leading-normal mt-3 hover:!text-[#ff9897]'
                >
                  Xem thêm
                </Button>
              </div>
            </div>
          </Col>
          <Col span={17} offset={1}>
            <SwiperThreeItemComponent />
          </Col>
        </Row>
      </div>

      <div className='content'>
        <div className="container">
          <h1
            className="
              text-center uppercase font-bold text-[24px] mb-[20px] p-0 relative bg-white z-10 
              before:content-[''] before:absolute before:w-full before:h-[1px] before:bg-pink-300 before:top-1/2 before:left-0
              "
          >
            <a
              href="#"
              className="
                z-10 relative inline-block px-[10px] py-[5px] bg-white text-black hover:text-[#ff9897]
                "
            >
              Sản phẩm mới
            </a>
          </h1>
          <Row>
            <ProductSwiperComponent />
          </Row>
        </div>
      </div>

      <div className="content bg-[#fff3f3]">
        <Row className='container'>
          <Col span={6}>
            <div className='relative h-full w-full border-solid border-[5px] border-[#ff9897]'>
              <img
                className='w-full h-full object-cover'
                src="../../../public/images/banners/matita-labbra-1024x538.jpg"
                alt=""
              />
              <div className='flex flex-col absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] '>
                <h1 className=' w-[130px] uppercase font-bold text-[24px] p-0 inline-block mx-auto text-black text-center'
                >
                  <Link className='hover-ff9897'>Sản phẩm hot</Link>
                </h1>
                <Button
                  className='bg-[#ff9897] border-none text-white text-[16px] leading-normal mt-3 hover:!text-[#ff9897]'
                >
                  Xem thêm
                </Button>
              </div>
            </div>
          </Col>
          <Col span={17} offset={1}>
            <SwiperThreeItemComponent />
          </Col>
        </Row>
      </div>

      <div className='content'>
        <div className="container">
          <h1
            className="uppercase font-bold text-[24px] mb-[20px] p-0 relative bg-white z-10\
                      before:content-[''] before:absolute before:w-full before:h-[1px] before:bg-pink-300 
                      before:top-1/2 before:left-0
                      "
          >
            <a
              href="#"
              className="
                z-10 relative inline-block px-[10px] py-[5px] bg-white text-black hover:text-[#ff9897]
                "
            >
              Tin tức & khuyến mãi
            </a>
          </h1>
          <Row>
            <NewAndPromotionSwiperComponent />
          </Row>
        </div>
      </div>
    </div >
  )
}

export default Home;
