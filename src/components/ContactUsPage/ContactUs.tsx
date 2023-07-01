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

const ContactUs = () => {
    return (
        <div>

            <div className='hidden lg:block'>
                <div>
                    <Image src={bg} alt='bg' className='absolute top-0 right-0 w-full' />
                </div>
                <div className='flex justify-between lg:pl-[170px] lg:pr-[200px] ContactPageBg'>
                    <div  >
                        <div >
                            <h1 className='text-[2.8rem] text-[#6D748F] '>Let’s <span className='text-white'>level</span> up your<span className='relative bottom-3' > <br />
                                brand together,</span>
                                <span className='relative bottom-6'><br />let’s work</span></h1>
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
                    </div>
                    <div>
                        <ContactForm />
                    </div>
                </div>
            </div>
            <div className='lg:hidden'>
                <div>
                    <Image src={bg} alt='bg' className='absolute top-0 right-0 h-full w-full' />
                </div>
                <div className='mx-[2rem]'>
                    <div>
                        <div >
                            <h1 className='text-[1.9rem] text-[#6D748F] text-center'>Let’s <span className='text-white'>level</span> up your<span className='relative bottom-3' > <br />
                                brand together,</span>
                                <span className='relative bottom-6'><br />let’s work</span></h1>
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