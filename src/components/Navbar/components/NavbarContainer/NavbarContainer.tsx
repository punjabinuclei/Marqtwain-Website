import React from 'react'

interface Props {
    children: React.ReactNode
}

const NavbarContainer = ({ children }: Props) => {
    return (
        <div className=' py-[48px] flex justify-between pl-[170px] pr-[201px]'>
            {children}
        </div>
    )
}

export default NavbarContainer