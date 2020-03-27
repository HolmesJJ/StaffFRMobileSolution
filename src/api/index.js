import axios from "axios";
import { Toast } from "antd-mobile";

const api = axios.create({ timeout: 60000 });

const responseSuccess = ({ data }) => {
  const { status } = data;

  if (status === 0) {
    return data.data;
  } else {
    Toast.fail(data.errorMsg);
    // TODO: check user timeout status
    // and then logout
    return Promise.reject(data);
  }
};

const responseFail = event => {
  const { response } = event;
  const { status, statusText } = response;

  Toast.fail(statusText);

  if (status === 400) {
    // TODO: check user timeout status
    // and then logout
  }

  return Promise.reject({ event });
};

api.interceptors.response.use(responseSuccess, responseFail);

if (window.config) {
  api.defaults.baseURL = config.host;
}

api.defaults.headers.accessToken = localStorage.getItem("userToken");

export default api;
