import React from 'react'
import Image from 'next/image'
import DatingImg from '../../assets/Projects/dating.svg'
import DictionaryImg from '../../assets/Projects/Dictionary.svg'
import NFTImg from '../../assets/Projects/NFT.svg'
import WatchImg from '../../assets/Projects/Watch.svg'


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
                <div className='container grid grid-cols-2 gap-10 '>
                    <div className="relative group">
                        <Image src={NFTImg} alt="Img" />

                        <div className="absolute inset-0  bg-black bg-opacity-70  font-bold opacity-0 group-hover:opacity-100 transition-opacity hover:rounded-xl">
                            <div className='absolute bottom-20 left-10'>
                                Lolo Rosso
                            </div>
                            <div className='absolute bottom-14 left-10'>
                                Watch Connoissuer E-Commerce Store
                            </div>
                        </div>
                    </div>


                    <div className='relative bottom-[179px]'>
                        <Image src={DictionaryImg} alt='Img' />
                    </div>

                    <div>
                        <Image src={WatchImg} alt='Img' />
                    </div>
                    <div className='relative bottom-[179px]'>
                        <Image src={DatingImg} alt='Img' />
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