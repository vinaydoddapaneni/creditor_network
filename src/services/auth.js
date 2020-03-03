import { common } from '../config';
//prodduction url
const api = common.api_url;
//development url
//const api = common.dev_api_url;

export const signIn = (email, password) => {
    return new Promise((resolve, reject) => {
        var formData = new URLSearchParams();
        formData.append('email', email);
        formData.append('password', password);
        fetch(`${api}/users/login`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: formData.toString()
        })
            .then(response => response.json())
            .then(response => {
                if (response.status === 'success') {
                    resolve(response);
                } else {
                    reject(response);
                }
            }).catch((err) => reject(err.message))
    })
}


export const signUp = (name, mobile, email, password) => {
    return new Promise((resolve, reject) => {
        var formData = new URLSearchParams();
        formData.append('name', name);
        formData.append('mobile', mobile);
        formData.append('email', email);
        formData.append('password', password);
        fetch(`${api}/users/register`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: formData.toString()
        })
            .then((response) => response.json())
            .then((response) => {
                if (response.status == 'success') {
                    resolve(response);
                } else {
                    reject(response);
                }
            }).catch((err) => reject(err.message))
    })
}