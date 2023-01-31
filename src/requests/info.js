export const info_user = (auth_refresh) => {
    fetch('http://localhost:8000/api/users/me/', {
        method: 'GET',
        headers: {
            // headers: new Headers({
            'Authorization': `Token + ${auth_refresh.access}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(res => console.log(res))
}