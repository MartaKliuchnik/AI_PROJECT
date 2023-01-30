import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './style.module.sass';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';

export default function NavMenu() {
    const classActive = ({ isActive }) => isActive ? s.active : '';

    return (
        <nav className={s.nav_menu}>
            <NavLink className={classActive} to='/login_form'><HowToRegIcon/></NavLink>
            <NavLink className={classActive} to='/main'>Main</NavLink>
            <NavLink className={classActive} to='/'><MeetingRoomIcon/></NavLink>
        </nav>
    )
}
