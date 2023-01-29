import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './style.module.sass';

export default function NavMenu() {
    const classActive = ({ isActive }) => isActive ? s.active : '';

    return (
        <nav className={s.nav_menu}>
            <NavLink className={classActive} to='/auth'>Login</NavLink>
            <NavLink className={classActive} to='/main'>Main</NavLink>
        </nav>
    )
}
