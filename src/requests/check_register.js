import { token_refresh } from "./token_refresh";

export const check_register = (auth_token) => {
    console.log(auth_token);
    
    fetch('http://localhost:8000/api/users/me/', {
        method: 'GET',
        headers: {
            'Authorization': `Token ${auth_token.access}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },

    }).then(res => {
        console.log(res);
        if (res.status === 200) {
            return res.json()
        } else if (res.status === 401) {
            token_refresh(auth_token)
            throw new Error(`${res.statusText}`)
        }
    }).then(
        data =>
            // {
            console.log(data),
        // },
        err => console.log(err.message)
    );
}