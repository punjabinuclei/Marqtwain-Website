import React from 'react'
import Image from 'next/image'
import BorderSmall from '../../assets/BorderSmall.svg'
import { Inter } from 'next/font/google'
const inter = Inter({
    subsets: ['latin'],
    variable: '--inter-font'
})


const Stats = () => {
    return (
        <div>
            {/* Desktop Version */}
            <div className='px-[78px] pt-[100px] hidden lg:block'>
                <div className='h-fit text-white '>
                    <div className='conatiner grid grid-cols-4 gap-4'>
                        <div>
                            <div>
                                <div className='font-semibold  text-xs leading-4 tracking-widest flex items-center uppercase relative top-4'>
                                    Much Faster
                                </div>
                                <div style={inter.style} className=' font-semibold text-[67px] leading-16 tracking-tight flex items-center  text-Orange-2 Font-Inter '>
                                    20<span className='text-5xl relative top-3'>x</span>
                                </div>
                                <div className='font-bold text-[14px] leading-5 flex items-center text-white '>
                                    Faster than hiring creatives in-house
                                </div>
                                <div className='border-t-4 border-Gray-2 bg-opacity-30 rounded-lg mt-4 mr-6'>

                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <div className='font-semibold  text-xs leading-4 tracking-widest flex items-center uppercase relative top-4'>
                                    CUT COSTS
                                </div>
                                <div style={inter.style} className='font-semibold text-[67px] leading-16 tracking-tight flex items-center  text-Orange-2  Font-Inter'>
                                    50<span className='text-5xl relative top-3'>%</span>
                                </div>
                                <div className='font-bold text-[14px] leading-5 flex items-center text-white'>
                                    Reduction in average cost per asset
                                </div>
                                <div className='border-t-4 border-Gray-2 bg-opacity-30 rounded-lg mt-4 mr-6' >

                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <div className='font-semibold  text-xs leading-4 tracking-widest flex items-center uppercase relative top-4'>
                                    SHIP FASTER
                                </div>
                                <div style={inter.style} className='font-semibold text-[67px] leading-16 tracking-tight flex items-center  text-Orange-2 Font-Inter '>
                                    70<span className='text-5xl relative top-3'>%</span>
                                </div>
                                <div className='font-bold text-[14px] leading-5 flex items-center text-white'>
                                    Lower turnaround time for digital assets
                                </div>
                                <div className='border-t-4 border-Gray-2 bg-opacity-30 rounded-lg mt-4 mr-6'>

                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <div className='font-semibold  text-xs leading-4 tracking-widest flex items-center uppercase relative top-4'>
                                    STRESS FREE
                                </div>
                                <div style={inter.style} className='font-semibold text-[67px] leading-16 tracking-tight flex items-center  text-Orange-2 Font-Inter '>
                                    9.6
                                </div>
                                <div className='font-bold text-[14px] leading-5 flex items-center text-white'>
                                    Average rating from customers
                                </div>
                                <div className='border-t-4 border-Gray-2 bg-opacity-30 rounded-lg mt-4 mr-6'>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>




            {/*Mobile Version----------------------------------------*/}




            <div className='lg:hidden relative bottom-[150px]'>
                <div className='text-white'>
                    <div className=''>
                        <div className='text-center'>
                            <div style={inter.style} className=' font-semibold text-[4rem]  tracking-tight text-Orange-2 text-center'>
                                20<span className='text-5xl'>x</span>
                            </div>
                            <div className='font-semibold  text-[1.2rem] leading-4 tracking-widest '>
                                Much Faster
                            </div>
                            <div className='text-[1.2rem] leading-5 text-Gray-3 mt-2'>
                                Faster than hiring creatives in-house
                            </div>
                            <div className='flex justify-center mt-3'>
                                <Image src={BorderSmall} alt='Border' />
                            </div>
                        </div>
                    </div>

                    <div className='pt-[1.87rem]'>
                        <div className='text-center'>
                            <div style={inter.style} className=' font-semibold text-[4rem]  tracking-tight text-Orange-2 text-center'>
                                50<span className=''>%</span>
                            </div>
                            <div className='font-semibold  text-[1.2rem] leading-4 tracking-widest '>
                                CUT COSTS
                            </div>
                            <div className='text-[1.2rem] leading-5 text-Gray-3 mt-2'>
                                Reduction in average cost per asset
                            </div>
                            <div className='flex justify-center mt-3'>
                                <Image src={BorderSmall} alt='Border' />
                            </div>
                        </div>
                    </div>

                    <div className='pt-[1.87rem]'>
                        <div className='text-center'>
                            <div style={inter.style} className=' font-semibold text-[4rem]  tracking-tight text-Orange-2 text-center'>
                                70<span className=''>%</span>
                            </div>
                            <div className='font-semibold  text-[1.2rem] leading-4 tracking-widest '>
                                SHIP FASTER
                            </div>
                            <div className='text-[1.2rem] leading-5 text-Gray-3 mt-2'>
                                Lower turnaround time for digital assets
                            </div>
                            <div className='flex justify-center mt-3'>
                                <Image src={BorderSmall} alt='Border' />
                            </div>
                        </div>
                    </div>

                    <div className='pt-[1.87rem]'>
                        <div className='text-center'>
                            <div style={inter.style} className=' font-semibold text-[4rem]  tracking-tight text-Orange-2 text-center'>
                                9.6
                            </div>
                            <div className='font-semibold  text-[1.2rem] leading-4 tracking-widest '>
                                STRESS FREE
                            </div>
                            <div className='text-[1.2rem] leading-5 text-Gray-3 mt-2'>
                                Average rating from our customers
                            </div>
                            <div className='flex justify-center mt-3'>
                                <Image src={BorderSmall} alt='Border' />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Stats