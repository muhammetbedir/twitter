import React from 'react'
import Images from 'next/image'
import Person from '@/../public/person.jpg'
import Link from 'next/link'

function index() {
  return (
    <div className='flex h-2/5 bg-[#0f1b21] rounded-2xl  items-center justify-between text-center flex-col pt-2'>
      <Images src={Person} className="w-16 h-16 rounded-full object-cover" />
      <div className='text-lg break-words w-11/12'>Muhammet Bedir</div>
      <div className='text-[#43606e] break-words w-11/12'>@bedir</div>
      <p className='text-[#b3b7ba] break-words w-11/12'>sadasdasdasdasdasdasdasdasdasdasdasdfsdfdsfsdfsd</p>
      <div className='flex justify-between items-center w-full border-y-2 p-4 border-gray-500'>
        <div className='border-r-2 w-6/12 border-gray-500'><p >66</p><Link href="/following" className='text-[#6c8693] text-lg'>Takip</Link></div>
        <div className='w-6/12'><p>90</p><Link href="/followers" className='text-[#6c8693] text-lg'>Takipçi</Link></div>
      </div>
      <Link href="/profile" className='my-3 py-1 w-full'>Profilim </Link>
    </div>
  )
}

export default index