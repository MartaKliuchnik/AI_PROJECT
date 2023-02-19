import React from 'react';
import { Link } from 'react-router-dom';
import s from './style.module.sass';
import icon_error from './media/404_error.png';
import Button from '../../components/UI/Button';

export default function NotFoundPage() {
    return (
        <div className={['wrapper', s.wrapper].join(' ')}>
            <div className={s.img_container}>
                <img src={icon_error} alt="404_error" />
            </div>
            <div className={s.text_info}>
                <p>Wow! We don't have such a page.</p>
                <p>Sorry, the page you requested was not found.</p>
            </div>
            <Link to='/'>
                <Button style={{height: '80px', fontSize: '30px'}}>Go to home page</Button>
            </Link>
        </div>
    )
}
