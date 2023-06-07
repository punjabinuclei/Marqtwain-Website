import React from 'react'
import Navbar from '@/components/Navbar/Navbar'
import Header from "@/components/ProjectsPage/Header/Header"
import ProjectTabs from '@/components/ProjectsPage/ProjectTabs/ProjectTabs'
import Footer from '@/components/Footer/Footer'

const ourWork = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <div className='mt-[96px]'>
                <ProjectTabs />
            </div>
            <Footer />
        </div>
    )
}

export default ourWork