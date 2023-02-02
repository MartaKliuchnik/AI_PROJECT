import React from 'react';
import FormItem from '../../components/FormItem';
import s from './style.module.sass';

export default function LoginPage() {
    return (
        <div className={s.content_container}>
            <div className={s.wrapper}>
                <FormItem
                    title={'Login'}
                    button={{ submit: 'Login', redirect: 'Registration' }}
                    formType={'login'}
                    btn_link={'/registration_form'}
                />
            </div>
        </div>
    )
}
