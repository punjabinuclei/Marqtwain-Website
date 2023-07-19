import React, { forwardRef, useMemo } from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'

type PageTransitionProps = HTMLMotionProps<'div'>
type PageTransitionRef = React.ForwardedRef<HTMLDivElement>

function PageTransition({ children, ...rest }: PageTransitionProps, ref: PageTransitionRef) {
    const onTheRight = {opacity:0, y: 15 }
    const inTheCenter = { opacity:1, y:0 }
    const onTheLeft = {opacity:0, y:15 }

    const transition = { duration: 0.4, ease: 'easeInOut' }



    return (
        <motion.div
            ref={ref}
            initial={onTheRight}
            animate={inTheCenter}
            exit={onTheLeft}
            transition={transition}
            {...rest}
        >
            {children}
        </motion.div>
    )
}

export default forwardRef(PageTransition)
