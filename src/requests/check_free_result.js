export const check_free_result = (text, callback, err_callback = console.log) => {
    
    fetch('http://127.0.0.1/preview_analyse/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(text)
    }).then(res => {
        // console.log(res);
        if (res.status === 200) {
            // console.log(res)
            return res.json()
        } else {
            throw new Error(`${res.statusText}`)
        }
    }).then(
        data => {
            // console.log(data.result);
            callback(data.result)
        },
        err => {
            err_callback(err.message);
            return false
        }
    );
}
