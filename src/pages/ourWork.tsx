import React from 'react'
import Navbar from '@/components/Navbar/Navbar'
import Header from "@/components/ProjectsPage/Header/Header"
import ProjectTabs from '@/components/ProjectsPage/ProjectTabs/ProjectTabs'
import FooterMobile from '@/components/Footer/FooterMobile'
import Footer from '@/components/Footer/Footer'

const ourWork = () => {
    return (
        <div>
            <div className='projectsPageBg'>
                <Navbar />
                <Header />
                <div className='mt-[96px]'>
                    <ProjectTabs />
                </div>
            </div>
            <div>
                <div className='hidden lg:block'>
                    <Footer />
                </div>
                <div className='lg:hidden'>
                    <FooterMobile />
                </div>
            </div>
        </div>
    )
}

export default ourWork