import React, { useState } from 'react';

const HeroSection = () => {
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
        <div className="h-screen mt-[100px] pl-[170px] pr-[201px]">
            <div className="text-white h-full leading-10">
                <div className="text-[50px] font-bold">
                    Crafting Products for
                    <span className="relative top-4">
                        <br />
                        the Next-Gen User Experience
                    </span>
                </div>
                <div className="text-[19px] leading-7 pt-10">
                    Our team of experts combines research, strategy, and design to deliver
                    <span>
                        <br />
                        innovative solutions that meet the unique needs of your business
                    </span>
                </div>
                <div className="pt-8">
                    <form onSubmit={handleSubmit}>
                        <input
                            type="email"
                            style={{ outline: 'none' }}
                            placeholder="Your Work Email"
                            className="rounded-xl w-[251.66px] text-sm py-3 pl-2 hover:border-2 hover:border-Border text-black"
                            value={email}
                            onChange={handleInputChange}
                        />
                        <button className="ml-2 px-6 py-3.5 text-sm bg-Orange rounded-xl">
                            Get Started
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
