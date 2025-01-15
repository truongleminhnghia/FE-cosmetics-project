import { Icon } from '@iconify/react';
import { Col, Row } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const Footer01 = () => {
  return (
    <div>
      <Row className="bg-[url('../images/bg/image.png')] object-cover bg-no-repeat
                     w-full ">
        <div className='content'>
          <Row className='container'>
            <Col span={8}>
              <div>
                <div className='mb-[12px]'>
                  <a href="/" >
                    <img src="../images/logo/logo_v2.png" alt="" className='max-w-full h-auto' />
                  </a>
                </div>
                <div>
                  <h3
                    className='text-white tracking-[0.01em] text-[16px] mb-[12px] leading-normal font-medium'
                  >
                    Shop mỹ phẩm Cool Beauty làm đẹp trở nên dễ dàng hơn
                  </h3>
                  <ul>
                    <li
                      className='text-white text-[14px] font-normal mb-[6px] leading-normal'
                    >
                      Địa chỉ: Khu CNC Thủ Đức, Quận 9, thanh phố Thủ Đức, thành phố Hồ Chí Minh
                    </li>
                    <li
                      className='text-white text-[14px] font-normal mb-[6px] leading-normal'
                    >
                      Hotline: 1900 6750
                    </li>
                    <li
                      className='text-white text-[14px] font-normal mb-[6px] leading-normal'
                    >
                      Email: coolteam@gmail.com
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col span={15} offset={1}>
              <Row>
                <Col span={8}>
                  <div>
                    <h3
                      className='text-white tracking-[0.01em] text-[16px] mb-[12px] leading-normal font-medium'
                    >
                      Hỗ Trợ khách hàng
                    </h3>
                    <ul>
                      <li className='text-white text-[14px] font-normal mb-[6px] leading-normal'>
                        <Link>Trang chủ</Link>
                      </li>
                      <li className='text-white text-[14px] font-normal mb-[6px] leading-normal'>
                        <Link>Giới thiệu</Link>
                      </li>
                      <li className='text-white text-[14px] font-normal mb-[6px] leading-normal'>
                        <Link>Sản phẩm</Link>
                      </li>
                      <li className='text-white text-[14px] font-normal mb-[6px] leading-normal'>
                        <Link>Khuyến mãi hot</Link>
                      </li>
                      <li className='text-white text-[14px] font-normal mb-[6px] leading-normal'>
                        <Link>Tin tức</Link>
                      </li>
                      <li className='text-white text-[14px] font-normal mb-[6px] leading-normal'>
                        <Link>Liên hệ</Link>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col span={8}>
                  <div>
                    <h3 className='text-white tracking-[0.01em] text-[16px] mb-[12px] leading-normal font-medium'>Chính sách</h3>
                    <ul>
                      <li className='text-white text-[14px] font-normal mb-[6px] leading-normal'>
                        <Link>Trang chủ</Link>
                      </li>
                      <li className='text-white text-[14px] font-normal mb-[6px] leading-normal'>
                        <Link>Giới thiệu</Link>
                      </li>
                      <li className='text-white text-[14px] font-normal mb-[6px] leading-normal'>
                        <Link>Sản phẩm</Link>
                      </li>
                      <li className='text-white text-[14px] font-normal mb-[6px] leading-normal'>
                        <Link>Khuyến mãi hot</Link>
                      </li>
                      <li className='text-white text-[14px] font-normal mb-[6px] leading-normal'>
                        <Link>Tin tức</Link>
                      </li>
                      <li className='text-white text-[14px] font-normal mb-[6px] leading-normal'>
                        <Link>Liên hệ</Link>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col span={8}>
                  <div>
                    <div>
                      <h3 className='text-white tracking-[0.01em] text-[16px] mb-[12px] leading-normal font-medium'>Kết nối với chúng tôi</h3>
                      <div className='flex gap-[10px] my-[12px]'>
                        <Icon className='text-white' icon="flowbite:facebook-solid" width="24" height="24" />
                        <Icon className='text-white' icon="icon-park-solid:youtobe" width="24" height="24" />
                        <Icon className='text-white' icon="ri:twitter-fill" width="24" height="24" />
                        <Icon className='text-white' icon="mingcute:google-fill" width="24" height="24" />
                        <Icon className='text-white' icon="basil:instagram-solid" width="24" height="24" />
                      </div>
                    </div>
                    <div>
                      <h3 className='text-white tracking-[0.01em] text-[16px] mb-[12px] leading-normal font-medium'>Phương thức thanh toán</h3>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Row>
      <Row className='bg-[#000]'>
        <Col span={24} className='py-3'>
          <p className='text-center container text-[#959595] text-[14px] font-normal'>© Bản quyền thuộc về 
            <span className='text-[#ff9897] font-medium'> Cool Team </span>
            | Cung cấp bởi
            <span className='text-white font-medium'> NghiaTLM</span>
          </p>
        </Col>
      </Row>
    </div>
  )
}

export default Footer01
