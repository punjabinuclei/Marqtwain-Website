import React from 'react';
import dynamic from 'next/dynamic';
import TestimonialsContainer from './components/TestimonialsContainer';

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
    ssr: false,
});

const testimonialsData = [
    {
        testimonial:
            '“Marqtwinn makes it easy for Strazy’s Growth team to get design done well and fast. Their work is intuitive and enables speed, and the dedicated team model ensures everyone understands our brand and day-to-day needs deeply, allowing for scale.”',
        name: 'Mohit Bhandari',
        org: 'Strazy',
        position: 'CEO & Founder',
    },
    {
        testimonial:
            '"Marqtwinn Creations transformed our website with their exceptional UI/UX design. The result is visually stunning and user-friendly, exceeding our expectations. Highly recommend their services!"',
        name: 'Srinivas Sarkar',
        org: 'Coupl',
        position: 'Founder',
    },
    {
        testimonial:
            '“The design work by Marqtwinn Creations brought our vision to life. Their UI/UX expertise improved engagement and conversions. They set a new standard for excellence.”',
        name: 'Saurabh Panjwani',
        org: 'Mulya',
        position: 'CEO & Founder',
    },
    {
        testimonial:
            '“Marqtwinn Creations enhanced our website with innovative UI/UX design. The intuitive navigation and modern look impressed our users, setting us apart from the competition. Grateful for their professionalism.”',
        name: 'Elan',
        org: 'MAUI',
        position: 'CEO & Founder',
    },
];

const Testimonials = () => {
    return (
        <div className="testimonial-illustration h-full">
            <h1 className="text-white font-semibold text-[1.3rem] lg:text-5xl text-center pt-[106px]">
                Our customers can’t imagine <br/>life without Marq Twinn
            </h1>
            <OwlCarousel
                className="relative bottom-2 lg:bottom-0 lg:pt-10"
                loop
                items={3}
                responsiveRefreshRate={5}
                autoplay
                autoplayTimeout={5000}
                smartSpeed={5000}
                autoplayHoverPause
                nav={false}
                dots={false}
                margin={30}
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
                marginHeight={50}
            >
                {testimonialsData.map((testimonial, index) => (
                    <div key={index} className="py-[56px] item flex justify-center">
                        <TestimonialsContainer {...testimonial} />
                    </div>
                ))}
            </OwlCarousel>
        </div>
    );
};

export default Testimonials;
