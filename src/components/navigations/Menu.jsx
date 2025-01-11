import { Icon } from '@iconify/react/dist/iconify.js'
import { Row } from 'antd'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MenuData from '../../stores/data/static/menu.json'


const Menu = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const menu = MenuData;

    const handleItemClick = (index) => {
        setActiveIndex(index); // Cập nhật mục được chọn
    };
    return (
        <nav className='bg-[#ff6564]'>
            <Row className='container relative'>
                <ul className='flex'>
                    {menu && menu.data && menu.data.map((item, index) => (
                        <li
                            key={index}
                            className='group'
                            onClick={() => handleItemClick(index)}
                        >
                            <Link
                                to={item.path}
                                className={`block pl-0 px-6 py-2 uppercase font-medium hover:text-black 
                                    ${activeIndex === index ? "text-black font-bold" : "text-white"
                                    }`}
                            >
                                <span className="inline-flex uppercase text-[18px] items-center">
                                    {item.title}
                                    {item.subMenu && (
                                        <Icon
                                            icon="material-symbols:arrow-drop-down-rounded"
                                            width="20"
                                            height="20"
                                        />
                                    )}
                                </span>
                            </Link>
                            {
                                item.subMenu && (
                                    <div
                                        className="absolute hidden left-0 right-0 bg-white shadow-lg p-6 rounded-sm 
                                    group-hover:block h-auto w-full top-10 z-10"
                                    >
                                        <div className="mx-auto grid grid-cols-4 gap-4">
                                            {item.subMenu.map((sub, index1) => (
                                                <div key={index1} className="w-full">
                                                    <h2 className="text-[16px] font-medium text-[#ff9897] hover:text-black">
                                                        {sub.subTitle}
                                                    </h2>
                                                    <ul>
                                                        {sub.attribute.map((att, index2) => (
                                                            <li key={index2}>
                                                                <Link className="block text-[14px] font-normal my-[8px] hover:text-[#ff9897]">
                                                                    {att.titleAttribute}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )
                            }
                        </li>
                    ))}
                </ul>
            </Row>
        </nav >
    )
}

export default Menu
