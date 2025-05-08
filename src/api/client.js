import axios from 'axios';

const client = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 5000,
});

client.interceptors.response.use(
    response => {
      const {resultType, success, error} = response.data;
      if (resultType === 'SUCCESS') {
        return success;
      } else {
        return Promise.reject(error);
      }
    },
    err => {
      // 네트워크 에러 등 axios 레벨 에러
      console.error('[API 네트워크 에러]', err);
      return Promise.reject({reason: 'network_error', details: err});
    }
);

export default client;
