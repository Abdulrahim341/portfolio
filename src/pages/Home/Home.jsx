import React from 'react'
import homePic from "../../assets/avataaars.svg"
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

export default function Home() {
  return <>
  <Navbar/>
  <div className="content bg-[#1ABC9C] flex flex-col  justify-center items-center ">
    <img  className='w-[20%]' src={homePic} alt="" />
    <h1 className='text-white text-5xl font-bold mt-5 mb-3'>start Framework</h1>
    <div className="divider flex gap-4 justify-center items-center">
        <div className='w-24 h-1 bg-white'></div>
        <FontAwesomeIcon icon={faStar} className='text-white' />
        <div className='w-24 h-1 bg-white '></div>
    </div>
    <p className='text-white mt-2 pb-2'>Graphic Artist - Web Designer - Illustrator</p>
  </div>
  <Footer/>
  </>
}
