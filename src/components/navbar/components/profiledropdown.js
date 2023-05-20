import React, { useState } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp } from '@fortawesome/free-solid-svg-icons'

function profiledropdown() {
  const [dropdown, setDropdown] = useState(false)
  return (
    <div className='relative bg-[#424F55] p-2 rounded-full px-3 text-md z-10'>
      <div onClick={() => setDropdown((prev) => !prev)} className="gap-2 cursor-pointer flex">Muhammet Bedir<FontAwesomeIcon icon={faCaretUp} rotation={dropdown ? 0 : 180} size={'lg'} /></div>
      {
        dropdown &&
        <div className='absolute flex flex-col w-full items-start right-0 rounded-md gap-2 py-4 mt-3 pl-3 z-0 bg-[#DBEAEE] text-black text-lg'>
          <Link href='/profile' >Profil</Link>
          <Link href='/settings' >Ayarlar</Link>
        </div>
      }
    </div>
  )
}

export default profiledropdown