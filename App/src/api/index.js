import axios from 'axios';

const api = axios.create({
    baseURL: "http://172.20.60.188:3000"
});

export default api;