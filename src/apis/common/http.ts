import axios from "axios";

const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone

const apiClient = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 30000, 
    headers: { // 요청 헤더
        'Content-Type': 'application/json',  
        'Accept-Language': navigator.language || 'ko-KR',
        'Channel': 'web',
        'Site': 'ucubemall',
        'Time-Zone': timeZone,
        //"X-Requested-With": "XMLHttpRequest"
        Authorization: `Bearer ${localStorage.getItem('store-token')}` 
    }
});

apiClient.interceptors.request.use(
    (config) => {
        if(localStorage.getItem('store-token')){
            config.headers.Authorization = `Bearer ${localStorage.getItem('store-token')}`
        }
        return config;
    },  
    (error) => {
        console.error('Request error:', error);
        return Promise.reject(error);
    }
);

apiClient.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        console.error('Response error:', error);
        return Promise.reject(error);
    }
);

export default apiClient;