import React, {useContext} from 'react';
import FormItem from '../../components/FormItem';
import s from './style.module.sass';
import { useNavigate, Link } from 'react-router-dom';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import { Context } from '../../context';
import {
	deleteCookie,
	AUTH_TOKEN_REFRESH,
	AUTH_TOKEN_ACCESS,
} from '../../requests/cookie_tools';
import picture from './media/analysis.png';

export default function LoginPage() {
    const { setIsLogin } = useContext(Context);
    const navigate = useNavigate();
	const goWelcomePage = () => navigate('/');

	const deleteToken = () => {
		setIsLogin(false);
		deleteCookie(AUTH_TOKEN_REFRESH, AUTH_TOKEN_ACCESS);
		goWelcomePage();
	};
    return (

        <div className={s.wrapper}>
            <Link className={s.icon_logout} to='/' onClick={deleteToken}><MeetingRoomIcon style={{fontSize: '30px'}} /></Link>
            <div className={s.content_container}>
                    <FormItem
                        title={'Login'}
                        button={{ submit: 'Login', redirect: 'Registration' }}
                        formType={'login'}
                        btn_link={'/registration_form'}
                    />
            </div>
            <div className={s.login_picture}>
                <img src={picture} alt="picture" />
            </div>
        </div>
    )
}
