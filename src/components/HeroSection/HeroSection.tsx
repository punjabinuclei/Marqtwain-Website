import React, { useState } from 'react';
import { useRouter } from 'next/router';
import 'animate.css'

import { motion } from 'framer-motion';


const HeroSection = () => {
    const router = useRouter();

    const [email, setEmail] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log('Email:', email);
        setEmail('');
    };

    return (

        <div
            className="lg:h-screen mt-[1rem] px-[1.75rem] lg:px-0 lg:mt-[6.25rem] lg:pl-[10.625rem] lg:pr-[12.5625rem] overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, ease: 'easeInOut', duration: 0.5 }}
                className="text-white lg:h-full leading-10">
                <div className="text-[1.9375rem] lg:text-[3.125rem] font-bold">
                    Crafting<span className='lg:hidden'><br /></span>Products for
                    <span className="relative top  lg:top-4">
                        <br />
                        the Next-Gen<span className='lg:hidden'><br /></span> User Experience
                    </span>
                </div>
                <div className="hidden lg:block text-[1.188rem] leading-7 pt-10">
                    Our team of experts combines research, strategy, and design to deliver
                    <span>
                        <br />
                        innovative solutions that meet the unique needs of your business
                    </span>
                </div>
                <div className='relative bottom-1 lg:hidden text-[0.8rem] text-Gray-3 pl-1'>
                    <h1>Reliable. Scalable. Affordable</h1>
                </div>
                <div className="mt-[7rem] lg:mt-6">
                    <button
                        onClick={() => router.push('/contactUs')}
                        className="px-6 py-3.5 text-sm bg-Orange rounded-xl w-full lg:w-[10rem] ">
                        Get Started
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

export default HeroSection;
