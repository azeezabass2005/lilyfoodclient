import React from 'react'
import { faPhone, faEnvelope, faLocationDot, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Logo from './Logo'
import { Link, NavLink } from 'react-router-dom'
import { navLinks } from '../constants'

const DesktopNavbar = () => {
  return (
    <div className='fixed top-0 w-[100vw] z-[100] flex justify-center flex-col items-center'>
      <div className='bg-[#12a95c] h-[90px] w-[100vw] pt-[10px] flex justify-around xl:px-28'>
        <p className='font-semibold text-[#fff] vs:text-[22px] text-[19px] ml-4'>
          Welcome to lily foods
        </p>
        <span className=' text-[#eee] text-[20px]'>|</span>
        <div className='flex justify-between w-[70%]'>
          <a href='tel:+971524506575' className='flex text-[#fff] justify-center items-center h-[30px]'>
              <FontAwesomeIcon icon={faPhone} className={`h-[24px] w-[24px] vs:h-[28px] vs:w-[28px]`} />
              <p className='font-semibold vs:text-[22px] text-[19px] ml-4'>
                  Call Us
              </p>
          </a>
          <span className=' text-[#eee] text-[20px]'>|</span>
          <address className='flex text-[#fff] justify-center items-center h-[30px]'>
            <FontAwesomeIcon icon={faLocationDot} className={`h-[24px] w-[24px] vs:h-[28px] vs:w-[28px]`} />
            <p className='font-semibold vs:text-[22px] text-[19px] ml-4'>
            Al wasan building teecom, Nigeria
            </p>
          </address>
          <span className=' text-[#eee] text-[20px]'>|</span>
          <a href='mailto:lilyfood@gmail.com' className='flex text-[#fff] justify-center items-center h-[30px] pr-3'>
              <FontAwesomeIcon icon={faEnvelope} className={`h-[24px] w-[24px] vs:h-[28px] vs:w-[28px]`} />
              <p className='font-semibold vs:text-[22px] text-[19px] ml-4'>
                  Mail Us
              </p>
          </a>
      </div>

      </div>
      <div className='bg-[#fff] h-[85px] xl:h-[95px] w-[93vw] xl:w-[90vw] rounded-[15px] mt-[-40px] flex items-center justify-around px-4'>
        <Link to={'/'} className={`flex justify-center items-center`}>
            <Logo />
            <h1 className='vs:text-[30px] text-[28px] uppercase font-bold font-poppins ml-2 text-[var(--SECONDARY-COLOR)]'>
                Lily food
            </h1>
        </Link>
        <div className='flex items-center justify-around w-[50%]'>
          {navLinks.map((link, index) => (
            <NavLink to={link.path} key={link.name} className={`font-semibold text-[#343] xl:text-[20px]`}>
              {index > 2 ?
              <FontAwesomeIcon icon={link.icon} className={`text-[var(--SECONDARY-COLOR)] h-[23px] w-[23px] xl:h-[30px] xl:w-[30px] `} /> :
              <p className='uppercase'>{link.name}</p>
              }
            </NavLink>
          ))}
        </div>
        {/* <button className='px-8 p-3 text-[#fff] text-[1rem] font-semibold rounded-[5px] bg-[var(--SECONDARY-COLOR)] font-poppins'><a href="/">Sign Up</a></button> */}
        <div className={`bg-[#fff] border-[2px] border-solid border-[var(--SECONDARY-COLOR)] rounded-[10px] flex h-[45px] w-[21vw] xl:w-[20vw] justify-between items-center`}>
          <input type="search" name="productSearch" id="productSearch" placeholder='Search' className='p-2 rounded-[10px] outline-none text-[var(--SECONDARY-COLOR)] w-[85%]' />
          <div className='bg-[var(--SECONDARY-COLOR)] rounded-r-[8px] h-[45px] w-[50px] flex justify-center items-center'>
            <FontAwesomeIcon icon={faSearch} className=' text-[#fff] h-[20px] w-[20px]' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DesktopNavbar