import React from 'react'
import BreadcrumbComponent from '../../components/navigations/Breadcrumb/BreadcrumbComponent'

const Introduce = () => {
  const breadcrumbItems = [
    { title: 'Trang chủ', href: '/' },
    { title: 'Giới thiệu' }
  ];
  return (
    <div className='mb-4'>
      <div className='container'>
        <BreadcrumbComponent items={breadcrumbItems} />
      </div>
      <div className='container'>
        <h1
          className='text-[28px] font-bold text-black my-[20px] leading-normal uppercase'
        >
          Giới thiệu
        </h1>
        <p className='text-[16px] text-[#333] font-normal leading-normal my-[12px]'>
          Trang giới thiệu giúp khách hàng hiểu rõ hơn về cửa hàng của bạn.
          Hãy cung cấp thông tin cụ thể về việc kinh doanh, về cửa hàng, thông tin liên hệ.
          Điều này sẽ giúp khách hàng cảm thấy tin tưởng khi mua hàng trên website của bạn.
        </p>
        <ul className='w-full '>
          <h3
            className='text-[18px] font-bold text-black my-[8px] leading-normal uppercase'
          >
            Một vài gợi ý cho nội dung trang Giới thiệu:
          </h3>
          <li
            className='text-[16px] font-normal text-[#333] my-[8px] leading-normal list-disc ml-[20px]'
          >
            Bạn là ai
          </li>
          <li className='text-[16px] font-normal text-[#333] my-[8px] leading-normal list-disc ml-[20px]' >Giá trị kinh doanh của bạn là gì</li>
          <li className='text-[16px] font-normal text-[#333] my-[8px] leading-normal list-disc ml-[20px]' >Địa chỉ cửa hàng</li>
          <li className='text-[16px] font-normal text-[#333] my-[8px] leading-normal list-disc ml-[20px]'>Bạn đã kinh doanh trong ngành hàng này bao lâu rồi</li>
          <li className='text-[16px] font-normal text-[#333] my-[8px] leading-normal list-disc ml-[20px]' >Bạn kinh doanh ngành hàng online được bao lâu</li>
          <li className='text-[16px] font-normal text-[#333] my-[8px] leading-normal list-disc ml-[20px]' >Đội ngũ của bạn gồm những ai</li>
          <li className='text-[16px] font-normal text-[#333] my-[8px] leading-normal list-disc ml-[20px]' >Thông tin liên hệ</li>
          <li className='text-[16px] font-normal text-[#333] my-[8px] leading-normal list-disc ml-[20px]' >Liên kết đến các trang mạng xã hội (Twitter, Facebook)</li>
        </ul>
      </div>
    </div>
  )
}

export default Introduce