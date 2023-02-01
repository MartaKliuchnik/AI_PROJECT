import { check_register } from "./check_register";

export const register = (auth_data, callback, err_callback = console.log) => {
    console.log('Process - Register');

    fetch('http://localhost:8000/api/register/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(auth_data)
    }).then(res => {
        console.log(res);
        if (res.status === 200) {
            return res.json()
        } else {
            throw new Error(`${res.statusText}`)
        }
    }).then(
        data => {
            console.log(data);
            callback(data);
        },
        err => err_callback(err.message)
    );
}