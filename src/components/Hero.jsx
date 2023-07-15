import React from 'react'
import { modelone } from '../assets'

const Hero = () => {
  return (
    <div className='hero min-h-[100vh]'>
        <div className='hero-gradient min-h-[100vh] flex md:flex-row flex-col justify-center items-center sm:px-20 vs:px-5 xs:px-8 ss:px-14 px-3 pt-20 ss:pt-24 md:px-20 lg:px-32 border-b-2 border-solid border-[var(--SECONDARY-COLOR)] pb-2'>
            <div className='flex-1 md:min-w-[40vw] xl:min-w-[43vw]'>
                <h2 className='sm:text-[2.7rem] vs:text-[1.8rem] text-[1.6rem] text-[var(--SECONDARY-COLOR)] font-semibold sm:leading-[65px] lg:mt-10 xl:text-[3.8rem] xl:leading-[82px] large-text'>
                    Your Number One Choice For African
                    Indigenious Dishes in Raw Form.
                </h2>
                <p className='text-[16px] vs:text-[18px] xs:text-[20px] sm:text-[24px] md:text-[26px] xl:text-[35px] xl:leading-[50px] text-[#000] vs:leading-[32px] leading-[25px] sm:leading-[42px] max-w-[530px] xl:max-w-[670px] md:mt-3'>
                    Welcome to Lilly Foods where we Offer varieties 
                    of African soup Recipes at unimaginable prices, 
                    to satisfy your cravings for local dishes.
                </p>
                <div className='flex flex-wrap sm:gap-[2rem] gap-[1rem] vs:mt-7 mt-3 vs:mb-12 mb-8'>
                    <button className=' sm:p-5 sm:px-9 vs:px-7 px-5 vs:p-4 p-3 text-[#fff] vs:text-[1.3rem] text-[1rem] vs:rounded-[20px] rounded-[12px] bg-[#024925] font-semibold'><a href="/">Order Now</a></button>
                    <button className=' sm:p-5 sm:px-9 vs:px-7 px-5 vs:p-4 p-2 bg-[#f4fff9] border-dotted border-[2px] border-[#024925] font-semibold vs:text-[1.3rem] text-[1rem] vs:rounded-[20px] rounded-[12px] text-[#024925]'><a href="/">Meet Us</a></button>
                </div>
            </div>
            <div className='relative xs:mt-0 vs:mt-2 mt-1'>
                <div className='vs:h-[95%] vs:w-[95%] h-[230px] w-[230px] rounded-full gradient-white absolute z-[1] right-0' />
                <img src={modelone} alt="model" className={`z-[2] relative`}/>
                {/* <div className='flex justify-center items-center px-2 rounded-[8px] bg-[#1cd777] allroundshadow z-[3] absolute top-[5%] left-[8%]' >
                    <img src={timelydelivery} alt="delivery" className={`vs:h-[90px] vs:w-[90px] h-[70px] w-[70px]`} />
                </div> */}
            </div>
        </div>
    </div>
  )
}

export default Hero