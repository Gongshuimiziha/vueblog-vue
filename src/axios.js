import axios from 'axios'
import Element from 'element-ui'
import router from './router'
import store from './store'

axios.defaults.baseURL = "http://localhost:8180";

axios.interceptors.request.use(config =>{
    return config
});
axios.interceptors.response.use(response =>{
    let res = response.data;
    console.log(res);
    console.log("==================");
    if(response.data.code === 200){
        return response
    }else{
        Element.Message.error("这是一条错误信息!",{duration : 2*1000});
        return Promise.reject(response.data.msg)
    }
},
        error =>{
        if(error.response.data){
            error.message = error.response.data.msg;
        }
        if(error.response.status === 401){
            store.commit("REMOVE_INFO");
            return router.push('/login');
        }else{
            Element.Message.error(error.message,{duration : 2*1000});
            return Promise.reject(error)
        }
    }
);