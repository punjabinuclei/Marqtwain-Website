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
            <div className='flex justify-between'>
                <div className='bg-gradient-to-t from-[#272740] to-[#3f4673] opacity-95 rounded-[17px] w-[192px] h-[138px]'>
                    <div className='font-semibold text-white text-[28px] leading-28 tracking-normal text-center relative top-7'>
                        {digits}
                    </div>
                    <div className='font-normal text-white text-[21px] leading-[21px] text-center relative top-7'>
                        {info} <br /> {info2}
                    </div>
                </div >
                <div className='w-[364px] font-normal text-white text-[20px] leading-6 flex items-center pl-[41px] tracking-tighter'>
                    {definition}
                </div>
            </div>
        </div>
    )
}

export default ElevateBox