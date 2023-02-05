import React from 'react'
import InfoBlock from '../../components/InfoBlock'
import TestText from '../../components/TestText'
import WelcomText from '../../components/WelcomText'

export default function WelcomePage() {
    return (
        <div>
            <WelcomText />
            <InfoBlock/>
            <TestText />
        </div>
    )
}