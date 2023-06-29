import React from 'react'
import Image from 'next/image'
import Img1 from '../../assets/Img1.svg'
import Img2 from '../../assets/Img2.svg'
import Img3 from '../../assets/Img3.svg'
import Img4 from '../../assets/Img4.svg'

const ExpertUiDesigns = () => {
    return (
        <div className='hidden lg:block bg-white   h-fit py-28'>
            <div className=' flex justify-evenly pl-[70px]'>
                <div className='self-center '>
                    <p className='text-sm tracking-widest font-semibold '>DRIVING GREAT OUTCOMES</p>
                    <h1 className='text-5xl font-bold mt-4 tracking-wide'>Expert<span className='text-Theme-Blue-2'> UI/UX </span> <span className='relative top-3'> <br /> Design Solutions</span> <span className='relative top-6'> <br /> for Your Business </span></h1>
                    <input type="text" id="first_name" className="mt-10 bg-gray-50 border font-medium border-gray-300 text-gray-900 text-sm rounded-lg  block p-3.5 w-[397px]  relative top-7" placeholder="Your work email" required />
                    <button className=' bg-Orange-2 p-4 font-medium text-sm rounded-lg text-white mt-3 relative top-6 w-[397px]'>Get Started</button>
                </div>

                <div className='grid grid-cols-2 gap-4 '>
                    <div className=' '>
                        <Image src={Img1} alt='' className='rounded-lg w-10/12' />
                        <p className='text-sm leading-1 mt-4 pb-4 '>Whether you're launching a new product,<br /> rebranding your business, or optimizing<br /> your existing digital assets, we have the<br /> expertise to help you achieve your goals.</p>
                        <hr className="h-px  border-b-4 border-theme-gray-2 w-10/12"></hr>
                    </div>
                    <div className='' >
                        <Image src={Img2} alt='' className='rounded-lg w-10/12' />
                        <p className='text-sm leading-1 mt-4   pb-4'>We have proven track record of delivering<br /> successful projects for a wide variety of<br /> industries, including e-commerce,<br /> healthcare, education, and more.</p>
                        <hr className="h-px  border-b-4 border-theme-gray-2 w-10/12"></hr>
                    </div>
                    <div className=''>
                        <Image src={Img3} alt='' className='rounded-lg w-10/12' />
                        <p className='text-sm  mt-4   pb-9'>50% reduction in overall costs as<br /> compared to a traditional agency, while<br /> ensuring high-quality creative</p>
                        <hr className="h-px  border-b-4 border-theme-gray-2 w-10/12"></hr>
                    </div>
                    <div className=''>
                        <Image src={Img4} alt='' className='rounded-lg w-10/12' />
                        <p className='text-sm  mt-4 pb-4 '> We work closely with our clients to<br /> understand their goals, challenges, and<br /> audiences to deliver intuitive, aesthetically<br /> pleasing, and effective digital solutions.</p>
                        <hr className="h-px  border-b-4 border-theme-gray-2 w-10/12"></hr>
                    </div>
                </div>
                <div>

                </div>


            </div>
        </div>
    )
}

export default ExpertUiDesigns