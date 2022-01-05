// 로그인, 회원 가입, 회원 탈퇴 등
import {instance} from '@/api/index'

/**
 *
 * @param userData
 * @returns {Promise<AxiosResponse<any>>}
 */
//회원가입 API
function registerUser(userData) {
    return instance.post("signup", userData); //axios instance를 통해 단순화
}

//로그인 API
/**
 *
 * @param userData
 * @returns {Promise<AxiosResponse<any>>}
 */
function loginUser(userData) {
    return instance.post("login", userData);
}

export {
    registerUser,
    loginUser
}