import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars , faX, faHashtag, faEnvelope, faBell} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

function hamburgermenu() {
    const [isActive, setIsActive] = useState(true)
  return (
    <div className='flex md:hidden mx-5 flex-col relative' onClick={()=> setIsActive((prev)=>!prev)}>
        {
            isActive? 
           <FontAwesomeIcon icon={faBars} className="text-[#DBEAEE] cursor-pointer" size='xl' />
           :
           <FontAwesomeIcon icon={faX} className="text-[#DBEAEE] cursor-pointer" size='xl' />
        }
        {
            !isActive&&
            <div className='absolute mt-7 flex flex-col right-1 bg-white text-black px-6 py-4 rounded-md gap-1 '>
                <Link href='/profile' >Profil</Link>
                <Link href='/explore' >Keşfet</Link>
                <Link href='/message' >Mesajlar</Link>
                <Link href='/notification' >Bildirimler</Link>
                <Link href='/settings' >Ayarlar</Link>
            </div>
        }
    </div>
  )
}

export default hamburgermenu