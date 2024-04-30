import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { useTranslation } from "react-i18next";
import { PortfolioContext } from "../../portfolio-context/portfolio-context";


const RevealRandomElement = ({ content, randomize, className, animaType, speed, renderType }) => {
    // const { language } = PortfolioContext();
    
    const [lineHeight, setLineHeight] = useState(0);
    const { t } = useTranslation();
    const translatedText = t(content);

    const revealRandomElRef = useRef(null);

    const isInView = useInView(revealRandomElRef, { once: true });

    const revealRandomElAnimateControls = useAnimation();

    const animationVarients = {
        scale: {
            initial: { scale: 0 },
            animate: { scale: [0, 1, 1.3, 1] },
        },
        y: {
            initial: { y: -lineHeight },
            animate: { y: [-lineHeight, 0, 5, 0] },
        },
    }
    useEffect(() => {
        const height = revealRandomElRef?.current && parseInt(getComputedStyle(revealRandomElRef?.current).lineHeight);
        setLineHeight(height)
    }, [])
    useEffect(() => {
        if (isInView) {
            revealRandomElAnimateControls?.start('animate');
        }
    }, [isInView])

    const renderSingleLetter = () => {
        return (
            translatedText && translatedText?.split('')?.map((l, i) => {
                let shuffle = (randomize ? 1 + Math.random() * translatedText?.length : i);
                return countAnimate(l, shuffle, i, translatedText?.length )
            })
        )
    }

    const renderWords = () => {
        return (
            translatedText && translatedText?.split(' ')?.map(w => {
                return <div className="d-flex">
                    {w?.split('')?.map((l, i) => {
                        let shuffle = (randomize ? 1 + Math.random() * w?.length : i);
                        return countAnimate(l, shuffle, i, w?.length)
                    })}
                </div>
            })
        )
    }

    const countAnimate = (letter, shuffle, index, textLength) => {
        return <motion.div
            className={textLength === index + 1 ? ' pe-1' : ''}
            key={index}
            ref={revealRandomElRef}
            variants={
                Object.values(animationVarients)?.[animaType || 0]
            }
            initial="initial"
            animate={revealRandomElAnimateControls}
            transition={{ duration: 0.3, delay: shuffle * (speed || 0.2) }}
        >
            {letter}
        </motion.div>
    }
    return (
        // language === 'en' ? 
            <div className={`${className || ''} d-flex flex-wrap ${animaType === 1 ? 'overflow-hidden' : ''}`}>
            {renderType === 'word' ?
                renderWords() :
                renderSingleLetter()
                }</div>
            // : <>{translatedText}</>
    )
}
export default RevealRandomElement;