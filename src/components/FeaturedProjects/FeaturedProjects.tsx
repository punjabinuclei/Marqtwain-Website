import React from 'react'
import Image from 'next/image'
import DatingImg from '../../assets/Projects/dating.svg'
import DictionaryImg from '../../assets/Projects/Dictionary.svg'
import NFTImg from '../../assets/Projects/NFT.svg'
import WatchImg from '../../assets/Projects/Watch.svg'

import FeaturedProjectContainer from './components/FeaturedProjectsContainer'


const FeaturedProjects = () => {
    return (
        <div className=' mt-[520px] text-white mx-[177px] overflow-x-hidden'>
            <div>
                <div className='mb-[91px]'>
                    <div className='font-semibold text-sm leading-[150%]  tracking-wider uppercase'>
                        <p>See our featured</p>
                    </div>
                    <div className='font-bold text-5xl leading-[118%]  tracking-wide'>
                        <h1>Projects</h1>
                    </div>
                </div>
                <div className=' grid grid-cols-2 gap-10 '>
                    <div className="relative group">
                        <FeaturedProjectContainer heading='ArtMint' description='Your Gateway to future Digital Art'>
                            <Image src={NFTImg} alt="Img" />
                        </FeaturedProjectContainer >
                    </div>


                    <div className='relative bottom-[179px]'>
                        <FeaturedProjectContainer heading='Lexiverse' description='Interactive Dictionary App'>
                            <Image src={DictionaryImg} alt="Img" />
                        </FeaturedProjectContainer >
                    </div>

                    <div>
                        <FeaturedProjectContainer heading='Lolo Rosso' description='Watch Connoissuer E-Commerce Store'>
                            <Image src={WatchImg} alt="Img" />
                        </FeaturedProjectContainer >
                    </div>
                    <div className='relative bottom-[179px]'>
                        <FeaturedProjectContainer heading='Coupl.' description='Saving and Investing for Couples'>
                            <Image src={DatingImg} alt="Img" />
                        </FeaturedProjectContainer >
                    </div>

                    <div>

                    </div>

                    <div className='relative bottom-[150px]'>
                        <div className='font-normal text-4xl leading-[16px]  tracking-[0.05em]'>
                            Wait, there's more
                        </div>
                        <div className='mt-10'>
                            <button className='border-2 border-Orange-2 py-[12px] px-[32px] rounded-xl font-bold text-sm leading-6 flex items-center text-center tracking-wider'>See More</button>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default FeaturedProjects