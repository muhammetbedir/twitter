import React from 'react'
import Navbar from '../components/navbar/index'
import Footer from '../components/page/footer/index'
function layout({ children }) {
  return (
    <>
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default layout