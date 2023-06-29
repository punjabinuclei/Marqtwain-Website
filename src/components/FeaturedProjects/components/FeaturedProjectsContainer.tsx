import React from 'react'


interface Props {
    children: React.ReactNode;
    heading: string;
    description: string;
}


const FeaturedProjectContainer = ({ children, heading, description }: Props) => {
    return (

        <div className="">
            <div className="content">
                <div className="content-overlay"></div>
                {children}
                <div className="content-details fadeIn-bottom fadeIn-left ">
                    <h3 className='font-semibold text-[1.2rem] lg:text-[25px] leading-16 flex items-center text-center tracking-tighter text-white relative bottom-5 lg:bottom-0'>{heading}</h3>
                    <p className='text-[0.6rem] lg:text-[16px] leading-16 flex items-center tracking-tighter text-white relative bottom-5 lg:bottom-0 '>{description}</p>
                </div>
            </div>
        </div>


    )
}

export default FeaturedProjectContainer