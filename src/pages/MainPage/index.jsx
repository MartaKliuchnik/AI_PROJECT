import React, { useContext } from 'react'
import CheckRegisterButton from '../../components/UI/CheckRegisterButton';
import FormInput from '../../components/UI/FormInput';
import s from './style.module.sass';
import {check_register} from '../../requests/check_register'
import { findCookie } from '../../requests/cookie_tools';
import { Context } from '../../context';

export default function MainPage() {
    const { setIsLogin } = useContext(Context);

    const submit = event => {
        event.preventDefault();
        const { text } = event.target;
        check_register(
            findCookie()
        );
        check_register ? setIsLogin(true) : setIsLogin(false)
    }
    
    return (
        <div className={s.wrapper}>
            <h2>MainPage</h2>
            <form onSubmit={submit} className={s.form}>
                <FormInput type="text" placeholder='Text' name='text' />
                <CheckRegisterButton/>
            </form>
        </div>
    )
}