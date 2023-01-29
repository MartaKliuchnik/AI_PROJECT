import React from 'react';
import FormButton from '../UI/FormButton';
import FormInput from '../UI/FormInput';
import s from './style.module.sass';
import { useForm } from "react-hook-form";

export default function FormItem({ title, button, formType }) {
    const { register, handleSubmit, formState: { errors } } = useForm(
        {mode: 'onBlur'}
    );
    const submit = data => console.log(data);
    
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const emailRegister = register('email', {
        required: 'Requered field',
        pattern: {
            value: emailRegex,
            message: 'Not valid email format'
        }
    });

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    const passwordRegister = register('password', {
        required: 'Requered field',
        pattern: {
            value: passwordRegex,
            message: 'Not valid password format'
        }
    });

    return (
        <div>
            <form
                className={s.form_item}
                onSubmit={handleSubmit(submit)}
            >
                <div>
                    <p className={s.form_title}>{title}</p>
                    <FormInput
                        {...emailRegister}
                        name='email'
                        type='email'
                        placeholder='Email'
                    />

                    <div>
                        {errors?.email &&
                            <p className={s.message_err}>{errors?.email?.message}</p>}
                    </div>

                    <FormInput
                        {...passwordRegister}
                        name='password'
                        type='password'
                        placeholder='Password'
                    />

                    <div>
                        {errors?.password && <p className={s.message_err}>{ errors?.password?.message }</p>}
                    </div>
                
                </div>
                <div>
                    <FormButton color='grey'>{button.submit}</FormButton>
                    <FormButton color='white'>{button.redirect}</FormButton>
                </div>
            </form>
        </div>
    )
}
