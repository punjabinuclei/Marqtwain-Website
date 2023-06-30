import Image from 'next/image'
import FooterLogo from "../../assets/LogoFooter.svg"
import { useRouter } from 'next/router'


const Footer = () => {
    const router=useRouter();
    return (
        <div className='mt-6 '>
            <div className='bg-white  px-2 pt-24 pb-10'>
                <div className='flex justify-center'>
                    <Image src={FooterLogo} alt='Logo' />
                </div>

                <div className='flex justify-evenly pb-12'>
                    <div>
                        <ul className='font-bold text-lg'>
                            <li className='pb-6'>Our Work</li>
                            <li className='pb-6'>Why Us</li>
                            <li className='pb-6'>About Us</li>
                            <li className='pb-6'>Solutions</li>
                            <li className='pb-6'>Pricing</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li className='font-semibold text-lg pb-4'>Capabilities</li>
                            <li className='text-sm font-semibold text-theme-gray-4 pb-4'>UX/UI</li>
                            <li className='text-sm font-semibold text-theme-gray-4 pb-4'>Prototyping and Testing</li>
                            <li className='text-sm font-semibold text-theme-gray-4 pb-4'>Responsive Design and Development</li>
                            <li className='text-sm font-semibold  text-theme-gray-4 pb-4'>Branding For Startups</li>
                            <li className='text-sm font-semibold text-theme-gray-4 pb-4'>Presentation Design</li>
                            <li className='text-sm font-semibold text-theme-gray-4 pb-4' >Packaging & Merch Design</li>
                            <li className='text-sm font-semibold text-theme-gray-4 pb-4'>Redesign Services</li>
                            <li className='text-sm font-semibold text-theme-gray-4 pb-4'>Frontend Development</li>
                            <li className='text-sm font-semibold text-theme-gray-4 pb-4'>Motion Design</li>
                            <li className='text-sm font-semibold text-theme-gray-4 pb-4'>Brand Identity Design</li>
                            <li className='text-sm font-semibold text-theme-gray-4 pb-4'>Concept Creation</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className='font-bold text-lg'>Connect with Us!</h1>
                        <p className='text-xs font-semibold pt-3'>We're just a message or a call away - get  in touch with us <br /> today!</p>
                        <input style={{ outline: 'none' }} type="text" id="first_name" className="mt-8 bg-gray-50 border font-medium border-gray-400 rounded-md text-black text-xs   block w-full p-3.5  " placeholder="john@gmail.com" required />
                        <button  onClick={() => router.push('/contactUs')} className='block w-full bg-Theme-Blue-3 p-4 font-medium text-sm rounded-xl text-white mt-4 '>Contact Us</button>
                    </div>
                </div>

                <div>
                    <hr className=' mx-20'></hr>
                    <h1 className='text-sm font-semibold pt-6 pb-3 mx-20'>Marqtwinn is an UX/UI digital agency with group of creative team members</h1>
                    <p className='text-sm pb-6 mx-20'>At MarqTwinn, we believe that design is more than just how something looks. It's about solving problems and creating meaningful connections between people and technology.<br /> That's why we work closely with our clients to understand their goals, challenges, and audiences to deliver intuitive, aesthetically pleasing, and effective digital solutions.</p>
                    <hr className=' mx-20'></hr>
                </div>

                <div className='flex justify-between mx-20 pt-4 text-sm'>
                    <div className='flex justify-start'>
                        <p className='px-4 '>© 2023 Marqtwinn. All rights reserved.</p>
                        <p className='px-4 underline font-medium underline-offset-2'>Privacy Policy</p>
                        <p className='px-4 underline font-medium underline-offset-2'>Terms of Use</p>
                        <p className='px-4 underline font-medium underline-offset-2'>Status Page</p>
                    </div>
                    <div className='flex'>
                        {/* <div className='bg-black rounded-full p-2 mx-2'>
              <Icon className='' icon="ri:linkedin-fill" color="white" width="24" />
            </div>
            <div className='bg-black rounded-full p-2  mx-2'>
              <Icon icon="ri:facebook-fill" color="white" width="24" />
            </div>
            <div className='bg-black rounded-full p-2  mx-2'>
              <Icon icon="ri:twitter-fill" color="white" width="24" />
            </div>
            <div className='bg-black rounded-full p-2  mx-2'>
              <Icon icon="ph:instagram-logo" color="white" width="24" />
            </div> */}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer