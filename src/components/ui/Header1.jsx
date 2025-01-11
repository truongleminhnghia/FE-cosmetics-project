import { Row } from 'antd'
import React from 'react'
import Logo from '../../assets/images/logo/logo_v1.png';
import Avatar from '../../assets/images/images/avatar-default-man.png';
import { Input, Space } from 'antd';
import { Icon } from '@iconify/react/dist/iconify.js';
const { Search } = Input;
const Header1 = () => {
  return (
    <header className='bg-[#fff3f3] py-7'>
      <div className="container">
        <Row className='w-full justify-between items-center'>
          <div className="logo-header">
            <img src={Logo} alt="" className='h-[70px] w-[200px]' />
          </div>
          {/* <Search placeholder="input search text" onSearch={onSearch} enterButton /> */}

          <Search
            placeholder="Tìm kiếm sản phẩm"
            enterButton
            className="block w-[596px] "
          />

          <div className='inline-flex'>
            <img src={Avatar} alt="" className='h-[35px] w-[35px] mr-[25px]' />
            <div className='relative'>
              <Icon icon="emojione-monotone:shopping-cart" width="35" height="35" />
              <span className='absolute text-xs text-red-500 bg-white rounded-full px-2 py-1 top-[-8px] right-[-10px]'>1</span>
            </div>
          </div>
        </Row>
      </div>
    </header>
  )
}

export default Header1
