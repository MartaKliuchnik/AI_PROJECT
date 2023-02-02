import React from 'react';
import FormItem from '../../components/FormItem';
import s from './style.module.sass';

export default function RegistrationPage() {
    return (
        <div className={s.content_container}>
            <div className={s.wrapper}>
                <FormItem
                    title={'Registration'}
                    button={{ submit: 'Registration', redirect: 'Login' }}
                    formType={'registration'}
                    btn_link={'/login_form'}
                />
            </div>
        </div>
    )
}
