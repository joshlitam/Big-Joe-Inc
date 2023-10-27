'use client'
import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

const Typer = ({ text }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const mainControls = useAnimation()
    const words = text.split(" ");

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible")
        }
    })

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
        }),
    }

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        }
    }
    return (
        <motion.div ref={ref} variants={container} style={{ textAlign: "center" }} initial="hidden" animate={mainControls}>
            {words.map((word, index) => (
                <motion.span variants={child} style={{ marginRight: "5px" }} key={index}>
                    {word}
                </motion.span>
            ))}
        </motion.div>
    )
}

export default Typer
