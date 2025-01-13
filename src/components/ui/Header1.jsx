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
          <Col span={'10'}>
            <Space.Compact className=' w-full'
            >
              <Input
                placeholder="Tìm kiếm..."
                className='rounded-full border-[#ff9897] hover:border-[#ff9897] 
                                        outline-none focus-within:outline-none focus:ring-0 focus:border-[#ff9897]' />
              <Button
                type="primary"
                className='bg-[#ff9897] shadow-none border-[#ff9897] rounded-full
                                                        hover:!text-[#ff9897] hover:!bg-white'
              >
                Đăng kí
              </Button>
            </Space.Compact>
          </Col>

          <Col span={6} offset={2} className='float-right'>
            <div className='inline-flex float-right'>
              <img src={Avatar} alt="" className='h-[35px] w-[35px] mr-[25px]' />
              <div className='relative'>
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
