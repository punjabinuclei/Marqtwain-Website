import React from 'react';
import NavbarContainer from './components/NavbarContainer/NavbarContainer';
import NavLogo from '../../assets/MarqtawinLogo.svg';
import NavLogo2 from '../../assets/LogoMobile.svg';
import { useRouter } from 'next/router';
import Image from 'next/image';

import { motion } from 'framer-motion';

const variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            delay: 1,
            staggerChildren: 0.5
        }
    },
}



const Navbar = () => {
    const router = useRouter();
    return (
        <motion.div
            variants={variants}
            initial='hidden'
            animate='show'
        >
            <NavbarContainer>
                <div className='hidden lg:block'>
                    <a href="/" onClick={(e) => { e.preventDefault(); router.push('/'); }}>
                        <Image src={NavLogo} alt='NavLogo' />
                    </a>
                </div>
                <div className='lg:hidden'>
                    <a href="/" onClick={(e) => { e.preventDefault(); router.push('/'); }}>
                        <Image src={NavLogo2} alt='NavLogo' />
                    </a>
                </div>
                <div className='flex'>
                    <div onClick={() => router.push('/ourWork')} className='hidden lg:block'>
                        <button className='text-[0.875rem] font-semibold py-3.5 px-7 leading-4 text-Theme-White pr-11'>
                            Our Work
                        </button>
                    </div>
                    <div>
                        <button
                            onClick={() => router.push('/contactUs')}
                            className='bg-Orange text-[0.64rem] px-[1rem] py-[0.5rem] relative bottom-2 lg:bottom-0 lg:py-3.5 lg:px-7 lg:text-[0.875rem] leading-4 rounded-xl text-white'
                        >
                            Contact Us
                        </button>
                    </div>
                </div>
            </NavbarContainer>
        </motion.div>
    );
};

export default Navbar;
