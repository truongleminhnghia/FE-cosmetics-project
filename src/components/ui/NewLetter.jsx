import { Col, Form, Row } from 'antd'
import React from 'react'
import { Button, Input, Space } from 'antd';
const NewLetter = () => {
    return (
        <div className='content bg-[#fff3f3]'>
            <Row className='container'>
                <Col span={10}>
                    <h1 className='text-[24px] font-bold leading-normal text-black uppercase w-full'>Đăng ký nhận tin khuyến mãi</h1>
                </Col>
                <Col span={10} offset={4}>
                    <Space.Compact
                        style={{
                            width: '100%',
                        }}
                    >
                        <Input
                            placeholder="Nhập email của bạn"
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
            </Row>
        </div>
    )
}

export default NewLetter
