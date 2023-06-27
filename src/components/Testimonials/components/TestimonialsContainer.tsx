import React from 'react'




interface TestimonialsContainerProps {
    testimonial: string;
    name: string;
    org: string;
    position: string;
}



const TestimonialsContainer = ({ testimonial, name, org, position }: TestimonialsContainerProps) => {
    return (

        <div className='flex justify-center'>
            <div className='testimonialsCardBg text-white text-center w-[960px] h-[470px] px-[140px] py-[100px]'>
                <div className=' text-[24px] font-raleway leading-[36px]' >
                    {testimonial}
                </div>
                <div className='text-[28px] font-bold leading-[33px] tracking-wide pt-[60px]'>
                    {name}
                </div>
                <div className='text-[14px]  leading-[16px] tracking-widest uppercase pt-[15px]'>
                    {org}
                </div>
                <div className='text-[14px] leading-[16px] tracking-widest uppercase pt-[10px]'>
                    {position}
                </div>
            </div>
        </div>
    )
}

export default TestimonialsContainer