import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { features } from '../constants'
import { grocerybasket, deliveryillustration, timelydelivery, qualityillustration } from '../assets'

const WhyUs = () => {
  return (
    <div className='hero-gradient flex md:flex-row-reverse flex-col justify-center items-center sm:px-20 vs:px-5 xs:px-8 ss:px-14 px-3 md:px-20 lg:px-32 pt-10 pb-5'>
        <div className='md:w-[55vw] md:px-[2vw]'>
            <h2  className='sm:text-[2.7rem] text-[2.4rem] text-[#058141] font-semibold sm:leading-[65px] lg:mt-10 xl:text-[3.8rem] xl:leading-[82px] large-text'>
                Why Should You Choose Us?
            </h2>
            <div className=''>
                {features.map((feature, index) => (
                    <div key={index} className='flex items-center justify-start mt-3 p-1 xs:p-4 rounded-[10px] bg-[#1cd77720]'>
                        <div className='h-[45px] min-w-[45px] bg-[#15bb66] flex justify-center items-center rounded-full mr-3'>
                            <FontAwesomeIcon icon={faCheck} className='h-[20px] w-[25px] bg-[#15bb66] text-[#fff] rounded-full' />
                        </div>
                        <div>
                            <h3 className='sm:text-[1.7rem] text-[1.4rem] text-[#058141] font-semibold xl:text-[3rem]'>{feature.name}</h3>
                            <p className='text-[16px] xs:text-[18px] ss:text-[20px] sm:text-[22px] text-[#010] xl:text-[28px]'>{feature.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <div className='relative mt-5 vs:mt-7 md:mt-0'>
            <img src={grocerybasket} alt="grocery" className='relative' />
            <div className='flex justify-center items-center px-2 rounded-[8px] bg-[#17d777] allroundshadowwhite absolute top-[5%]' >
                <img src={deliveryillustration} alt="delivery" className={`vs:h-[90px] vs:w-[90px] h-[70px] w-[70px]`} />
            </div>
            <div className='flex justify-center items-center px-2 absolute bottom-[10%] rounded-[8px] bg-[#fff] right-0 allroundshadowgreen' >
                <img src={qualityillustration} alt="delivery" className={`vs:h-[90px] vs:w-[90px] h-[70px] w-[70px]`} />
            </div>
        </div>
    </div>
  )
}

export default WhyUs