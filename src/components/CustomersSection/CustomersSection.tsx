import React from 'react'
import Image from 'next/image'
import Bookminers from '../../assets/Bookminer.svg'
import CouplLogo from '../../assets/CouplLogo.svg'
import MulyaLogo from '../../assets/MulyaLogo.svg'
import Nauvelis from '../../assets/Nauvelis.svg'
import Tedx from '../../assets/Tedx.svg'
import Yacht from '../../assets/Yacht.svg'
import Stratzy from '../../assets/StratzyLogo.svg'

import CustomerMobileView from './components/CustomerMobileView'


const CustomersSection = () => {
    return (
        <div className='relative bottom-[250px] lg:bottom-0 lg:h-fit lg:mb-[84px] lg:pl-[170px] lg:pr-[201px]' >
            <div>
                <div className='text-white text-[0.8rem] font-semibold lg:text-base leading-base flex items-center justify-center tracking-widest uppercase'>
                    <p>
                        60+ pixel-perfect projects delivered<span className='hidden lg:inline-block pl-1'> to happy customers</span>
                    </p>
                </div>
                <div className='hidden lg:block'>
                    <div className=' flex justify-around pt-[49px] pb-[54px]'>
                        <div>
                            <Image src={Stratzy} alt='Stratzy' />
                        </div>
                        <div>
                            <Image src={CouplLogo} alt='CouplLogo' />
                        </div>
                        <div>
                            <Image src={MulyaLogo} alt='MulyaLogo' />
                        </div>
                        <div>
                            <Image src={Tedx} alt='Tedx' />
                        </div>
                    </div>
                    <div className='flex justify-around'>
                        <div>
                            <Image src={Yacht} alt='Yacht' />
                        </div>
                        <div>
                            <Image src={Nauvelis} alt='Nauvelis' />
                        </div>
                        <div>
                            <Image src={Bookminers} alt='Bookminers' />
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
                <div className='lg:hidden'>
                    <CustomerMobileView />
                </div>
            </div>
        </div>
    )
}

export default CustomersSection