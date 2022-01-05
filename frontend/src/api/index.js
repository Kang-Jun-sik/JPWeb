import axios from "axios";
import {setInterceptors} from "@/api/common/interceptors";

// Auth-token이 필요한 API와 필요없는 API로 분류한다. API Splitting

/**
 *
 * @returns {AxiosInstance}
 */
function createInstance() {
    return axios.create(({
        baseURL: process.env.VUE_APP_API_URL,
    }))
}

//axios 공통 설정 및 인터셉터 설정
/***
 *
 * @param url
 * @returns {*}
 */
function createInstanceWithAuth(url) {
    const instance = axios.create({
        baseURL: `${process.env.VUE_APP_API_URL}${url}`,
    });
    return setInterceptors(instance);
}

export const instance = createInstance(); //인증이 필요없는 Axios Instance
export const posts = createInstanceWithAuth('posts'); //인증이 필요한 Axios Instance