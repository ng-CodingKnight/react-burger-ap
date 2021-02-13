import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://burgerbuilder-f2114-default-rtdb.firebaseio.com/',
})

export default axiosInstance;