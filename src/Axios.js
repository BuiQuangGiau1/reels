import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: "your-backend-heroku-url"  //thay thế "your-backend-heroku-url" bằng URL của backend s
});

export default axiosInstance;