import axiosClient from "./axiosClient";

const videoApi = {
  getAll: (params) => {
    const url = '/videos';
    return axiosClient.get(url, { params });
  },

  get: (id) => {
    const url = `/videos/${id}`;
    return axiosClient.get(url);
  },
}

export default videoApi;