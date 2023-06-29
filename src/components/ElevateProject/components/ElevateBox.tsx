import React from 'react'


interface Props {
    digits: string;
    info: string;
    info2: string;
    definition: string;
}


const ElevateBox = ({ digits, info, definition, info2 }: Props) => {
    return (
        <div className='py-2'>
            <div className='flex lg:justify-between justify-center px-[1.88rem] '>
                <div className='w-[7rem] h-[5.2rem] bg-gradient-to-t from-[#272740] to-[#3f4673] opacity-95 rounded-[17px] lg:w-[192px] lg:h-[138px]'>
                    <div className='font-semibold text-white text-[1rem] lg:text-[28px] leading-28 tracking-normal text-center relative top-5 lg:top-7'>
                        {digits}
                    </div>
                    <div className='font-normal text-white text-[0.8rem] lg:text-[21px] leading-[21px] text-center relative top-4 lg:top-7'>
                        {info}<span className='relative bottom-2 lg:bottom-0'><br />{info2}</span>
                    </div>
                </div >
                <div className='w-[15rem] lg:w-[364px] font-normal text-white text-[0.9rem] lg:text-[21px] leading-6 flex items-center pl-[21px] tracking-tighter'>
                    {definition}
                </div>
            </div>
        </div>
    )
}

export default ElevateBox