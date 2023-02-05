import React, { useContext } from 'react';
import CheckRegisterButton from '../../components/UI/CheckRegisterButton';
import FormInput from '../../components/UI/FormInput';
import s from './style.module.sass';
import { check_register } from '../../requests/check_register';
import { token_refresh } from '../../requests/token_refresh';
import { findCookie } from '../../requests/cookie_tools';
import { Context } from '../../context';
import { useNavigate, Link } from 'react-router-dom';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import {
	deleteCookie,
	AUTH_TOKEN_REFRESH,
	AUTH_TOKEN_ACCESS,
} from '../../requests/cookie_tools';

export default function MainPage() {
    const { setIsLogin } = useContext(Context);
    const navigate = useNavigate();
    const goLoginPage = () => navigate('/login_form');
	const goWelcomePage = () => navigate('/');

	const deleteToken = () => {
		setIsLogin(false);
		deleteCookie(AUTH_TOKEN_REFRESH, AUTH_TOKEN_ACCESS);
		goWelcomePage();
	};

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
            <div className={s.subheader}>
                <h2>MainPage</h2>
                <Link className={s.icon_logout} to='/' onClick={deleteToken}><MeetingRoomIcon /></Link>
            </div>
            
            <form onSubmit={submit} className={s.form}>
                <FormInput type="text" placeholder='Text' name='text' />
                <CheckRegisterButton/>
            </form>
        </div>
    )
}