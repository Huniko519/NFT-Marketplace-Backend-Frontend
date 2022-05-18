import axios from 'axios';
import qs from 'qs'


const instance = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}/api/`,
  timeout: 120000,
});

instance.interceptors.request.use(config => {
    if(config.method === 'post') {
        config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
        config.data = qs.stringify(config.data)
    }

    const token = localStorage.getItem('moonstarToken')
    if (token) {
      config.headers.common['Authorization'] = `Bearer ${token}`
    }

    return config;
  });

export default instance;