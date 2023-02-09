import React, { useContext } from 'react';
import s from './style.module.sass';
import picture_example_1 from './media/image_1.png';
import Button from '../UI/Button';
import { Context } from '../../context';
import { Link } from 'react-router-dom';


export default function InfoBlock() {
    const { isLogin } = useContext(Context);
    const check_register = isLogin ? '/main' : '/registration_form';

    return (
        <div className={s.wrapper}>
            <h2>Your Analyzer - solution for <br/>various fields</h2>
            <div className={s.example_block}>
                <div className={s.info_text}>
                    <h1>Instant Data Visualizations & Detailed Insights</h1>
                    <p>All-in-one text analysis and data visualization studio. Gain instant insights when you run an analysis on your data.</p>
                </div>
                <div className={s.example_image_container}>
                    <img src={picture_example_1} alt="example_1" />
                </div>
            </div>
            <Link to={check_register}>
                <Button>Get Started</Button> 
            </Link>
        </div>
    )
}
