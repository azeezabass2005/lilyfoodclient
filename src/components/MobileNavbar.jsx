import React from 'react'
import Logo from './Logo'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faHamburger, faClose, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

import { navLinks, socialLinks } from '../constants'

const MobileNavbar = () => {
    const [topNavShow, setTopNavShow] = useState(true)
    const [pagePosition, setPagePosition] = useState(window.scrollY)
    const [toggle, setToggle] = useState(false)
    const [showSearch, setShowSearch] =  useState(false)

    useEffect(() => {
      const handleScroll = () => {
        const currentPagePosition = window.scrollY
        if(pagePosition < 120){
            setTopNavShow(true)
        }
        else if(pagePosition > currentPagePosition) {
            setTopNavShow(true)
          } else {
            setTopNavShow(false)
        }
        setPagePosition(currentPagePosition)
      }

      window.addEventListener('scroll', handleScroll)
    
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }, [pagePosition])
    

  return (
    <div className='fixed h-[70px] z-[100] w-[100vw]'>
        <motion.div whileInView={{x:[100, 0]}} className={` h-[70px] bg-[#ffffff80] backdrop-blur-xl  w-[100vw] shadow-[var(--SECONDARY-COLOR)] shadow-sm p-3 flex items-center vs:justify-around justify-between ${topNavShow ? 'flex' : 'hidden'}`}>
            <Link path={'/'} className={`flex justify-center items-center`}>
                <Logo />
                <h1 className='vs:text-[30px] text-[28px] uppercase font-bold font-poppins ml-2 text-[var(--SECONDARY-COLOR)]'>
                    Lily food
                </h1>
            </Link>
            <div className='flex justify-center items-center'>
                <FontAwesomeIcon icon={faSearch} className='text-[var(--SECONDARY-COLOR)] h-[25px] w-[25px]' onClick={() => setShowSearch((prev) => (!prev))} />
            </div>
            <div className={` ${showSearch ? 'block' : 'hidden'} absolute bg-[#f4fef9] p-2 rounded-[10px] top-[70px] w-[92vw] m-[1vw]  vs:w-[96vw] vs:m-[2vw] shadow-[#494] shadow-md`}>
                <div className='text-right mr-2'>
                    <FontAwesomeIcon icon={faClose} className='text-[var(--SECONDARY-COLOR)] h-[20px] w-[20px]' onClick={() => setShowSearch((prev) => (!prev))} />
                </div>
                <div className={`bg-[#fff] border-[2px] border-solid border-[var(--SECONDARY-COLOR)] rounded-[10px] flex h-[45px] justify-between items-center`}>
                    <input type="search" name="productSearch" id="productSearch" placeholder='Search' className='p-2 rounded-[10px] outline-none text-[#002200] w-[83%]' />
                    <div className='bg-[var(--SECONDARY-COLOR)] rounded-r-[8px] h-[45px] w-[50px] flex justify-center items-center'>
                        <FontAwesomeIcon icon={faSearch} className=' text-[#fff] h-[20px] w-[20px]' />
                    </div>
                </div>
            </div>
            <div>
                <FontAwesomeIcon icon={toggle ? faClose : faHamburger} className='text-[var(--SECONDARY-COLOR)] h-[25px] w-[25px]'  onClick={() => setToggle((prev) => (!prev))} />
                <motion.div whileInView={{ x:[100, 0] }} className={` ${toggle ? 'flex' : 'hidden'} flex flex-col absolute top-[70px] w-[90vw] side-nav right-0 bg-[#12a95c] justify-around shadow-[#0f9f55] shadow-md`}>
                    <div className='flex justify-center'>
                        <a href='tel:+971524506575' onClick={() => setToggle((prev) => (!prev))} className='flex text-[var(--SECONDARY-COLOR)] bg-[#fff] w-[40%] p-2 m-2 rounded-[5px] justify-center items-center'>
                            <FontAwesomeIcon icon={faPhone} className={`h-[20px] w-[20px] vs:h-[24px] vs:w-[24px]`} />
                            <p className='font-bold vs:text-[20px] text-[17px] ml-2'>
                                Call Us
                            </p>
                        </a>
                        <a href='mailto:lilyfood@gmail.com' onClick={() => setToggle((prev) => (!prev))} className='flex text-[var(--SECONDARY-COLOR)] bg-[#fff] w-[40%] p-2 m-2 rounded-[5px] justify-center items-center'>
                            <FontAwesomeIcon icon={faEnvelope} className={`h-[20px] w-[20px] vs:h-[24px] vs:w-[24px]`} />
                            <p className='font-bold vs:text-[20px] text-[17px] ml-2'>
                                Mail Us
                            </p>
                        </a>
                    </div>
                    {navLinks.map((link, index) => (
                        <Link to={link.path} key={index} onClick={() => setToggle((prev) => (!prev))} className={`flex text-[#fff] items-center vs:p-3 p-1 pl-7 vs:pl-12 border-b-[2px] border-[#fff] border-solid`}>
                            <FontAwesomeIcon icon={link.icon} className={`vs:h-[24px] vs:w-[24px] h-[20px] w-[20px]`} />
                            <p className='uppercase font-semibold vs:text-[18px] text-[16px] ml-3 vs:ml-4'>{link.name}</p>
                        </Link>
                    ))}
                    <div className='flex justify-center vs:mt-3 vs:mb-3 mt-1 mb-1'>
                        {socialLinks.map((link, index) => (
                            <a key={link.name}  onClick={() => setToggle((prev) => (!prev))} href={link.link} target="_blank" rel="noopener noreferrer" className='ml-5'>
                                <img src={link.img} alt={link.name} className='vs:h-[30px] vs:w-[30px] h-[25px] w-[25px]' />
                            </a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </motion.div>

    </div>
  )
}

export default MobileNavbar

