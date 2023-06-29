import React from 'react'

interface Props {
    children: React.ReactNode
}

const NavbarContainer = ({ children }: Props) => {
    return (
        <div className=' py-[48px] flex justify-between px-[1.875rem] lg:pl-[170px] lg:pr-[201px]'>
            {children}
        </div>
    )
}

export default NavbarContainer