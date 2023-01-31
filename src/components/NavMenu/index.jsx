import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './style.module.sass';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import { deleteCookie, AUTH_TOKEN_REFRESH, AUTH_TOKEN_ACCESS } from '../../requests/cookie_tools';

export default function NavMenu() {
    const classActive = ({ isActive }) => isActive ? s.active : '';

    return (
        <nav className={s.nav_menu}>
            <NavLink className={classActive} to='/login_form'><HowToRegIcon/></NavLink>
            <NavLink className={classActive} to='/main'>Main</NavLink>
            <button onClick={() => deleteCookie(AUTH_TOKEN_REFRESH, AUTH_TOKEN_ACCESS)}>
                <NavLink className={classActive} to='/'><MeetingRoomIcon/></NavLink>
            </button>
        </nav>
    )
}
