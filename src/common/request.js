import axios from 'axios'
import qs from 'qs'

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  timeout: 30000
});

// request interceptor
service.interceptors.request.use(
  config => {
    config.headers['Authority'] = sessionStorage.getItem("elephantToken") || '';
    config.data = qs.stringify(config.data);
    return config
  },
  error => {
    console.log(error);
    return Promise.reject(error)
  }
);

// response interceptor
service.interceptors.response.use(
  response => {
    return response.data
    // return Promise.reject(new Error(res.message || 'Error'))
  },
  error => {
    return Promise.reject(error)
  }
);

export default service
