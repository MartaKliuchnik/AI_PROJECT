import React from 'react';
import s from './style.module.sass';
import { motion } from 'framer-motion';

export default function EasySteps() {

const textAnimation = {
    hidden: {
        x: -1000,
        opasity: 0,
    },
    visible: custom => ({
        x: 0,
        opasity: 1,
        transition: {delay: custom * 0.2, duration: 0.5},
    }),
};

const numberAnimation = {
    hidden: {
        x: 1000,
        opasity: 0,
    },
    visible: custom => ({
        x: 0,
        opasity: 1,
        transition: {delay: custom * 0.3, duration: 0.5},
    }),
};

    return (
        <motion.div 
            initial="hidden"
            whileInView="visible" 
            viewport={{ amount: 0.5, once: true }}
            className={['wrapper', s.wrapper].join(' ')}>
            <motion.p
                variants={textAnimation}
                className={s.free_steps_title}>
                three easy steps
            </motion.p>

            <motion.div 
                initial="hidden"
                whileInView="visible" 
                viewport={{ amount: 0.5, once: true }}
                className={s.free_steps_block}>
                <div  className={s.step_block}>
                    <motion.p custom={1} variants={numberAnimation} className={s.number_step}>1</motion.p>
                    <div className={s.step_container}>
                        <p className={s.title_step}>Register</p>
                        <p>Use all the functionality of the platform</p>
                    </div>
                </div>

                <div  className={s.step_block}>
                    <motion.p custom={2} variants={numberAnimation} className={s.number_step}>2</motion.p>
                    <div className={s.step_container}>
                        <p className={s.title_step}>Download data</p>
                        <p>Import products from a file or add manually</p>
                    </div>
                </div>

                <div  className={s.step_block}>
                    <motion.p custom={3} variants={numberAnimation} className={s.number_step}>3</motion.p>
                    <div className={s.step_container}>
                        <p className={s.title_step}>Get analysis</p>
                        <p>Manage your data and use it in your business</p>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}
