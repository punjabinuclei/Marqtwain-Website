import React from 'react'
import Image from 'next/image'
import ElevateImage from '../../assets/ElevateImage.svg'
import ElevateBgMobile from '../../assets/ElevateBgMobile.svg'
import ElevateBox from './components/ElevateBox'

const ElevateProject = () => {
    return (
        <div>
            <div className='hidden lg:block h-screen bg-ElevatePage relative bottom-20'>
                <div className='flex justify-between pt-[437px]'>
                    <div>
                        <Image src={ElevateImage} alt='Img' />
                      
                    </div>
                    <div className='pr-[150px]'>
                        <div className='font-semibold text-white text-5xl leading-10 tracking-wide'>
                            Elevate your product<span className='relative top-4'><br />with Marqtwinn</span>
                        </div>
                        <div className='mt-[61px]'>
                            <ElevateBox digits='$985K+' info='Fundraising' info2='' definition='We helped companies to get $900k funding' />
                            <ElevateBox digits='30+' info='Satisfied' info2='Client' definition='We believe that the surest measure of success is when a client partners with us more than once. Over half our clients stay with us for longer than a single project.' />
                            <ElevateBox digits='3Yr+' info='International' info2='Immersion' definition='We have had quite a run in our 3+ years of operation with successful project launches across all over the world' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='lg:hidden '>
                <div>
                    <Image src={ElevateBgMobile} alt='Img' />
                </div>
                <div className='relative bottom-12 font-semibold text-white text-[1.31rem] leading-10 tracking-wide text-center'>
                    Elevate your product with <span className='relative bottom-3'><br />Marqtwinn</span>
                </div>
                <div className='relative bottom-10'>
                    <ElevateBox digits='$985K+' info='Fundraising' info2='' definition='We helped companies to get $900k funding' />
                    <ElevateBox digits='30+' info='Satisfied' info2='Client' definition='Over half our clients stay with us for longer than a single project.' />
                    <ElevateBox digits='3Yr+' info='International' info2='Immersion' definition='3+ years of operation with successful project launches across all over the world' />
                </div>
            </div>

        </div>
    )
}

export default ElevateProject