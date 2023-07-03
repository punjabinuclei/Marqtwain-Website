import React from 'react'
import Image from 'next/image'
import Project1 from '../../../../assets/Vibz.png'
import Project2 from '../../../../assets/Mulya.png'
import Project3 from '../../../../assets/TraedAi.png'
import Project4 from '../../../../assets/Coupl.png'
import Project5 from '../../../../assets/Stratzy.png'
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
                <ProjectContainer heading='Traed.ai' description='Revolutionizing Trade Finance '>
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