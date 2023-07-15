import React from 'react'
import Logo from './Logo'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faHamburger, faClose, faPhone, faEnvelope, faShoppingCart, faHeart, faUser } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { motion } from 'framer-motion'

import { navLinks, socialLinks } from '../constants'

const TabletNavbar = () => {

  const [toggle, setToggle] = useState(false)

  return (
    <div className='fixed h-[100px] z-[100]'>
        <motion.div whileInView={{x:[100, 0]}} className={` h-[80px] bg-[#ffffff90] backdrop-blur-xl  w-[100vw] shadow-[var(--SECONDARY-COLOR)] shadow-md p-3 flex items-center vs:justify-around justify-between`}>
            <Link to={'/'} className={`flex justify-center items-center`}>
                <Logo />
                <h1 className='vs:text-[30px] text-[28px] uppercase font-bold font-poppins ml-2 text-[var(--SECONDARY-COLOR)]'>
                    Lily food
                </h1>
            </Link>
            <div className='flex justify-center items-center'>
                <FontAwesomeIcon icon={faSearch} className='text-[var(--SECONDARY-COLOR)] h-[27px] sm:h-[30px] sm:w-[30px] w-[27px]' />
            </div>
            <Link to={'/cart'} className='flex justify-center items-center'>
                <FontAwesomeIcon icon={faShoppingCart} className='text-[var(--SECONDARY-COLOR)] h-[27px] sm:h-[30px] sm:w-[30px] w-[27px]' />
                <div className='h-[18px] w-[18px] rounded-full bg-[#9e0707] flex justify-center items-center text-[10px] font-semibold text-[#fff] border-solid border-[1px] border-[#fff] ml-[-9px] mt-[-16px]'>
                  1
                </div>
            </Link>
            <Link to={'/favorite'} className='flex justify-center items-center'>
                <FontAwesomeIcon icon={faHeart} className='text-[var(--SECONDARY-COLOR)] h-[27px] sm:h-[30px] sm:w-[30px] w-[27px]' />
            </Link>
            <div className='flex justify-center items-center'>
                <FontAwesomeIcon icon={faUser} className='text-[var(--SECONDARY-COLOR)] h-[27px] sm:h-[30px] sm:w-[30px] w-[27px]' />
            </div>
            <div>
                <FontAwesomeIcon icon={toggle ? faClose : faHamburger} className='text-[var(--SECONDARY-COLOR)] h-[27px] w-[27px]'  onClick={() => setToggle((prev) => (!prev))} />
                <motion.div whileInView={{ x:[120, 0] }} className={` ${toggle ? 'flex' : 'hidden'} flex flex-col absolute top-[80px] w-[90vw] side-nav-tab right-0 bg-[#15bb66] justify-around`}>
                    <div className='flex justify-center'>
                        <a href='tel:+971524506575' onClick={() => setToggle((prev) => (!prev))} className='flex text-[var(--SECONDARY-COLOR)] bg-[#fff] w-[40%] p-2 m-2 rounded-[5px] justify-center items-center'>
                            <FontAwesomeIcon icon={faPhone} className={`h-[24px] w-[24px] vs:h-[28px] vs:w-[28px]`} />
                            <p className='font-bold vs:text-[22px] text-[19px] ml-2'>
                                Call Us
                            </p>
                        </a>
                        <a href='mailto:lilyfood@gmail.com' onClick={() => setToggle((prev) => (!prev))} className='flex text-[var(--SECONDARY-COLOR)] bg-[#fff] w-[40%] p-2 m-2 rounded-[5px] justify-center items-center'>
                            <FontAwesomeIcon icon={faEnvelope} className={`h-[24px] w-[24px] vs:h-[28px] vs:w-[28px]`} />
                            <p className='font-bold vs:text-[22px] text-[19px] ml-2'>
                                Mail Us
                            </p>
                        </a>
                    </div>
                    {navLinks.map((link, index) => (
                        <Link to={link.path} key={index} onClick={() => setToggle((prev) => (!prev))} className={`flex text-[#fff] items-center vs:p-4 p-3 vs:pl-12 border-b-[2px] border-[#fff] border-solid`}>
                            <FontAwesomeIcon icon={link.icon} className={`h-[35px] w-[35px] pl-8`} />
                            <p className='uppercase font-semibold text-[30px] ml-9'>{link.name}</p>
                        </Link>
                    ))}
                    <div className='flex justify-center mt-3 mb-3'>
                        {socialLinks.map((link, index) => (
                            <a key={link.name}  onClick={() => setToggle((prev) => (!prev))} href={link.link} target="_blank" rel="noopener noreferrer" className='ml-5'>
                                <img src={link.img} alt={link.name} className='h-[35px] w-[35px]' />
                            </a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </motion.div>

    </div>
  )
}

export default TabletNavbar