import React from 'react'
import Image from 'next/image'
import ourApproach from '../../assets/OurApproach.svg'
import CodeAgain from '../../assets/CodeAgain.svg'

const OurApproach = () => {
    return (
        <div className='bg-BG-2 h-full w-full text-white pt-[60px]' >
            <div>
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

                    <Image src={CodeAgain} alt='CodeAgain' />

                </div>
            </div>
        </div>
    )
}

export default OurApproach