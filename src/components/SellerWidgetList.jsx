import React from 'react'
import GiftIcon from '../icons/GiftIcon'
import ChatIcon from '../icons/ChatIcon'

const SellerWidgetList = ({seller,rating,price}) => {
  return (
    <div className='container flex flex-col mx-8 p-2 border border-black/20 rounded-md gap-2'>
  
  <div className='text-sm text-blue-500 font-semibold p-1 bg-blue-100 rounded-sm'>{seller} <span className='mx-1 bg-green-500 rounded-md text-xs text-white px-4'>{rating}</span></div>
  <div className='flex items-center p-1 text-sm text-gray-500 '><span className='hover:text-orange-600 bg-gray-400 p-1 rounded-sm '><GiftIcon /></span><span className='mx-2'>Takip Et</span></div>
  <div className='flex items-center p-1 text-sm text-gray-500 '><span className='hover:text-orange-600 bg-gray-400 p-1 rounded-sm text-black'>< ChatIcon  /></span><span className='mx-2'>Satıcıya Soru Sor</span></div>
  <div className='text-orange-600 text-base p-1'>{price ?(<span className='flex font-bold'>{price}<p className='mx-1'>TL</p></span>):(<span className='text-red-500'>Tükendi</span>)}</div>
    </div>
  )
}

export default SellerWidgetList
