// import store from "@/store/index";

export function setInterceptors(instance) {

    /**
     * Axios Request를 요청할 때의 전처리
     * Axios Itnerceptors를 활용하여 Request마다 인증 토큰을 Importing 해준다.
     */
    instance.interceptors.request.use(
        function (config) {
            // Do Something before request is sent
            // config.headers.Authorization = store.state.token; //API 호출마다 인터셉터를 이용하여 토큰값 세팅해줌
            // return config;
        },
        function (error) {
            // Dom something with request error
            console.log(error);
        },
    );

    /**
     * Axios Response를 받아올때 전처리
     */
    instance.interceptors.response.use(
        function (response) {
            // Do Something before response is sent
            console.log(response);
        },
        function (error) {
            // Dom something with response error
            console.log(error);
        },
    );
    return instance;
}
