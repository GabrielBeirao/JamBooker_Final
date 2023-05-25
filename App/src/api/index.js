import axios from 'axios';

const api = axios.create({
    baseURL: "http://172.20.61.32:3000"
});

export default api;