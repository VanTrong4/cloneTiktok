import axiosClient from "./axiosClient";

const loginGmail = {
    postLogin: (params) => {
        const url = '/auth/login';
        return axiosClient.post(url,params)
    }
}
export default loginGmail