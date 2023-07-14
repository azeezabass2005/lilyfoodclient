import React from 'react'
import { bottomLinks } from '../constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

const BottomNav = () => {
  return (
    <div className={`fixed z-[99] flex bottom-0 bg-[#fff] w-[100vw] h-[60px] justify-around items-center shadow-[#058141] ss:hidden shadow-2xl`}>
        {bottomLinks.map((link, index) => (
            <NavLink  key={index} to={link.path} className={`p-3 flex justify-center items-center rounded-full`} >
                <FontAwesomeIcon icon={link.icon} className={`vs:h-[30px] vs:w-[30px] h-[23px] w-[23px] text-[#058141] icon`} />
            </NavLink>
        ))}
    </div>
  )
}

export default BottomNav