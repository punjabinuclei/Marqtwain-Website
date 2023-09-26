import React, { useEffect } from 'react';
import styles from './SpotlightAnimation.module.css';

const SpotlightAnimation = () => {
    useEffect(() => {
        const spotlightSize = 400;

        document.addEventListener('mousemove', function (event: MouseEvent) {
            if (window.event) {
                event = window.event as MouseEvent;
            }

            let titleRect = document.querySelector(`.${styles.title}`)?.getBoundingClientRect();

            if (titleRect) {
                let mouseX = event.clientX;
                let spotlightX = mouseX - (spotlightSize / 2) - titleRect.left;
                let mouseY = event.clientY;
                let spotlightY = mouseY - (spotlightSize / 2) - titleRect.top;

                const element = document.querySelector(`.${styles.title}`) as HTMLElement;

                if (element) {
                    element.style.backgroundPosition = `${spotlightX}px ${spotlightY}px`;
                }
            }
        }, false);

        return () => {
            document.removeEventListener('mousemove', () => { });
        };
    }, []);

    return (
        <main className={styles.titleWrapper}>
            <h1 className={styles.title}>Our Projects</h1>
        </main>
    );
};

export default SpotlightAnimation;
