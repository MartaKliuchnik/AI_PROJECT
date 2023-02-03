import { setCookie, AUTH_TOKEN_ACCESS, AUTH_TOKEN_REFRESH } from '../requests/cookie_tools';

// export const token_refresh = (auth_refresh) => {
export const token_refresh = (token) => {
    console.log(token);
    
    fetch('http://localhost:8000/api/token_refresh/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(token)
    }).then(res => {
        console.log(res);
        return res.json()
    }).then(
        data => {
            console.log('token_refresh = true');
            setCookie(AUTH_TOKEN_REFRESH, data.refresh, AUTH_TOKEN_ACCESS, data.access);
        },
        err => {
            console.log('token_refresh = false');
            console.log(err.message);
            return false
        }
    )
}