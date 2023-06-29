import React from 'react'
import Image from 'next/image'
import DatingImg from '../../assets/Projects/dating.svg'
import DictionaryImg from '../../assets/Projects/Dictionary.svg'
import NFTImg from '../../assets/Projects/NFT.svg'
import WatchImg from '../../assets/Projects/Watch.svg'

import FeaturedProjectContainer from './components/FeaturedProjectsContainer'


const FeaturedProjects = () => {
    return (
        <div className='text-white  overflow-x-hidden'>
            <div>
                <div className='pl-[1.88rem]'>
                    <div className='font-semibold text-[0.8rem] lg:text-sm leading-[150%]  tracking-wider uppercase'>
                        <p>See our featured</p>
                    </div>
                    <div className='font-bold text-[1.95rem] lg:text-5xl leading-[118%]  tracking-wide'>
                        <h1>Projects</h1>
                    </div>
                </div>
                <div className=' grid grid-cols-2 lg:gap-10  my-[2rem]'>
                    <div className="relative group">
                        <FeaturedProjectContainer heading='ArtMint' description='Your Gateway to future Digital Art'>
                            <Image src={NFTImg} alt="Img" />
                        </FeaturedProjectContainer >
                    </div>


                    <div className='relative bottom-[86px]'>
                        <FeaturedProjectContainer heading='Lexiverse' description='Interactive Dictionary App'>
                            <Image src={DictionaryImg} alt="Img" />
                        </FeaturedProjectContainer >
                    </div>

                    <div className='pt-4'>
                        <FeaturedProjectContainer heading='Lolo Rosso' description='Watch Connoissuer E-Commerce'>
                            <Image src={WatchImg} alt="Img" />
                        </FeaturedProjectContainer >
                    </div>
                    <div className='relative bottom-[70px]'>
                        <FeaturedProjectContainer heading='Coupl.' description='Saving and Investing for Couples'>
                            <Image src={DatingImg} alt="Img" />
                        </FeaturedProjectContainer >
                    </div>

                    <div>

                    </div>

                    <div className='relative bottom-[70px] pl-2'>
                        <div className='font-normal text-[0.8rem] leading-[16px]  tracking-[0.05em]'>
                            Wait, there's more
                        </div>
                        <div className='mt-4'>
                            <button className='border-2 border-Orange-2 py-[12px] px-[2.35rem] rounded-xl font-bold text-[0.8rem] leading-6 flex items-center text-center tracking-wider'>See More</button>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default FeaturedProjects