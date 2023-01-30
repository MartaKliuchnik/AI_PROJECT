export const login = (login_data, callback, err_callback = console.log) => {
    fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(login_data)
    }).then(
        responce => responce.json()
    ).then(
        data => {
            if (data.token) {
                callback(data);
            } else {
                err_callback(data.error)
            }
        }
    )
}