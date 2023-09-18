import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Bookminers from '../../assets/Bookminer.svg'
import CouplLogo from '../../assets/CouplLogo.svg'
import MulyaLogo from '../../assets/MulyaLogo.svg'
import Nauvelis from '../../assets/Nauvelis.svg'
import Tedx from '../../assets/Tedx.svg'
import Yacht from '../../assets/Yacht.svg'
import Stratzy from '../../assets/StratzyLogo.svg'

import CustomerMobileView from './components/CustomerMobileView'


const row1 = [
    { image: Stratzy },
    { image: CouplLogo },
    { image: MulyaLogo },
    { image: Tedx },
]

const row2 = [
    { image: Yacht },
    { image: Nauvelis },
    { image: Bookminers },
]


const CustomersSection = () => {
    return (
        <div className='relative mt-[5rem] mb-[6rem] lg:mt-0 lg:bottom-[100px] lg:h-fit lg:mb-[84px] lg:pl-[170px] lg:pr-[201px]' >
            <div>
                <div className='text-white text-[0.8rem] font-semibold lg:text-base leading-base flex 
                items-center justify-center tracking-widest lg:tracking-[0.25rem] uppercase'>
                    <p>
                        60+ pixel-perfect projects delivered
                        <span className='hidden lg:inline-block pl-1'> to happy customers</span>
                    </p>
                </div>
                <div className='hidden lg:block'>
                    <div className=' flex justify-around pt-[49px] pb-[54px]'>
                        {row1.map((row, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.2 }}>
                                <Image src={row.image} alt={`Row ${index}`} />
                            </motion.div>
                        ))}
                    </div>
                    <div className='flex justify-around mx-20'>
                        {row2.map((row, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.2 }}>
                                <Image src={row.image} alt={`Row ${index}`} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='lg:hidden'>
                <CustomerMobileView />
            </div>
        </div>
    )
}

export default CustomersSection