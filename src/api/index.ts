import axios, { AxiosRequestConfig } from "axios";

const apiClient = async (payload: AxiosRequestConfig<any>) => {
  return (
    await axios({
      ...payload,
      url: import.meta.env.VITE_API_URL + "/api/v1" + payload.url,
    })
  ).data;
};

export default apiClient;
