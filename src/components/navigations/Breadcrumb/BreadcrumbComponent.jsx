import React from 'react'
import { Breadcrumb } from 'antd';
const BreadcrumbComponent = (props) => {
  const { items } = props;

  return (
    <Breadcrumb className='text-[12px] my-[8px]'
      items={items}
    />
  )
}

export default BreadcrumbComponent
