import React from 'react'
import Image from 'next/image'
import Bookminers from '../../assets/Bookminer.svg'
import CouplLogo from '../../assets/CouplLogo.svg'
import MulyaLogo from '../../assets/MulyaLogo.svg'
import Nauvelis from '../../assets/Nauvelis.svg'
import Tedx from '../../assets/Tedx.svg'
import Yacht from '../../assets/Yacht.svg'
import Stratzy from '../../assets/StratzyLogo.svg'

const CustomersSection = () => {
    return (
        <div className='h-fit mb-[84px] pl-[170px] pr-[201px]' >
            <div>
                <div className='text-white font-semibold text-base leading-base flex items-center justify-center tracking-widest uppercase'>
                    <p>
                        60+ pixel-perfect projects delivered to happy customers
                    </p>
                </div>
                <div className='flex justify-around pt-[49px] pb-[54px]'>
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
        </div>
    )
}

export default CustomersSection