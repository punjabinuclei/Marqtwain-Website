import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import ourApproach from '../../assets/OurApproach.svg'
import CodeAgain from '../../assets/CodeAgain.svg'
import Test from '../../assets/Test.svg'


const data = ['Discovery and Validation', 'Define, Ideate & Design', 'Maintenance and Monitoring', 'Testing and Validation'];

const OurApproach = () => {

    const [currentDataIndex, setCurrentDataIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDataIndex((prevIndex) => (prevIndex + 1) % data.length);
        }, 1000);
        return () => clearInterval(interval);
    }, [data.length]);

    const currentData = data[currentDataIndex];


    return (
        <div>
            <div className='bg-BG-2 h-full w-full text-white pt-[60px] hidden lg:block' >
                <div className=''>
                    <div className=''>
                        <h1 className='font-semibold text-base leading-tight flex items-center justify-center tracking-widest uppercase'>Our Approach</h1>
                    </div>
                    <div className='font-bold text-[48px]  flex items-center justify-center text-center mt-4'>
                        <h1>Streamlining the Design Process for<span className='text-Theme-Blue'><br /> Better, Faster Results</span></h1>
                    </div>
                </div>

                <div className='flex justify-around pt-[36px]'>
                    <div>
                        <Image src={ourApproach} alt='Img' />
                    </div>

                    <div className='relative top-12'>
                        {/* <div className="animated-container">
                            <div className="text">Discovery and Validation</div>
                            <div className="text">Define, Ideate & Design</div>
                            <div className="text">Maintenance and Monitoring</div>
                            <div className="text">Testing and Validation</div>
                        </div> */}

                    </div>

                    <Image src={CodeAgain} alt='CodeAgain' />


                </div>
            </div>
            {/* Mobile Version */}
            <div className='lg:hidden bg-BG-2 h-full w-full text-white my-[60px] '>
                <div>
                    <Image src={ourApproach} alt='Img' />
                </div>
                <div className=''>
                    <div className=''>
                        <h1 className='font-semibold text-[0.6rem] mt-6 leading-tight flex items-center justify-center tracking-widest uppercase'>Our Approach</h1>
                    </div>
                    <div className='font-bold text-[1.2rem]  flex items-center justify-center text-center mt-2'>
                        <h1>Streamlining the Design Process for<span className='text-Theme-Blue'><br /> Better, Faster Results</span></h1>
                    </div>
                </div>
                <div className='flex justify-center mt-4 pb-10'>
                    <h1 className='text-[1.31rem] font-medium ourApproachAnimation'>{currentData}</h1>
                </div>
            </div>
        </div>

    )
}

export default OurApproach