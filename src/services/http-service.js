const axios = require('axios');

const httpClient = axios.create({
    baseURL: process.env.API_BASE_URL,
    timeout: 5000
});

httpClient.interceptors.request.use(request => {
    if (process.env.LOG_REQUEST_URL === 'true') {
        const fullUrl = new URL(request.url, request.baseURL).toString();
        console.log('Request URL:', fullUrl);
    }

    return request;
}, error => {
    return Promise.reject(error);
});

httpClient.interceptors.response.use(response => {
    return response;
}, error => {
    if (error.response && error.response.status === 404) {
        return Promise.reject(new Error('The requested resource was not found (404).', { cause: error.response.data }));
    }

    return Promise.reject(error);
});

export default httpClient;