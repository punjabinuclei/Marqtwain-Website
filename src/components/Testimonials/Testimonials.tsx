import dynamic from 'next/dynamic';
import TestimonialsContainer from './components/TestimonialsContainer';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';


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


    const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [testimonialsData.length]);

    // Get the current testimonial based on the currentTestimonialIndex
    const currentTestimonial = testimonialsData[currentTestimonialIndex];


    return (
        <div className="testimonial-illustration h-full">
            <h1 className="text-white font-semibold text-[1.3rem] lg:text-5xl text-center pt-[106px]">
                Our customers can’t imagine <br />life without Marq Twinn
            </h1>

            <div >
                <div className="py-[56px] item flex justify-center">
                    <TestimonialsContainer {...currentTestimonial} />
                </div>
            </div>

        </div>
    );
};

export default Testimonials;
