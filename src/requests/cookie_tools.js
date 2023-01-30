export const LOGIN_TOKEN_NAME = 'login_token';

export const string2array = (string) =>
    string.split('; ').map(elem => elem.split('='));

// export const array2string = (array) => 
//     array.map(elem => elem.join('=')).join('; ')

export const setCookie = (key, value) => {
    // return array2string([...string2array(document.cookie), [key, value]])
    document.cookie = `${key} = ${value}`;
} 

export const deleteCookie = (key) => {
    document.cookie = `${key}=${-1}`;
}

export const findCookie = (key) => {
    const result = string2array(document.cookie).find(c => c[0] === key);
    return (result && result[1] !== '-1') ? result[1] : undefined
}