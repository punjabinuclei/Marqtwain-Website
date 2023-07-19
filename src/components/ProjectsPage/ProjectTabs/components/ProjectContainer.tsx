import React from 'react'
import { motion } from "framer-motion"

interface Props {
    children: React.ReactNode;
    heading: string;
    description: string;
}


const ProjectContainer = ({ children, heading, description }: Props) => {
    return (

        <motion.div
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.3 }}
            className="mt-6 mx-4 lg:mt-0 lg:mx-0">
            <div className="content">
                <div className="content-overlay"></div>
                {children}
                <div className="content-details fadeIn-bottom fadeIn-left">
                    <h3 className='font-semibold text-[25px] leading-16 flex items-center text-center tracking-tighter text-white'>{heading}</h3>
                    <p className='text-16 leading-16 flex items-center tracking-tighter text-white'>{description}</p>
                </div>
            </div>
        </motion.div>


    )
}

export default ProjectContainer