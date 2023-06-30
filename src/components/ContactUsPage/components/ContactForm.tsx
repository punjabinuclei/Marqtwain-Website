import React, { useState } from 'react';

const ContactForm = () => {
    const [isInputFocused, setInputFocused] = useState(false);

    const handleInputFocus = () => {
        setInputFocused(true);
    };

    const handleInputBlur = () => {
        setInputFocused(false);
    };

    return (
        <div className="ContactPageBg">
            <form action="">


                <div className='mb-[0.94rem]'>
                    <h1 className='text-[1rem] text-white'>I’m interested in</h1>
                </div>

                <div className='flex'>
                    <div className='mr-2'>
                        <button className='border-2 border-Gray-6 px-[1.125rem] py-[0.425rem]
                        rounded-[0.75rem] text-Gray-7 hover:bg-Theme-Blue-2 hover:border-Theme-Blue-2
                        hover:text-white'>User Research</button>
                    </div>

                    <div className='mr-2'>
                        <button className='border-2 border-Gray-6 px-[1.125rem] py-[0.425rem]
                        rounded-[0.75rem] text-Gray-7 hover:bg-Theme-Blue-2 hover:border-Theme-Blue-2
                        hover:text-white'>Web Design</button>
                    </div>

                    <div>
                        <button className='border-2 border-Gray-6 px-[1.125rem] py-[0.425rem]
                        rounded-[0.75rem] text-Gray-7 hover:bg-Theme-Blue-2 hover:border-Theme-Blue-2
                        hover:text-white'>Design Consultation</button>
                    </div>

                </div>

                <div className='flex mt-[0.69rem]'>
                    <div className='mr-2'>
                        <button className='border-2 border-Gray-6 px-[1.125rem] py-[0.425rem]
                        rounded-[0.75rem] text-Gray-7 hover:bg-Theme-Blue-2 hover:border-Theme-Blue-2
                        hover:text-white'>UI/UX Design</button>
                    </div>

                    <div>
                        <button className='border-2 border-Gray-6 px-[1.125rem] py-[0.425rem]
                        rounded-[0.75rem] text-Gray-7 hover:bg-Theme-Blue-2 hover:border-Theme-Blue-2
                        hover:text-white'>Other</button>
                    </div>
                </div>



                <div className="flex mt-[4.5rem]">
                    <div>
                        <input
                            style={{ outline: 'none' }}
                            type="text"
                            placeholder="Your Name"
                            className={`pr-12 pb-2 bg-transparent border-b-2 ${isInputFocused ? 'border-white' : 'border-Gray-5'
                                } text-Gray-5::placeholder text-white mr-[1.5rem] relative`}
                            onFocus={handleInputFocus}
                            onBlur={handleInputBlur}
                        />
                    </div>
                    <div>
                        <input
                            style={{ outline: 'none' }}
                            type="text"
                            placeholder="Email"
                            className={`bg-transparent border-b-2 ${isInputFocused ? 'border-white' : 'border-Gray-5'
                                } text-Gray-5::placeholder text-white pr-12 pb-2`}
                            onFocus={handleInputFocus}
                            onBlur={handleInputBlur}
                        />
                    </div>
                </div>

                <div className="">
                    <input
                        style={{ outline: 'none' }}
                        type="text"
                        placeholder="Tell us about your project"
                        className={`bg-transparent border-b-2 ${isInputFocused ? 'border-white' : 'border-Gray-5'
                            } text-Gray-5::placeholder text-white w-full mt-[3rem] pb-2`}
                        onFocus={handleInputFocus}
                        onBlur={handleInputBlur}
                    />
                    <input
                        style={{ outline: 'none' }}
                        type="text"
                        placeholder="Phone Number"
                        className={`bg-transparent border-b-2 ${isInputFocused ? 'border-white' : 'border-Gray-5'
                            } text-Gray-5::placeholder text-white mt-[3rem] pb-2`}
                        onFocus={handleInputFocus}
                        onBlur={handleInputBlur}
                    />
                </div>

                <div className='mt-[3rem]'>
                    <button className='px-14 py-3.5 text-[1rem] font-semibold text-white bg-Orange-2 rounded-xl '>Shoot Connection</button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
