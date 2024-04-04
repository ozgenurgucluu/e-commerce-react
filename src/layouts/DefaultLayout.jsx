import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

const DefaultLayout = () => {
  return (
    <div className='container mx-auto  '>
      <Header/>
      <div className="w-[1239px] border border-t -my-1"></div>
      <Outlet/>
    </div>
  )
}

export default DefaultLayout
