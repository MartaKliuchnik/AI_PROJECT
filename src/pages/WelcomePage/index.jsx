import React from 'react';
import InfoBlock from '../../components/InfoBlock';
import WelcomText from '../../components/WelcomText';
import MiniBlockAboutPtoject from '../../components/MiniBlockAboutPtoject';
import EasySteps from '../../components/EasySteps';

export default function WelcomePage() {
    return (
        <div>
            <MiniBlockAboutPtoject />
            <EasySteps/>
            <WelcomText />
            <InfoBlock/>
        </div>
    )
}