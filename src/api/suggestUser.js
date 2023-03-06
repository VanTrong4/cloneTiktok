import axiosClient from "./axiosClient";

const videoApi = {
  getAll: (params) => {
    const url = '/users/suggested';
    return axiosClient.get(url, { params });
  },
}

export default videoApi;