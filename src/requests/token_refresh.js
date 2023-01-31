import { info_user } from "./info";

export const token_refresh = (auth_refresh) => {
    console.log(auth_refresh);
    fetch('http://localhost:8000/api/token_refresh/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(auth_refresh)
    }).then(res => {
        res.headers[Headers] = { 'Authorization': `Token ${auth_refresh.access}` }
        console.log(res);
        // info_user(auth_refresh);
        return res.json()
    })
        .then(
            data => console.log(data)
        )
}