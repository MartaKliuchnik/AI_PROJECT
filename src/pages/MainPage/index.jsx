import React, { useContext } from 'react';
import CheckRegisterButton from '../../components/UI/CheckRegisterButton';
import FormInput from '../../components/UI/FormInput';
import s from './style.module.sass';
import { check_register } from '../../requests/check_register';
import { token_refresh } from '../../requests/token_refresh';
import { findCookie } from '../../requests/cookie_tools';
import { Context } from '../../context';
import { useNavigate } from 'react-router-dom';


export default function MainPage() {
    const { setIsLogin } = useContext(Context);
    const navigate = useNavigate();
	const goLoginPage = () => navigate('/login_form');

    const submit = event => {
        event.preventDefault();
        const { text } = event.target;
        check_register(
            findCookie()
        );
        check_register ? setIsLogin(true) : setIsLogin(false);
        if (!check_register || !token_refresh) {
            goLoginPage();
        }
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