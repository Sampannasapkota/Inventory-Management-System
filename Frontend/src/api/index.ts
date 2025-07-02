import axios from "axios";

const api =axios.create({
    baseURL: 'https://inventory-management-system-backend-exdq.onrender.com'

});

api.interceptors.request.use((config)=>{
    const token = localStorage.getItem('token');
   config.headers.Authorization= `Bearer ${token}` ;
   config.headers['Content-Type']= 'application/json';
   return config;

});
export {api};
