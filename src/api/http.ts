import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { ElLoading } from 'element-plus';


let loading: any;

const startLoading = () => {

  interface Options {
    lock: boolean;
    text: string;
    background: string;
  };

  const options: Options = {
    lock: true,
    text: "加载中...",
    background: 'rgba(0,0,0,0.7)'
  }
  loading = ElLoading.service(options);
}

const endLoading = () => {
  loading.close();
}

// 请求拦截
axios.interceptors.request.use((config: AxiosRequestConfig) => {
  // 加载
  startLoading();
  return config;
})


// 响应拦截
axios.interceptors.response.use((response: AxiosResponse<any>) => {
  // 结束loading
  endLoading();
  if(response.status === 200) {
    return response;
  }else {
    handleErrorData(response)
  }
}, error => {
  // 结束loading
  endLoading();
  // 错误提醒
  return Promise.reject(error);
})

function handleErrorData(errMes:any) {
    if(errMes.message) {
        console.log(errMes.message)
    }else {
        switch(errMes.code) {
            case 401: 
                console.log('未授权，请重新登录')
                break;
            case 403:
                console.log('拒接访问')
                break;
            case 404:
                console.log('资源未找到')
                break;
            case 500:
                console.log('服务器错误')
                break;
            default :
                break;
        }
    }
}

export default axios;



