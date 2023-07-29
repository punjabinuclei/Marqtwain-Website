import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image'
import Mulya from '../../../../../assets/Mulya.png'
import DictionaryImg from '../../../../../assets/Dictionary.png'
import NFTImg from '../../../../../assets/NFT.png'
import WatchImg from '../../../../../assets/Watch.png'


const Projects = [
    { image: Mulya },
    { image: DictionaryImg },
    { image: NFTImg },
    { image: WatchImg },
];

const Testimonials = () => {


    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % Projects.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [Projects.length]);

    const currentImage = Projects[currentImageIndex];


    return (
        <div className="">
            <div >
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="">
                    <Image src={currentImage.image} alt='Image' />
                </motion.div>
            </div>
        </div>
    );
};

export default Testimonials;
