export const AUTH_TOKEN_REFRESH = 'auth_refresh';
export const AUTH_TOKEN_ACCESS = 'auth_access';

export const string2array = (string) =>
    string.split('; ').map(elem => elem.split('='));

// export const array2string = (array) => 
//     array.map(elem => elem.join('=')).join('; ')

export const setCookie = (key_refresh, value_refresh, key_access, value_access) => {
    document.cookie = `${key_refresh} = ${value_refresh}`;
    document.cookie = `${key_access} = ${value_access}`;
} 

export const deleteCookie = (key_refresh, key_access) => {
    document.cookie = `${key_refresh}=${-1}`;
    document.cookie = `${key_access}=${-1}`;
}

export const findCookie = (key) => {
    const result = string2array(document.cookie).find(c => c[0] === key);
    return (result && result[1] !== '-1') ? result[1] : undefined
}