import React from 'react'
import { motion } from 'framer-motion';
import SpotlightAnimation from './components/SpotLightAnimation';

const variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            delay: 2,
            staggerChildren: 0.5
        }
    },
}



const Header = () => {
    return (
        <motion.div
        variants={variants}
        initial='hidden'
        animate='show'
        >
            <div className='hidden lg:block'>
                <div className='flex justify-center mt-[90px]'>
                    <div>
                        <div className='font-normal font-regular text-[21px]    tracking-[0.365798px] text-[#5E617D]'>
                            <h1>World-Class Products, crafted by Marqtwinn</h1>
                        </div>
                        <div className='font-extrabold text-[143.57px]  tracking-[0.435062px] text-[#5E617D] relative bottom-5 '>
                            <h1></h1>
                            <SpotlightAnimation/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='lg:hidden'>
                <div className='text-center'>
                    <div>
                        <div className='font-[800] text-[2.9rem]  tracking-[0.00881rem] text-[#5E617D]'>
                            <h1>Our Projects</h1>
                        </div>
                        <div className='text-[0.8rem]  tracking-[0.02288rem] text-[#5E617D]'>
                            <h1>World-Class Products, crafted by Marqtwinn</h1>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Header