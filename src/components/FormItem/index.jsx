import React from 'react';
import FormButton from '../UI/FormButton';
import FormInput from '../UI/FormInput';
import s from './style.module.sass';

export default function FormItem() {
    return (
        <div>
            <form className={s.form_item}>
                <div>
                <p className={s.form_title}>Registration</p>
                <FormInput
                    type='text'
                    placeholder='Email'
                    name='email'
                />
                <FormInput
                    type='password'
                    placeholder='Password'
                    name='password'
                />
                </div>
                <div>
                    <FormButton color='grey'>Registration</FormButton>
                    <FormButton color='white'>Login</FormButton>
                </div>
            </form>
        </div>
    )
}
