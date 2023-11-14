import React from "react";
import './card.scss'
import { motion } from "framer-motion";

const Card = (props) => {
    return (
        <div className="card-popover" onClick={(e) => { e?.stopPropagation(); props?.closeCard(null) }}>
            <motion.div
                className=" feature"
                layoutId={props?.card?.id}
                // key="modal"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}>
                <motion.h2>{props?.card.title}</motion.h2>
                <motion.h5>{props?.card.text}</motion.h5>
                <motion.button onClick={() => props?.closeCard(null)}>x</motion.button>
            </motion.div>
        </div>
    )
}
export default Card;