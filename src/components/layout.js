import React from 'react'
import Navbar from '@/components/navbar/index'
import Footer from '@/components/footer/index'
import SideProfileCard from '@/components/sideprofilecard/index'
import SideFollowCard from '@/components/sidefollowcard/index'
function layout({ children }) {
  return (
    <>
      <Navbar />
      <main>
        <div className='hidden md:block ml-3 w-[300px] fixed'>
          <SideProfileCard />
          <SideFollowCard />
        </div>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default layout