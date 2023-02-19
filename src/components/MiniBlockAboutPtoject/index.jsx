import React from 'react';
import s from './style.module.sass';
import picture from './media/free_hero_image.png';
import { MButton } from '../UI/Button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { RotateLeft } from '@mui/icons-material';
import { duration } from '@mui/material';


export default function MiniBlockAboutPtoject() {

    const textAnimation = {
        hidden: {
            x: -1000,
            opasity: 0,
        },
        visible: custom => ({
            x: 0,
            opasity: 1,
            transition: {
                delay: custom * 0.3,
                duration: 0.5,
            },
        }),
    }



    return (
        <motion.div 
            initial="hidden"
            whileInView="visible" 
            viewport={{ amount: 0.5, once: true }}
            className={[s.wrapper, 'wrapper'].join(' ')}>
            <div className={s.free_hero}>
                
                    <div className={s.container}>
                        <motion.p custom={1} variants={textAnimation}
                            className={s.free_hero_title}>Run analyzer <br /> now FREE
                        </motion.p>
                        <motion.p custom={2} variants={textAnimation}
                            className={s.free_hero_subtitle}>YOUR ANALYZER - makes it easy to analyze customer feedback
                        </motion.p>
                    </div>
                
                    <Link to='/free_analysis' className={s.free_btn}>
                        <MButton custom={3} variants={textAnimation}>Start free analysis</MButton>
                    </Link>
                
                    <div className={s.free_hero_image}>
                        <img 
                            src={picture} alt="hero_image" 
                        />
                    </div>
                
            </div>
        </motion.div>
    )
}
