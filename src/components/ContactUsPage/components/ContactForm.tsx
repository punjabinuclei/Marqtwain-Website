import React, { useState } from 'react';

const ContactForm = () => {

    // Form 
    const [contactData, setContactData] = useState({
        name: '',
        email: '',
        message: '',
        phone: ''
    });


    let name, value: any;
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        name = event.target.name;
        value = event.target.value;
        setContactData({ ...contactData, [name]: value });
    }






    const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        const [name, email, message, phone] = [contactData.name, contactData.email, contactData.message, contactData.phone];
        let res = await fetch("https://marqtwinn-website-default-rtdb.firebaseio.com/Contact.json", {
            method: 'POST',
            headers: {
                'Content-Type': 'website/json',

            },
            body: JSON.stringify({
                name,
                email,
                message,
                phone
            })
        })
        if (res)
            alert('Data submitted')
        else
            alert('Please fill the form')
    }





    // Input colour
    const [isInputFocused, setInputFocused] = useState(false);

    const handleInputFocus = () => {
        setInputFocused(true);
    };

    const handleInputBlur = () => {
        setInputFocused(false);
    };

    return (
        <div>
            {/* Desktop---------------------------------------- */}
            <div className="hidden lg:block">
                <form action="">
                    <div className='mb-[0.94rem]'>
                        <h1 className='text-[1rem] text-white'>I’m interested in</h1>
                    </div>

                    <div className='flex'>
                        <div className='mr-2'>
                            <button className='border border-Gray-6 px-[1.125rem] py-[0.425rem]
                        rounded-[0.75rem] text-Gray-7 hover:bg-Theme-Blue-2 hover:border-Theme-Blue-2
                        hover:text-white'>User Research</button>
                        </div>

                        <div className='mr-2'>
                            <button className='border border-Gray-6 px-[1.125rem] py-[0.425rem]
                        rounded-[0.75rem] text-Gray-7 hover:bg-Theme-Blue-2 hover:border-Theme-Blue-2
                        hover:text-white'>Web Design</button>
                        </div>

                        <div>
                            <button className='border border-Gray-6 px-[1.125rem] py-[0.425rem]
                        rounded-[0.75rem] text-Gray-7 hover:bg-Theme-Blue-2 hover:border-Theme-Blue-2
                        hover:text-white'>Design Consultation</button>
                        </div>

                    </div>

                    <div className='flex mt-[0.69rem]'>
                        <div className='mr-2'>
                            <button className='border border-Gray-6 px-[1.125rem] py-[0.425rem]
                        rounded-[0.75rem] text-Gray-7 hover:bg-Theme-Blue-2 hover:border-Theme-Blue-2
                        hover:text-white'>UI/UX Design</button>
                        </div>

                        <div>
                            <button className='border border-Gray-6 px-[1.125rem] py-[0.425rem]
                        rounded-[0.75rem] text-Gray-7 hover:bg-Theme-Blue-2 hover:border-Theme-Blue-2
                        hover:text-white'>Other</button>
                        </div>
                    </div>



                    <div className="flex mt-[4.5rem]">
                        <div>
                            <input
                                name='name'
                                value={contactData.name}
                                onChange={handleChange}
                                style={{ outline: 'none' }}
                                type="text"
                                placeholder="Your Name"
                                className={`pr-12 pb-2 bg-transparent border-b ${isInputFocused ? 'border-white' : 'border-Gray-5'
                                    } text-Gray-5::placeholder text-white mr-[1.5rem] relative`}
                                onFocus={handleInputFocus}
                                onBlur={handleInputBlur}
                            />
                        </div>
                        <div>
                            <input
                                name='email'
                                value={contactData.email}
                                onChange={handleChange}
                                autoComplete='off'
                                style={{ outline: 'none' }}
                                type="text"
                                placeholder="Email"
                                className={`bg-transparent border-b ${isInputFocused ? 'border-white' : 'border-Gray-5'
                                    } text-Gray-5::placeholder text-white pr-12 pb-2`}
                                onFocus={handleInputFocus}
                                onBlur={handleInputBlur}
                            />
                        </div>
                    </div>

                    <div className="">
                        <input
                            name='message'
                            value={contactData.message}
                            onChange={handleChange}
                            autoComplete='off'
                            style={{ outline: 'none' }}
                            type="text"
                            placeholder="Tell us about your project"
                            className={`bg-transparent border-b ${isInputFocused ? 'border-white' : 'border-Gray-5'
                                } text-Gray-5::placeholder text-white w-full mt-[3rem] pb-2`}
                            onFocus={handleInputFocus}
                            onBlur={handleInputBlur}
                        />
                        <input
                            name='phone'
                            value={contactData.phone}
                            onChange={handleChange}
                            autoComplete='off'
                            style={{ outline: 'none' }}
                            type="text"
                            placeholder="Phone Number"
                            className={`bg-transparent border-b ${isInputFocused ? 'border-white' : 'border-Gray-5'
                                } text-Gray-5::placeholder text-white mt-[3rem] pb-2`}
                            onFocus={handleInputFocus}
                            onBlur={handleInputBlur}
                        />
                    </div>

                    <div className='mt-[3rem]'>
                        <button type='submit' onClick={handleSubmit} className='px-14 py-3.5 text-[1rem] font-semibold text-white bg-Orange-2 rounded-xl '>Shoot Connection</button>
                    </div>
                </form>
            </div>






            {/* Mobile Version--------------------------------------------- */}
            <div>
                <div className="lg:hidden">
                    <form action="">
                        <div className='mb-[0.94rem] mt-[2.9rem]'>
                            <h1 className='text-[1rem] text-white text-center'>I’m interested in</h1>
                        </div>

                        <div className='flex mb-[0.94rem] justify-center'>
                            <div className='mr-2'>
                                <button className='border border-Gray-6 px-[1.125rem] py-[0.425rem]
                        rounded-[0.75rem] text-Gray-7 hover:bg-Theme-Blue-2 hover:border-Theme-Blue-2
                        hover:text-white'>User Research</button>
                            </div>

                            <div className='mr-2'>
                                <button className='border border-Gray-6 px-[1.125rem] py-[0.425rem]
                        rounded-[0.75rem] text-Gray-7 hover:bg-Theme-Blue-2 hover:border-Theme-Blue-2
                        hover:text-white'>Web Design</button>
                            </div>
                        </div>
                        <div className='flex justify-center'>
                            <div>
                                <button className='border border-Gray-6 px-[1.125rem] py-[0.425rem]
                        rounded-[0.75rem] text-Gray-7 hover:bg-Theme-Blue-2 hover:border-Theme-Blue-2
                        hover:text-white'>Design Consultation</button>
                            </div>
                        </div>
                        <div className='flex mt-[0.69rem] justify-center'>
                            <div className='mr-2'>
                                <button className='border border-Gray-6 px-[1.125rem] py-[0.425rem]
                        rounded-[0.75rem] text-Gray-7 hover:bg-Theme-Blue-2 hover:border-Theme-Blue-2
                        hover:text-white'>UI/UX Design</button>
                            </div>

                            <div>
                                <button className='border border-Gray-6 px-[1.125rem] py-[0.425rem]
                        rounded-[0.75rem] text-Gray-7 hover:bg-Theme-Blue-2 hover:border-Theme-Blue-2
                        hover:text-white'>Other</button>
                            </div>
                        </div>



                        <div className="mt-[5.5rem]">
                            <div>
                                <input
                                    name='name'
                                    value={contactData.name}
                                    onChange={handleChange}
                                    style={{ outline: 'none' }}
                                    type="text"
                                    placeholder="Your Name"
                                    className={` pb-2 bg-transparent border-b-2 ${isInputFocused ? 'border-white' : 'border-Gray-5'
                                        } text-Gray-5::placeholder text-white mr-[1.5rem] relative w-full`}
                                    onFocus={handleInputFocus}
                                    onBlur={handleInputBlur}
                                />
                            </div>
                            <div className='mt-[2.5rem]'>
                                <input
                                    name='email'
                                    value={contactData.email}
                                    onChange={handleChange}
                                    autoComplete='off'
                                    style={{ outline: 'none' }}
                                    type="text"
                                    placeholder="Email"
                                    className={`bg-transparent border-b-2 ${isInputFocused ? 'border-white' : 'border-Gray-5'
                                        } text-Gray-5::placeholder text-white  pb-2 w-full`}
                                    onFocus={handleInputFocus}
                                    onBlur={handleInputBlur}
                                />
                            </div>
                        </div>

                        <div className="mt-[2.5rem]">
                            <input
                                name='phone'
                                value={contactData.phone}
                                onChange={handleChange}
                                autoComplete='off'
                                style={{ outline: 'none' }}
                                type="text"
                                placeholder="Phone Number"
                                className={`bg-transparent border-b-2 ${isInputFocused ? 'border-white' : 'border-Gray-5'
                                    } text-Gray-5::placeholder text-white  pb-2 w-full`}
                                onFocus={handleInputFocus}
                                onBlur={handleInputBlur}
                            />
                            <input
                                name='message'
                                value={contactData.message}
                                onChange={handleChange}
                                autoComplete='off'
                                style={{ outline: 'none' }}
                                type="text"
                                placeholder="Tell us about your project"
                                className={`bg-transparent border-b-2 ${isInputFocused ? 'border-white' : 'border-Gray-5'
                                    } text-Gray-5::placeholder text-white w-full mt-[3rem] pb-2`}
                                onFocus={handleInputFocus}
                                onBlur={handleInputBlur}
                            />

                        </div>

                        <div className='mt-[3rem] flex justify-center mb-[3.19rem]'>
                            <button type='submit' onClick={handleSubmit} className='px-14 py-3.5 text-[1rem] font-semibold text-white bg-Orange-2 rounded-xl '>Shoot Connection</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default ContactForm;
