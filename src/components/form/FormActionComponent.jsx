import React, { useState } from 'react'
import { Button, Checkbox, Col, Form, Input, Row } from 'antd';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

const FormActionComponent = (prop) => {
    const isLogin = prop.isLogin;
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div className='h-[100vh] flex justify-center items-center'>
            <div className='block w-[500px] max-w-[600px] bg-white shadow-lg p-[24px] rounded-xl h-auto'>
                <h1
                    className='text-[28px] font-bold leading-normal text-[#ff9897] uppercase my-[20px]'
                >
                    {isLogin ? " Đăng nhập" : " Đăng ký"}
                </h1>
                <Form
                    labelCol={{ flex: '110px' }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    colon={false}
                    initialValues={{
                        remember: false,
                    }}
                >
                    {!isLogin && (
                        <Row>
                            <Col span={8}>
                                <Form.Item
                                    label="Họ"
                                    name="firstName"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your first name!',
                                        },
                                    ]}
                                    labelCol={{ span: 24 }}
                                    wrapperCol={{ span: 24 }}
                                    className="mb-[18px]"
                                >
                                    <Input className="h-[45px]" />
                                </Form.Item>
                            </Col>
                            <Col span={14} offset={2}>
                                <Form.Item
                                    label="Tên"
                                    name="lastName"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your email!',
                                        }
                                    ]}
                                    labelCol={{ span: 24 }}
                                    wrapperCol={{ span: 24 }}
                                    className='mb-[18px]'
                                >
                                    <Input
                                        className='h-[45px]'
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
                    )}
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your email!',
                            }
                        ]}
                        labelCol={{ span: 24 }}
                        wrapperCol={{ span: 24 }}
                        className='mb-[18px]'
                    >
                        <Input
                            className='h-[45px]'
                        />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your pasword!',
                            }
                        ]}
                        labelCol={{ span: 24 }}
                        wrapperCol={{ span: 24 }}
                        className='mb-[18px]'
                    >
                        <Input.Password
                            className='h-[45px]'
                        />
                    </Form.Item>

                    <Form.Item
                        name="remember"
                        valuePropName="checked"
                        label={null}
                        className='mb-0'
                    >
                        <Checkbox
                            className='float-right'
                        >
                            Ghi nhớ
                        </Checkbox>
                    </Form.Item>

                    <Form.Item
                        label={null}
                        className='mb-[18px]'
                    >
                        <Button
                            type="primary"
                            htmlType="submit"
                            className='w-full mt-[8px] uppercase font-medium text-[18px] px-[12px] py-[20px]
                         bg-[#ff9897] hover:!text-[#ff9897] hover:!bg-white border-[#ff9897]'
                        >
                            {isLogin ? "Đăng Nhập" : "Đăng ký"}
                        </Button>
                    </Form.Item>
                </Form>
                <p className='text-[12px] font-normal text-[#ccc] mb-[8px] hover:text-[#000]'>
                    <Link to={'/'}>Quên mật khẩu</Link>
                </p>
                <p
                    className="flex items-center justify-center relative 
                            before:content-[''] before:absolute before:w-[50%] before:border-t before:border-dashed before:border-[#ccc]"
                >
                    <span
                        className="z-10 relative block px-[10px] py-[5px] bg-white text-[#ccc] text-[12px]"
                    >
                        Hoặc
                    </span>
                </p>
                <Row className='mt-[12px]'>
                    <Col
                        span={10}
                        className='flex gap-[10px] items-center justify-center bg-white rounded-sm shadow-md px[12px] py-[8px] cursor-pointer hover:opacity-[0.7]'
                    >
                        <Icon icon="flat-color-icons:google" width="24" height="24" />
                        <span className='text-[14px] font-normal leading-normal text-black'>Google</span>
                    </Col>
                    <Col
                        span={10}
                        offset={4}
                        className='flex gap-[10px] items-center justify-center bg-white rounded-sm shadow-md px[12px] py-[8px] cursor-pointer hover:opacity-[0.7]'
                    >
                        <Icon icon="logos:facebook" width="24" height="24" />
                        <span className='text-[14px] font-normal leading-normal text-black'>Facebook</span>
                    </Col>
                </Row>
                <span
                    className='text-[14px] text-[#333] font-normal leading-normal my-[14px] block text-center'
                >
                    {isLogin ? "Nếu bản chưa có tài khoảng?" : "Bạn đã có tài khoảng?"}
                    <strong
                        className='text-[14px] text-blue-700 font-semibold hover:opacity-[0.8] hover:underline'
                    >
                        <Link to={isLogin ? "/register" : "/login"}>
                            {isLogin ? " Đăng ký" : " Đăng nhập"}
                        </Link>
                    </strong>
                </span>
            </div>
        </div>
    )
}

export default FormActionComponent
