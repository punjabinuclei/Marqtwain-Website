import React, { useState } from 'react';
import { useRouter } from 'next/router';


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

        <div className="h-screen mt-[1rem] pl-[1.75rem] lg:mt-[6.25rem] lg:pl-[10.625rem] lg:pr-[12.5625rem]">
            <div className="text-white lg:h-full leading-10">
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
                {/* <div className="mt-[7rem] lg:mt-8">
                    <form onSubmit={handleSubmit}>
                        <input
                            type="email"
                            style={{ outline: 'none' }}
                            placeholder="Your Work Email"
                            className="  rounded-xl lg:w-[251.66px] text-sm  py-3 pl-2 hover:border-2 hover:border-Border text-black"
                            value={email}
                            onChange={handleInputChange}
                        />
                        <button
                            onClick={() => router.push('/contactUs')}
                            className="ml-2 px-6 py-3.5 text-sm bg-Orange rounded-xl">
                            Get Started
                        </button>
                    </form>
                </div> */}
            </div>
        </div>
    );
};

export default HeroSection;
