import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import s from './style.module.sass';
import { Context } from '../../context';
import {Button} from '../UI/Button';

export default function NavMenu() {
	const classActive = ({ isActive }) => (isActive ? s.active : '');
	const { isLogin } = useContext(Context);

	return (
		<nav className={s.nav_menu}>
			<div className={s.icons_container}>
				<NavLink className={classActive} to='/'>
					<h1>your <span style={{ fontWeight: 800, textShadow: '-1px -1px 0px #3E2768' }}>analyzer</span></h1>
				</NavLink>
			</div>

			<div className={s.nav_container}>
            {/* <NavLink className={classActive} to='/about_us'>About us</NavLink> */}
				<NavLink className={classActive} to='/'>
					Welcome Page
				</NavLink>
				{isLogin ? (
					<NavLink className={classActive} to='/main'>
						Main
					</NavLink>
				) : (
					''
				)}
				
				<NavLink className={classActive} to='/login_form'>Sign in</NavLink>
				
                <NavLink className={[classActive, s.btn_login].join(' ')} to='/registration_form'>
                    <Button style={{width: '170px'}}>Register</Button> 
                </NavLink>
			</div>
		</nav>
	);
}
