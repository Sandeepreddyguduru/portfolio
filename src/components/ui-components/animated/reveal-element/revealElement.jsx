import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimate, useAnimation } from "framer-motion";

const RevealElement = ({ children, className }) => {
    const revealElRef = useRef(null);

    const isInView = useInView(revealElRef, {once: true});
    
    const revealElAnimateControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            revealElAnimateControls?.start('animate')
        }
    }, [isInView])
    
    return (
        <motion.div
            key={'revealEl'}
            className={className}
            ref={revealElRef}
            variants={{
                initial: { opacity: 0, lineHeight: '40px', y: 50 },
                animate: { opacity: 1, lineHeight: '24px', y: 0 }
            }}
            initial="initial"
            animate={revealElAnimateControls}
            transition={{ duration: 0.5, delay: 0.4, lineHeight: {duration: 0.6, delay: 0.6} }}
        >
            {children}
        </motion.div>
    )
}

export default RevealElement;