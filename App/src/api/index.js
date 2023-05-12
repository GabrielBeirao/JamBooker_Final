import axios from 'axios';

const api = axios.create({
    baseURL: "http://172.20.63.1:3000"
});

export default api;