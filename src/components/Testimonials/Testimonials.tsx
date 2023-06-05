import React from 'react'
import Image from 'next/image'
import Mohit from "../../assets/Testimonials/MohitBhandari.svg"

const Testimonials = () => {
    return (
        <div className='h-screen '>
            <div className='mx-16 '>
                <div>
                    <h1 className='text-white font-semibold text-5xl text-center mt-24'>Our customers can’t imagine<br /> life without Marq Twinn</h1>

                    <div className='flex justify-center  '>
                        <div className='flex w-9/12 py-12 px-12 testimonials '>
                            <div className='px-4'>
                                <Image src={Mohit} alt='Mohit' />
                                <div className='text-white pt-6 text-xs'>
                                    <p className='text-sm font-base'>STRAZY</p>
                                    <h1 className='text-3xl font-bold'>Mohit Bhandari</h1>
                                    <p className='text-sm'>CEO & FOUNDER</p>
                                </div>
                            </div>
                            <div className='text-white text-2xl tracking-wide pt-10 pl-20'>
                                <p>“Marqtwinn makes it easy for Strazy’s<br /> Growth team to get design done well and<br /> fast. Their work is intuitive and enables<br /> speed, and the dedicated team model<br /> ensures everyone understands our brand<br /> and day-to-day needs deeply, allowing for<br /> scale.”</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonials