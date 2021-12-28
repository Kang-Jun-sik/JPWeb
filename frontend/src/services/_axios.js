import axios from 'axios';

const axiosInstance = axios.create({
    timeout: 8000,
    baseURL: `${location.protocol}//${location.host}`
});

//Axios 인스턴스 인터셉터 추가
axiosInstance.interceptors.request.use(function (config){

});

axiosInstance.interceptors.response.use(function (response){

});

export default axiosInstance;
