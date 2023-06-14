import React from 'react'
import Image from 'next/image'
import Project1 from '../../../../assets/Projects/AppDesigns/Project1.svg'
import Project2 from '../../../../assets/Projects/AppDesigns/Project2.svg'
import Project3 from '../../../../assets/Projects/AppDesigns/Project3.svg'
import Project4 from '../../../../assets/Projects/AppDesigns/Project4.svg'
import Project5 from '../../../../assets/Projects/AppDesigns/Project5.svg'
import Project6 from '../../../../assets/Projects/AppDesigns/Project6.svg'
import Project7 from '../../../../assets/Projects/AppDesigns/Project7.svg'
import Project8 from '../../../../assets/Projects/AppDesigns/Project8.svg'



const AppDesigns = () => {
    return (


        <div className='flex justify-center' >
            <div className='container grid grid-cols-2 gap-6 px-[180px] py-[80px]'>

                <div>
                    <Image src={Project1} alt='project1' />
                </div>
                <div>
                    <Image src={Project2} alt='project1' />
                </div>
                <div>
                    <Image src={Project3} alt='project1' />
                </div>
                <div>
                    <Image src={Project4} alt='project1' />
                </div>
                <div>
                    <Image src={Project5} alt='project1' />
                </div>
                <div>
                    <Image src={Project6} alt='project1' />
                </div>
                <div>
                    <Image src={Project7} alt='project1' />
                </div>
                <div>
                    <Image src={Project8} alt='project1' />
                </div>



            </div>
        </div>

    )
}

export default AppDesigns