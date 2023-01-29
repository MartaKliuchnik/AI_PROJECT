import React from 'react';
import s from './style.module.sass';
import Footer from '../Footer';
import NavMenu from '../NavMenu';
import { Outlet } from 'react-router-dom';

export default function Layout() {
    return (
        <div className={s.wrapper}>
			<NavMenu />
			<div className={s.content}>
				<Outlet />
			</div>
			<Footer />
		</div>
    )
}
