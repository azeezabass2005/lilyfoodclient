import React from 'react'
import MobileNavbar from './MobileNavbar'
import DesktopNavbar from './DesktopNavbar'
import TabletNavbar from './TabletNavbar'

const Navbar = () => {
  return (
    <div className='relative z-[100]'>
        <div className='flex ss:hidden'>
            <MobileNavbar />
        </div>
        <div className='hidden ss:flex md:hidden'>
            <TabletNavbar />
        </div>
        <div className='hidden md:flex'>
            <DesktopNavbar />
        </div>
    </div>
  )
}

export default Navbar