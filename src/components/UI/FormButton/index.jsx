import React from 'react';
import s from './style.module.sass';

export default function FormButton({ children, color}) {
    return (
        <button className={[s.form_btn, s[color]].join(' ')}>
            {children}
        </button>
    )
}
