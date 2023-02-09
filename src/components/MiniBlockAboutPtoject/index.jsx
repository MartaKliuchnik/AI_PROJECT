import React from 'react';
import s from './style.module.sass';
import picture from './media/free_hero_image.png';
import Button from '../UI/Button';


export default function MiniBlockAboutPtoject() {
    return (
        <div className={[s.wrapper, 'wrapper'].join(' ')}>
            <div className={s.free_hero}>
                
                    <div className={s.container}>
                        <p className={s.free_hero_title}>Run analyzer <br /> now FREE</p>
                        <p className={s.free_hero_subtitle}>YOUR ANALYZER - makes it easy to analyze customer feedback</p>
                    </div>
                    <div className={s.free_btn}>
                        <Button>Get analysis</Button>
                    </div>
                
                    <div className={s.free_hero_image}>
                        <img src={picture} alt="hero_image" />
                    </div>
                
            </div>
        </div>
    )
}
