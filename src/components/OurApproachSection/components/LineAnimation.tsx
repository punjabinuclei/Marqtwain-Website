import { useEffect, useState } from 'react';

const LineAnimation = () => {
    const [currentPartIndex, setCurrentPartIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPartIndex((prevIndex) => (prevIndex + 1) % 4);
        }, 4000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className="line">
            <div className={`part ${currentPartIndex === 0 ? 'blue' : ''}`} />
            <div className={`part ${currentPartIndex === 1 ? 'blue' : ''}`} />
            <div className={`part ${currentPartIndex === 2 ? 'blue' : ''}`} />
            <div className={`part ${currentPartIndex === 3 ? 'blue' : ''}`} />
        </div>
    );
};

export default LineAnimation;
