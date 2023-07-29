import React from 'react'
import Navbar from '../Navbar/Navbar'
import ErrorImage from '../../assets/ErrorImg.svg'
import Image from 'next/image'
import Footer from '../Footer/Footer'
import FeatureProjects from '../ErrorPage/components/FeaturedProjects/FeaturedProjects'

const ErrorPageComponent = () => {
    return (
        <>
            <Navbar />
            <div className='mt-[3.8rem]'>
                <div>
                    <div className='text-center'>
                        <h1 className='font-black text-[2.375rem] text-white'>Oops!</h1>
                    </div>
                    <div className='mt-[2.38rem] flex justify-center'>
                        <Image src={ErrorImage} alt='errorImage' />
                    </div>
                    <div className='mt-[2.47rem] w-[38rem] flex mx-auto '>
                        <p className='text-[#9698A2] text-[1.5rem] font-medium text-center leading-7'>We’re sorry. the page you requested could no be found
                            Please go back to the home page</p>
                    </div>
                </div>
            </div>
            <FeatureProjects/>
                <Footer />
        </>
    )
}

export default ErrorPageComponent