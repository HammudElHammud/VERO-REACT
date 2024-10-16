import axios from 'axios';

export function createAxios(baseUrl = process.env.BACKEND_API_URL ?? 'http://127.0.0.1:8000/api/') {

    return axios.create({
        baseURL: baseUrl,
    });
}


