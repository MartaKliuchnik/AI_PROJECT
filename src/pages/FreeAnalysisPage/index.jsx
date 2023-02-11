import React from 'react';
import s from './style.module.sass';
import FreeTextAnalysis from '../../components/FreeTextAnalysis';
import ai_icon from './media/ai_image.png';

export default function FreeAnalysisPage() {
    return (
        <div className={['wrapper', s.wrapper].join(' ')}>
            
                <FreeTextAnalysis />
            
            {/* <div className={s.ai_container}>
                <img src={ai_icon} alt="ai_image" />
            </div> */}
        </div>
    )
}
