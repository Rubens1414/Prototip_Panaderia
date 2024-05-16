import axios from 'axios';

axios.defaults.baseURL = process.env.NODE_ENV !== 'production' ?
    ('http://192.168.0.19:5000'|| 'http://localhost:5000') : '/';
