import React from 'react'

const Header = () => {
    return (
        <div>
            <div className='hidden lg:block'>
                <div className='flex justify-center mt-[90px]'>
                    <div>
                        <div className='font-normal font-regular text-[21px]    tracking-[0.365798px] text-[#5E617D]'>
                            <h1>World-Class Products, crafted by Marqtwinn</h1>
                        </div>
                        <div className='font-extrabold text-[143.57px]  tracking-[0.435062px] text-[#5E617D] relative bottom-5 '>
                            <h1>Our Projects</h1>
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
        </div>
    )
}

export default Header