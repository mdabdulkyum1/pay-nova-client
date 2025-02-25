import axios from 'axios'


const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000'
    // baseURL: ''
  });

  
const useAxiosPublic = () => {
    return axiosInstance;
};

export default useAxiosPublic;