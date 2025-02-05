const axios = require('axios');

const httpClient = axios.create({
    baseURL: process.env.API_BASE_URL,
    timeout: 5000
});

export default httpClient;