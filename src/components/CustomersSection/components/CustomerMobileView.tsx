import React from 'react'
import Image from 'next/image'

import StratzyMobile from "../../../assets/StratzyLogoMobile.svg"
import CouplLogoMobile from "../../../assets/CouplLogoMobile.svg"
import MulyaLogoMobile from "../../../assets/MulyaLogoMobile.svg"
import NauvelisMobile from "../../../assets/NauvelisMobile.svg"
import YachtMobile from "../../../assets/YachtMobile.svg"


import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
});

const CustomerMobileView = () => {
    return (
        <div className='mt-[29px]'>
            <div>
                <OwlCarousel
                    loop={true}
                    items={7}
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
                            items: 3,
                        },
                        600: {
                            items: 3,
                        },
                        1000: {
                            items: 3,
                        },

                    }}
                    marginHeight={50}>

                    <div className='item'>
                        <Image src={StratzyMobile} alt='Stratzy' />
                    </div>
                    <div className='item'>
                        <Image src={CouplLogoMobile} alt='CouplLogo' />
                    </div>
                    <div className='item relative top-2'>
                        <Image src={YachtMobile} alt='Yacht' />
                    </div>
                    <div className='item'>
                        <Image src={NauvelisMobile} alt='Nauvelis' />
                    </div>
                    <div className='item'>
                        <Image src={MulyaLogoMobile} alt='MulyaLogo' />
                    </div>

                </OwlCarousel>



            </div>

        </div>
    )
}

export default CustomerMobileView