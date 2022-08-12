import axios from 'axios';
import { logout } from '../redux/actions/userActions';
import store from '../redux/store';
import LocalStorageService from './LocalStorageService';

const baseUrl = process.env.BASE_URL || process.env.REACT_APP_BE_URL;
console.log('baseurl', baseUrl);

const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const token = LocalStorageService.getAccessToken();
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token;
    }
    // config.headers['Content-Type'] = 'application/json';
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  function (error) {
    const originalRequest = error.config;
    // Make sure we dont go on an infinite loop and reject if the refreshToen id invalid or expired.
    if (
      error.response.status === 401 &&
      originalRequest.url === `${baseUrl}/users/refresh`
    ) {
      store.dispatch(logout());
      // clear Auth Credentials in localstorage and the return
      return Promise.reject(error);
    }

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      return axios
        .post(`${baseUrl}/users/refresh`, {
          refreshToken: LocalStorageService.getRefreshToken(),
        })
        .then((res) => {
          // 1) put token to LocalStorage
          LocalStorageService.setToken(res.data);
          // 2) Change Authorization header
          axiosInstance.defaults.headers.common['Authorization'] =
            'Bearer ' + LocalStorageService.getAccessToken();
          // 3) return originalRequest object with Axios.
          return axiosInstance(originalRequest);
        })
        .catch((error) => {
          if (error.response.status === 401) {
            store.dispatch(logout());
            window.location = '/signin';
          }
        });
    }
    // return Error object with Promise
    return Promise.reject(error);
  }
);

export default axiosInstance;
