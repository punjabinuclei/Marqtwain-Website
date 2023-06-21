import React from 'react'
import Image from 'next/image'
import Project1 from '../../../../assets/Projects/WebDesigns/Project1.svg'
import Project2 from '../../../../assets/Projects/WebDesigns/Project2.svg'
import Project3 from '../../../../assets/Projects/WebDesigns/Project3.svg'
import Project4 from '../../../../assets/Projects/WebDesigns/Project4.svg'
import Project5 from '../../../../assets/Projects/WebDesigns/Project5.svg'
import Project6 from '../../../../assets/Projects/WebDesigns/Project6.svg'

import ProjectContainer from './ProjectContainer'





const WebDesigns = () => {
    return (


        <div className='flex justify-center' >
            <div className='container grid grid-cols-2 gap-10 px-[160px] py-[80px]'>



                <ProjectContainer heading='VIBZ' description='Modern Lifestyle Blogs'>
                    <Image src={Project1} alt='project1' />
                </ProjectContainer>
                <ProjectContainer heading='Mulya' description='Abating International Transactional Fees '>
                    <Image src={Project2} alt='project1' />
                </ProjectContainer>
                <ProjectContainer heading='Transai.' description='Revolutionizing Trade Finance '>
                    <Image src={Project3} alt='project1' />
                </ProjectContainer>
                <ProjectContainer heading='Coupl.' description='Saving & Investing for Couples'>
                    <Image src={Project4} alt='project1' />
                </ProjectContainer >
                <ProjectContainer heading='Stratzy' description='Invest Like The Ultra Rich Do!'>
                    <Image src={Project5} alt='project1' />
                </ProjectContainer>
                <ProjectContainer heading='muse.' description='Musing sounds to enhance listening'>
                    <Image src={Project6} alt='project1' />
                </ProjectContainer>


            </div>
        </div>

    )
}

export default WebDesigns