import React from 'react'

interface MainContainerProps {
    children: React.ReactNode;
}

const MainContainer = ({children}:MainContainerProps) => {
    return (
        <div className='pl-[170px] pr-[201px] ' >
            {children}
        </div>
    )
}

export default MainContainer