import Image from 'next/image'
import FooterLogoMobile from "../../assets/LogoFooterMobile.svg"

import Linkedin from '../../assets/Linkedin.svg'
import Facebook from '../../assets/Facebook.svg'
import Instagram from '../../assets/Instagram.svg'
import Twitter from '../../assets/Twitter.svg'

const Footer = () => {
    return (
        <div className=''>
            <div className='bg-white  pt-[45px] pb-6'>
                <div className='flex justify-center'>
                    <Image src={FooterLogoMobile} alt='Logo' />
                </div>
                <div className=' py-12 px-[2rem]'>
                    <div>
                        <div className='font-semibold text-[1rem]'>
                            <div className='flex justify-around'>
                                <p className=''>Our Work</p>
                                <p className=''>Why Us</p>
                                <p className=''>About Us</p>
                            </div>
                            <div className='flex justify-center pt-2'>
                                <p className='pr-3'>Solutions</p>
                                <p className='pl-3'>Pricing</p>
                            </div>
                        </div>
                    </div>


                    <div className='flex justify-around my-10'>
                        <div>
                            <Image src={Linkedin} alt='Logo' />
                        </div>
                        <div>
                            <Image src={Facebook} alt='Logo' />
                        </div>
                        <div>
                            <Image src={Instagram} alt='Logo' />
                        </div>
                        <div>
                            <Image src={Twitter} alt='Logo' />
                        </div>
                    </div>



                    <div>
                        <h1 className='font-semibold text-[1.37rem] lg:text-lg pb-4 text-center'>Capabilities</h1>
                        <div className='text-[0.6rem] font-semibold text-Gray-4'>
                            <div className='flex justify-center'>
                                <p className='pr-2'>UX/UI</p>
                                <p className='pl-2'>Prototyping and Testing</p>
                            </div>
                            <div className='flex justify-center pt-2'>
                                <p className='pr-2'>Responsive Design and Development</p>
                                <p className='pl-2'>Branding For Startups</p>
                            </div>
                            <div className='flex justify-center pt-2'>
                                <p className='pr-2'>Presentation Design</p>
                                <p className='pl-2' >Packaging & Merch Design</p>
                            </div>
                            <div className='flex justify-center pt-2'>
                                <p className='pr-2'>Redesign Services</p>
                                <p className='px-2 '>Frontend Development</p>
                                <p className='pl-2'>Motion Design</p>
                            </div>
                            <div className='flex justify-center pt-2'>
                                <p className='pr-2'>Brand Identity Design</p>
                                <p className='pl-2'>Concept Creation</p>
                            </div>
                        </div>
                    </div>
                    <div className='mt-8'>
                        <h1 className='font-semibold text-[1.3rem] text-center'>Connect with Us!</h1>
                        <p className='text-[0.8rem] font-semibold pt-3 text-Gray-4 text-center'>We're just a message or a call away - get  in touch with us  today!</p>
                        <input style={{ outline: 'none' }} type="text" id="first_name" className="mt-8 bg-gray-50 border font-medium border-gray-400 rounded-md text-black text-xs   block w-full p-3.5  " placeholder="john@gmail.com" required />
                        <button className='block w-full bg-Theme-Blue-3 p-4 font-medium text-sm rounded-xl text-white mt-4 '>Contact Us</button>
                    </div>
                </div>

                <div>
                    <hr className=' mx-6'></hr>
                    <h1 className='text-[0.8rem] font-semibold pt-6 pb-3 mx-6 text-center'>Marqtwinn is an UX/UI digital agency with group of creative team members</h1>
                    <p className='text-[0.6rem] pb-6 mx-8 text-center'>At MarqTwinn, we believe that design is more than just how something looks. It's about solving problems and creating meaningful connections between people and technology.<br /> That's why we work closely with our clients to understand their goals, challenges, and audiences to deliver intuitive, aesthetically pleasing, and effective digital solutions.</p>
                    <hr className=' mx-20'></hr>
                </div>

                <div className=' mx-6 pt-4 text-[0.8rem]'>
                        <p className='px-4 text-Black-2 text-center pb-3'>© 2023 Marqtwinn. All rights reserved.</p>
                        <div className='flex justify-around text-Theme_blue-3'>
                        <p className=' underline font-medium underline-offset-2'>Privacy Policy</p>
                        <p className=' underline font-medium underline-offset-2'>Terms of Use</p>
                        <p className=' underline font-medium underline-offset-2'>Status Page</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer