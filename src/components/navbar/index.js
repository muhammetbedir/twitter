import React from 'react'
import Image from 'next/image'
import Logo from '@/../public/twitter-logo.png'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Profiledropdown from './components/profiledropdown'
import { faHashtag, faEnvelope, faBell, faHouse } from '@fortawesome/free-solid-svg-icons'
import Hamburgermenu from './components/hamburgermenu'
function index() {
  return (
    <div className='flex w-full fixed top-0 left-0 justify-between items-center py-1 backdrop-blur-3xl mt-2'>
      <div className='flex justify-center items-center mx-5 gap-5'>
        <Link href="/" >
          <Image src={Logo} width={40} />
        </Link>
        <input type="search" placeholder='Search' className='bg-[#424F55] h-full p-1 w-60 text-white rounded-lg ' />
      </div>
      <div className='hidden md:flex'>
        <div className='flex h-full items-center justify-between gap-5 border-r-2 pr-5'>
          <Link href='/' className='bg-[#DBEAEE] p-2 rounded-full px-3 text-md hover:bg-[#c0d4da] hover:text-[#262525]'><FontAwesomeIcon icon={faHouse} className="text-[#359EAB] mr-2" />Anasayfa</Link>
          <Link href='/explore' ><FontAwesomeIcon icon={faHashtag} className="text-[#DBEAEE]" /></Link>
          <Link href='/message' ><FontAwesomeIcon icon={faEnvelope} className="text-[#DBEAEE]" /></Link>
          <Link href='/notification' ><FontAwesomeIcon icon={faBell} className="text-[#DBEAEE]" /></Link>
        </div>
        <div className='flex h-full justify-evenly items-center text-[#DBEAEE] mx-5 gap-5'>
          <Profiledropdown />
        </div>
      </div>
      <Hamburgermenu />

    </div>
  )
}

export default index