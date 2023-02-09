import React from 'react'
import InfoBlock from '../../components/InfoBlock'
import TestText from '../../components/TestText'
import WelcomText from '../../components/WelcomText';
import MiniBlockAboutPtoject from '../../components/MiniBlockAboutPtoject';

export default function WelcomePage() {
    return (
        <div>
            <MiniBlockAboutPtoject/>
            <WelcomText />
            <InfoBlock/>
            <TestText />
        </div>
    )
}