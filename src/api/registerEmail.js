import axiosClient from "./axiosClient";

const registerEmail = {
    postEmail: (params) => {
        const url = '/auth/register';
        return axiosClient.post(url, params);
    }
}
export default registerEmail;