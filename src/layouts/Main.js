import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

function Main() {
  return (
    <div className='flex flex-col bg-sky-50 min-h-screen'>
      <Navbar />
      <section className="container mx-auto px-12 py-4 flex flex-col gap-8 justify-center items-center flex-grow">
        <Outlet />
      </section>
    </div>
  )
}

export default Main
