import React from 'react'
import Image from 'next/image'
import Mohit from "../../assets/Testimonials/MohitBhandari.svg"
import TestimonialsContainer from './components/TestimonialsContainer'


import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
});


const Testimonials = () => {

    return (
        <div className='testimonial-illustration'>
            <div className='h-full'>
                <div className=''>
                    <div>
                        <h1 className='text-white font-semibold text-5xl text-center pt-[106px]'>
                            Our customers can’t imagine<br /> life without Marq Twinn</h1>
                    </div>
                    <div>
                        <OwlCarousel
                            className="pt-16"
                            loop={true}
                            items={3}
                            responsiveRefreshRate={5}
                            autoplay={true}
                            autoplayTimeout={3000}
                            smartSpeed={3000}
                            autoplayHoverPause={true}
                            nav={false}
                            dots={false}
                            margin={30}
                            // left to right

                            responsive={{
                                0: {
                                    items: 1,
                                },
                                600: {
                                    items: 1,
                                },
                                1000: {
                                    items: 1,
                                },
                                1200: {
                                    margin: 40,
                                    items: 1,
                                },
                                1600: {
                                    items: 1,
                                },
                                1800: {

                                    items: 1,
                                },
                            }}
                            marginHeight={50}>

                            <div className='py-[56px] item'>
                                <TestimonialsContainer testimonial='“Marqtwinn makes it easy for Strazy’s Growth team 
                                to get design done well and fast. Their work is intuitive and enables speed, 
                                and the dedicated team model ensures everyone understands our brand and day-to-day
                                needs deeply, allowing for scale.”'
                                name='Mohit Bhandari' org='Strazy' position='CEO & Founder' />
                            </div>

                        </OwlCarousel>



                    </div>






                </div>
            </div>
        </div>
    );
}

export default Testimonials