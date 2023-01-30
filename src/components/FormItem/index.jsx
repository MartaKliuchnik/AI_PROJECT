import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import FormButton from '../UI/FormButton';
import FormInput from '../UI/FormInput';
import s from './style.module.sass';
import { useForm } from "react-hook-form";
import { login } from '../../requests/login';
import { setCookie, LOGIN_TOKEN_NAME } from '../../requests/cookie_tools';


export default function FormItem({ title, button, btn_link }) {
    const { register, handleSubmit, formState: { errors } } = useForm(
        {mode: 'onBlur'}
    );
    const [message, setMessage] = useState('Specify authentication data');

    // const submit = (event) => {
    const submit = (data) => {
        login(data,
            token_value => {
                setCookie(LOGIN_TOKEN_NAME, token_value.token);
                setMessage('OK! User registered!')
            },
            setMessage
        );
        // event.preventDefault();
        // const { email, password } = event.target;
        // console.log(data);
        // console.log(email.value, password.value);
        // const login_data = {
        //     email: email.value,
        //     password: password.value
        // }
        // login(login_data, console.log);
        // email.value = '';
        // password.value = '';
    }
    
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const emailRegister = register('email', {
        required: 'Requered field',
        pattern: {
            value: emailRegex,
            message: 'Not valid email format'
        }
    });

    // const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    const passwordRegister = register('password', {
        required: true
        // required: 'Requered field',
        // pattern: {
        //     value: passwordRegex,
        //     message: 'Not valid password format'
        // }
    });

    return (
        <div>
            
            <form
                className={s.form_item}
                onSubmit={handleSubmit(submit)}
                // onSubmit={submit}
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
                <p>{message}</p>
                <div>
                    <FormButton color='grey'>{button.submit}</FormButton>
                    <Link to={btn_link}>
                        <FormButton color='white'>{button.redirect}</FormButton>
                    </Link>
                </div>
            </form>
        </div>
    )
}


// {
//     "email": "eve.holt@reqres.in",
//     "password": "cityslicka"
// }