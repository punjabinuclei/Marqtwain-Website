import React from 'react';
import NavbarContainer from './components/NavbarContainer/NavbarContainer';
import NavLogo from '../../assets/MarqtawinLogo.svg';
import { useRouter } from 'next/router';
import Image from 'next/image';

const Navbar = () => {
    const router = useRouter();
    return (
        <NavbarContainer>
            <div>
                <Image
                    src={NavLogo}
                    alt='NavLogo'
                />
            </div>
            <div className='flex' >
                <div onClick={() => router.push('/ourWork')} className='' >
                    <button className='text-sm font-semibold py-3.5 px-7 leading-4 text-Theme-White pr-11' >Our Work</button>
                </div>
                <div>
                    <button className='bg-Orange py-3.5 px-7 text-sm leading-4 rounded-xl text-white'>Contact Us</button>
                </div>
            </div>
        </NavbarContainer>
    );
};

export default Navbar;
