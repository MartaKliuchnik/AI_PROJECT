import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import s from './style.module.sass';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import { deleteCookie, AUTH_TOKEN_REFRESH, AUTH_TOKEN_ACCESS } from '../../requests/cookie_tools';
import { Context } from '../../context';
import { useNavigate } from 'react-router-dom';


export default function NavMenu() {
    const classActive = ({ isActive }) => isActive ? s.active : '';
    const { isLogin, setIsLogin } = useContext(Context);

    const navigate = useNavigate();
	const goWelcomePage = () => navigate('/');

    const deleteToken = () => {
        setIsLogin(false);
        deleteCookie(AUTH_TOKEN_REFRESH, AUTH_TOKEN_ACCESS);
        goWelcomePage();
    }

    return (
        <nav className={s.nav_menu}>
            <NavLink className={classActive} to='/login_form'><HowToRegIcon/></NavLink>
            <NavLink className={classActive} to='/'>Welcome Page</NavLink>
            {
                isLogin
                ? <NavLink className={classActive} to='/main'>Main</NavLink>
                : ''
            }
            <button onClick={deleteToken}>
                <NavLink className={classActive} to='/'><MeetingRoomIcon/></NavLink>
            </button>
        </nav>
    )
}
