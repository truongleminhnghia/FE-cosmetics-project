import { Col, Row } from 'antd'
import React from 'react'
import Logo from '../../assets/images/logo/logo_v1.png';
import Avatar from '../../assets/images/images/avatar-default-man.png';
// import { Input, Space } from 'antd';
import { Icon } from '@iconify/react/dist/iconify.js';
import { Link } from 'react-router-dom';
import { Button, Input, Space } from 'antd';
const { Search } = Input;
const Header1 = () => {
  return (
    <header className='bg-[#fff3f3] py-7'>
      <div className="container">
        <Row className='w-full  items-center'>
          <Col span='6' className="logo-header">
            <Link to={"/"}>
              <img src={Logo} alt="" className='h-[70px] w-[200px]' />
            </Link>
          </Col>
          {/* <Search placeholder="input search text" onSearch={onSearch} enterButton /> */}
          <Col span={'11'} >
            <Space.Compact className='w-full'
            >
              <Input
                placeholder="Tìm kiếm..."
                className='rounded-full border-[#ff9897] hover:border-[#ff9897] h-[45px] text-[14px] px-[20px] py-[8px]
                                        outline-none focus-within:outline-none focus:ring-0 focus:border-[#ff9897]' />
              <Button
                type="primary"
                className='bg-[#ff9897] shadow-none border-[#ff9897] rounded-full h-[45px] w-auto
                                                        hover:!text-[#ff9897] hover:!bg-white'
              >
                <Icon icon="material-symbols:search" width="24" height="24" />
              </Button>
            </Space.Compact>
          </Col>

          <Col span={5} offset={2} className='float-right'>
            <div className='inline-flex float-right'>
              <div className='relative group'>
                <img src={Avatar} alt="" className='h-[35px] w-[35px] mr-[25px]' />
                <div className='absolute hidden group-hover:block  w-[150px] bg-white right-0 rounded-sm top-[50px] z-10 shadow-md
                                after:border-top'>
                  <ul className='w-full'>
                    <li className='hover:bg-[#fff4f4] px-[18px] py-[8px]'>
                      <Link to={"/"} className='text-[14px]  hover:text-[#30b566]'>
                        Tài khoảng của tôi
                      </Link>
                    </li>
                    <li className='hover:bg-[#fff4f4] px-[18px] py-[8px]'>
                      <Link to={"/"} className='text-[14px]  hover:text-[#30b566]'>
                        Đơn mua
                      </Link>
                    </li>
                    <li className='hover:bg-[#fff4f4] px-[18px] py-[8px]'>
                      <Link to={"/"} className='text-[14px]  hover:text-[#30b566]'>
                        Đăng xuất
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='relative ml-[12px]'>
                <Icon icon="emojione-monotone:shopping-cart" width="35" height="35" />
                <span className='absolute text-[12px] text-red-500 bg-white rounded-full px-2 py-1 top-[-8px] right-[-10px]'>1</span>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </header>
  )
}

export default Header1
