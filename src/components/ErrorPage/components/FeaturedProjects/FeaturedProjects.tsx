import React from 'react'
import Image from 'next/image'
import Rectangle from "../../../../assets/Rectangle.svg"
import ProjectAnimation from './components/ProjectsAnimation'
import { useRouter } from 'next/router'

const FeaturedProjects = () => {
    const router = useRouter();
    return (
        <div className='featuredProjectBg relative top-10'>
            <div className='py-20 mt-[6.56rem] ml-[10rem] flex justify-between '>
                <div>
                    <div>
                        <Image src={Rectangle} className='mb-[1.25rem]' alt="Rectangle" />
                        <h1 className='text-[3.375rem] text-white'>Featured Projects</h1>
                        <p className='text-[#5E617D] text-[1.3125rem]'>World-Class Products, crafted by<br />Marqtwinn</p>
                    </div>
                    <div className='flex mt-[3.56rem]'>
                        <button
                            onClick={() => router.push('/ourWork')}
                            className='text-[1rem] text-[#FF7337]'>See More</button>
                        <button
                            onClick={() => router.push('/')}
                            className='ml-[3rem] rounded-[0.75rem] bg-[#FF7337] text-white font-semibold text-[1rem] px-[1.8rem] py-[0.7rem]'>Home</button>
                    </div>
                </div>
                <div className='w-[30rem] h-[30rem] mr-[6rem]'>
                    <ProjectAnimation />
                </div>
            </div>
        </div>
    )
}

export default FeaturedProjects