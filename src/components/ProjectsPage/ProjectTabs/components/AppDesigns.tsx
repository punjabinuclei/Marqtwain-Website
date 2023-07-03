import React from 'react'
import Image from 'next/image'
import ProjectContainer from './ProjectContainer'

import Project1 from '../../../../assets/Watch.png'
import Project2 from '../../../../assets/Dictionary.png'
import Project3 from '../../../../assets/WealthCraft.png'
import Project4 from '../../../../assets/decrypt.png'
import Project5 from '../../../../assets/WineWala.png'
import Project6 from '../../../../assets/MicWala.png'
import Project7 from '../../../../assets/Gamewala.png'
// import Project8 from '../../../../assets/Projects/AppDesigns/Project8.svg'



const AppDesigns = () => {
    return (


        <div className='flex justify-center' >
            <div className='container grid grid-cols-2 gap-10 px-[160px] py-[80px]'>

                <ProjectContainer heading='Lolo Rosso' description='Watch Connoissuer E-Commerce Store'>
                    <Image src={Project1} alt='project1' />
                </ProjectContainer>
                <ProjectContainer heading='Lexiverse' description='Interactive Dictionary App'>
                    <Image src={Project2} alt='project1' />
                </ProjectContainer>
                <ProjectContainer heading='WealthCraft' description='Manage Finance Like A Pro!'>
                    <Image src={Project3} alt='project1' />
                </ProjectContainer>
                <ProjectContainer heading='De-Crypt' description='Smart Crypto-trading App'>
                    <Image src={Project4} alt='project1' />
                </ProjectContainer>
                <ProjectContainer heading='Vinotica' description='Unleash your wine journey'>
                    <Image src={Project5} alt='project1' />
                </ProjectContainer>
                <ProjectContainer heading='VoxCast' description='Gain insights with interactive animations'>
                    <Image src={Project6} alt='project1' />
                </ProjectContainer>
                <ProjectContainer heading='G-Vault' description='Master your games, master your destiny'>
                    <Image src={Project7} alt='project1' />
                </ProjectContainer>
                {/* <ProjectContainer heading='ArtMint' description='Your Gateway to future Digital Art'>
                    <Image src={Project8} alt='project1' />
                </ProjectContainer> */}



            </div>
        </div>

    )
}

export default AppDesigns