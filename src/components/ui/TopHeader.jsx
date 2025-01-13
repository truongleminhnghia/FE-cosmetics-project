import React from 'react'
import { Icon } from '@iconify/react';
import { Col, Row } from 'antd';

const TopHeader = () => {
  return (
    <div className="bg-white py-2">
      <div className="container">
        <div className="flex justify-between items-center">
          {/* Left Section */}
          <div className="flex space-x-6">
            <a href="#" className="flex items-center text-[12px] text-gray-700 hover-ff9897">
              <span className="w-8 h-8 flex items-center justify-center rounded-full border border-[#ff9897] mr-2">
                <Icon icon="mdi-light:phone" width="14" height="14" />
              </span>
              <span>19006750</span>
            </a>
            <a href="#" className="flex items-center text-[12px] text-gray-700 hover-ff9897">
              <span className="w-8 h-8 flex items-center justify-center rounded-full border border-[#ff9897] mr-2">
                <Icon icon="mdi-light:email" width="14" height="14" />
              </span>
              <span>cosmetics@gmail.com</span>
            </a>
          </div>

          {/* Right Section */}
          <div className="flex space-x-4">
            <p className="text-[12px] text-gray-700 cursor-pointer hover:text-gray-900">Đăng Nhập</p>
            <p className="text-[12px] text-gray-700 cursor-pointer hover:text-gray-900">Đăng Ký</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader
