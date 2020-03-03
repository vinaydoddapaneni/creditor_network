import { common } from '../config';
//prodduction url
const api = common.api_url;
//development url
//const api = common.dev_api_url;

export const search = (keyword) => {
    return new Promise((resolve, reject) => {
        var formData = new URLSearchParams();
        formData.append('keyword', keyword);
        fetch(`${api}/complaints/search`, {
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


export const create = (name, phone, amount, identificationType, identificationNo, email, address, date_from, date_to, city, fileupload, description, complaintType, createdBy, createdDate) => {
    return new Promise((resolve, reject) => {
        var formData = new URLSearchParams();
        formData.append('fullName', name);
        formData.append('phone', phone);
        formData.append('email', email);
        formData.append('amount', amount);
        formData.append('identificationType', identificationType);
        formData.append('identificationNo', identificationNo);
        formData.append('complaintType', complaintType);
        formData.append('dateFrom', date_from);
        formData.append('address', address);
        formData.append('dateTo', date_to);
        formData.append('city', city);
        formData.append('description', description);
        formData.append('fileUpload', fileupload);
        formData.append('createdBy', createdBy);
        formData.append('createdDate', createdDate);
        fetch(`${api}/complaints/create`, {
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
            }).catch((err) => reject(err))
    })
}


export const myIssues = (id) => {
    return new Promise((resolve, reject) => {
        fetch(`${api}/complaints/getallbyid/${id}`)
            .then(response => response.json())
            .then(response => {
                if (response.status === 'success') {
                    resolve(response);
                } else {
                    reject(response);
                }
            })
            .catch((err) => reject(err.message))
    })
}