import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import FormButton from '../UI/FormButton';
import FormInput from '../UI/FormInput';
import s from './style.module.sass';
import { login } from '../../requests/login';
import { register } from '../../requests/register';
import { setCookie, AUTH_TOKEN_ACCESS, AUTH_TOKEN_REFRESH } from '../../requests/cookie_tools';


export default function FormItem({ title, button, btn_link }) {
    const [message, setMessage] = useState('Specify authentication data');

    const submit = (event) => {
        event.preventDefault();
        const { email, password } = event.target;
        const auth_data = {
            email: email.value,
            password: password.value
        }

        if (button.submit === 'Login') {
            // console.log('Login');
            login(
                auth_data,
                token_value =>
                {
                    setCookie(AUTH_TOKEN_REFRESH, token_value.refresh, AUTH_TOKEN_ACCESS, token_value.access);
                    setMessage('Ok!');
                    password.value = '';
                    email.value = '';
                },
                setMessage
            );

        } else if (button.submit === 'Registration') {
            // console.log('Register');
            register(
                auth_data,
                token_value => {
                    setCookie(AUTH_TOKEN_REFRESH, token_value.refresh, AUTH_TOKEN_ACCESS, token_value.access);
                    setMessage('Ok! User registered!');
                    password.value = '';
                    email.value = '';
                },
                setMessage
            );
        }
        
    }

    return (
        <div>
            <form className={s.form_item} onSubmit={submit}>
                <div>
                    <p className={s.form_title}>{title}</p>
                    <FormInput
                        name='email'
                        type='email'
                        placeholder='Email'
                    />
                    <FormInput
                        name='password'
                        type='password'
                        placeholder='Password'
                    />
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