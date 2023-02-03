export const login = (auth_data, callback, err_callback = console.log) => {
    // console.log('Process - Login')
    fetch('http://localhost:8000/api/token/', {
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
            callback(data);
            return true
        },
        err => {
            err_callback(err.message);
            return false
        }
    );
}
