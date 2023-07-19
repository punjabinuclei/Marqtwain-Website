import React from 'react'
import Navbar from '@/components/Navbar/Navbar'
import Header from "@/components/ProjectsPage/Header/Header"
import ProjectTabs from '@/components/ProjectsPage/ProjectTabs/ProjectTabs'
import FooterMobile from '@/components/Footer/FooterMobile'
import Footer from '@/components/Footer/Footer'

import PageTransition from '@/components/PageTransition'
type ProjectsPageProps = {}
type ProjectsPageRef = React.ForwardedRef<HTMLDivElement>



const ourWork = (props: ProjectsPageProps, ref: ProjectsPageRef) => {
    return (
        <PageTransition ref={ref}>
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
        </PageTransition>
    )
}

export default ourWork