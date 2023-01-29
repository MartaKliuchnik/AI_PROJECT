import React from 'react'
import FormItem from '../../components/FormItem';
import s from './style.module.sass';

export default function AuthPage() {
    return (
        <div className={s.wrapper}>
            <FormItem
                title={'Registration'}
                button={{ submit: 'Registration', redirect: 'Login' }}
                formType={'registration'}
            />

            <FormItem
                title={'Login'}
                button={{ submit: 'Login', redirect: 'Registration' }}
                formType={'login'}
            />
        </div>
    )
}
