import axios from 'axios';

export const axiosBackend = axios.create({
    baseURL: 'http://localhost:8081/',

});