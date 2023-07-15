import React from 'react'
import { bottomLinks } from '../constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'

const BottomNav = () => {
  return (
    <div className={`fixed z-[99] flex bottom-0 bg-[#fff] w-[100vw] h-[60px] justify-around items-center shadow-[var(--SECONDARY-COLOR)] ss:hidden shadow-2xl`}>
        {bottomLinks.map((link, index) => (
            <NavLink  key={index} to={link.path} className={`p-3 flex justify-center items-center rounded-full`} aria-describedby={link.name} >
                <FontAwesomeIcon icon={link.icon} className={`vs:h-[30px] vs:w-[30px] h-[23px] w-[23px] text-[var(--SECONDARY-COLOR)] icon`} />
                <p id={link.name} className='opacity-0 absolute'>
                  {link.name}
                </p>
            </NavLink>
        ))}
    </div>
  )
}

export default BottomNav