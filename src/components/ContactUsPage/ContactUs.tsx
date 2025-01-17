import React from 'react'
import ContactForm from './components/ContactForm'
import Image from 'next/image'
import Logo from '../../assets/LogoContactUs.svg'
import Linkedin from '../../assets/Linkedin2.svg'
import Twitter from '../../assets/Twitter2.png'
import Instagram from '../../assets/Instagram2.svg'
import Facebook from '../../assets/Facebook2.svg'
import bg from '../../assets/EllipseNew.svg'
import bg2 from '../../assets/EllipseNew2.svg'

import { motion } from 'framer-motion'


const Leftvariant = {
    hidden: { opacity: 0, x: -100 },
    show: {
        opacity: 1, x: 0
    },
}

const Rightvariant = {
    hidden: { opacity: 0, x: 100 },
    show: {
        opacity: 1, x: 0
    },
}



const ContactUs = () => {
    return (
        <div className=''>

            <div className='hidden lg:block '>
                <div className='flex justify-between lg:pl-[170px] lg:pr-[200px]'>
                    <motion.div
                        variants={Leftvariant}
                        initial='hidden'
                        animate='show'
                        transition={{ duration: 0.5, ease: 'easeInOut', delay: 2 }}
                    >
                        <div >
                            <h1 className='text-[2.8rem]  text-transparent bg-clip-text bg-gradient-to-r from-[#6D748F] to-[#4F56729E]'>Let’s <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#4F567254] ">'>level</span> up your<span className='relative bottom-3 text-transparent bg-clip-text bg-gradient-to-r from-[#6D748F] to-[#4F56729E]' > <br />
                                brand together,</span>
                                <span className='relative bottom-6 text-transparent bg-clip-text bg-gradient-to-r from-[#6D748F] to-[#4F56729E]'><br />let’s work</span></h1>
                        </div>
                        <div className='mt-[15rem]'>
                            <div className='flex'>
                                <Image src={Logo} alt='Logo' />
                                <h1 className='text-[1rem] text-white pl-[0.56rem]'>marqtwinncreations@gmail.com</h1>
                            </div>
                            <div className='flex mt-[1.5rem]'>
                                <Image src={Linkedin} alt='Linkedin' className='mr-[2rem]' />
                                <Image src={Facebook} alt='Facebook' className='mr-[2rem]' />
                                <Image src={Twitter} alt='Twitter' className='mr-[2rem]' />
                                <Image src={Instagram} alt='Instagram' className='mr-[2rem]' />
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        variants={Rightvariant}
                        initial='hidden'
                        animate='show'
                        transition={{ duration: 0.5, ease: 'easeInOut', delay: 2 }}
                    >
                        <ContactForm />
                    </motion.div>
                </div>
            </div>
            <div className='lg:hidden'>
                <div className='mx-[2rem] z-40'>
                    <div>
                        <div >
                            <h1 className='text-[1.9rem] text-transparent bg-clip-text bg-gradient-to-r from-[#6D748F] to-[#4F56729E] text-center'>Let’s <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#4F567254]'>level</span> up your<span className='relative bottom-3 text-transparent bg-clip-text bg-gradient-to-r from-[#6D748F] to-[#4F56729E]' > <br />
                                brand together,</span>
                                <span className='relative bottom-6 text-transparent bg-clip-text bg-gradient-to-r from-[#6D748F] to-[#4F56729E]'><br />let’s work</span></h1>
                        </div>
                    </div>
                    <div>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs