import axios from 'axios';
import { useNavigate } from 'react-router';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000',
    //  baseURL: 'https://pay-nova-server-production.up.railway.app'
});

const useAxiosSecure = () => {
  const navigate = useNavigate();

  axiosInstance.interceptors.request.use(function(config) {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.authorization = `Bearer ${token}`; // Add token in Authorization header
    }
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

  axiosInstance.interceptors.response.use(function (response) {
      return response;
  }, async (error) => {
    const status = error.response.status;
    if (status === 401 || status === 403) {
      navigate('/login'); // Redirect to login page
    }
    return Promise.reject(error);
  });

  return axiosInstance;
};

export default useAxiosSecure;
