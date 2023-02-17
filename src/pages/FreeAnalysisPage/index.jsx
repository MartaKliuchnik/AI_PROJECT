import React from 'react';
import s from './style.module.sass';
import FreeTextAnalysis from '../../components/FreeTextAnalysis';

export default function FreeAnalysisPage() {
    return (
        <div className={['wrapper', s.wrapper].join(' ')}>
                <FreeTextAnalysis />
        </div>
    )
}
