export const AUTH_TOKEN_REFRESH = 'refresh';
export const AUTH_TOKEN_ACCESS = 'access';

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

export const findCookie = () => {
    const result_access = string2array(document.cookie).find(c => c[0] === 'access');
    const result_refresh = string2array(document.cookie).find(c => c[0] === 'refresh');
    
    const auth_token_from_cookies = {
        access: (result_access && result_access[1] !== '-1') ? result_access[1] : undefined,
        refresh: (result_refresh && result_refresh[1] !== '-1') ? result_refresh[1] : undefined
    }
    return auth_token_from_cookies
}