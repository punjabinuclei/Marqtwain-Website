import React from 'react'
import { motion } from 'framer-motion'



interface TestimonialsContainerProps {
    testimonial: string;
    name: string;
    org: string;
    position: string;
}





const TestimonialsContainer = ({ testimonial, name, org, position }: TestimonialsContainerProps) => {
    return (
        <div>
            <div
                className='flex justify-center hidden lg:block'>
                <div className='testimonialsCardBg text-white text-center w-[960px] h-[470px] px-[140px] py-[100px]'>
                    <div>
                        <div className='text-[0.8rem] font-medium lg:text-[24px] font-raleway leading-[36px]' >
                            {testimonial}
                        </div>
                        <div className='text-[0.8rem] lg:text-[28px] font-bold leading-[33px] tracking-wide pt-[60px]'>
                            {name}
                        </div>
                        <div className='text-[0.6rem] lg:text-[14px]  leading-[16px] tracking-widest uppercase pt-[15px]'>
                            {org}
                        </div>
                        <div className='text-[0.5rem] lg:text-[14px] leading-[16px] tracking-widest uppercase pt-[10px]'>
                            {position}
                        </div>
                    </div>
                </div>
            </div>
            <div className='lg:hidden mb-10 pb-10 '>
                <div className='flex justify-center'>
                    <div className='testimonialsCardBgMobile text-white text-center w-[19rem] h-[14rem] px-2 py-4'>
                        <div>
                            <div className='text-[0.8rem] font-medium lg:text-[24px] font-raleway leading-5 pt-4'>
                                {testimonial}
                            </div>
                            <div className='text-[0.8rem] lg:text-[28px] font-bold  tracking-wide pt-4'>
                                {name}
                            </div>
                            <div className='text-[0.6rem] lg:text-[14px]  leading-[16px] tracking-widest uppercase '>
                                {org}
                            </div>
                            <div className='text-[0.5rem] lg:text-[14px] leading-[16px] tracking-widest uppercase '>
                                {position}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestimonialsContainer