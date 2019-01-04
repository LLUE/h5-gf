import axios from 'axios'
//axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.token;
export const Axios = axios.create({
  //baseURL: 'http://192.168.1.39:3000/api',
  baseURL: 'http://pix.wildrun.cn:3000/api',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
  },
  transformRequest: data => {
    if (!data) return ''
    let ret = ''
    Object.keys(data).forEach(i => {
      ret += encodeURIComponent(i) + '=' + encodeURIComponent(data[i]) + '&'
    })
    //alert(ret)
    return ret
  }
})

Axios.interceptors.request.use(
  config => {
    // if (config.method.toLocaleLowerCase() === "post") {
    //   let data = new FormData();
    //   //alert(JSON.stringify(config.data))
    //   Object.keys(config.data).forEach(key => {
    //     data.append(key, config.data[key]);
    //     //alert(data.get(key))
    //   });
    //   config.data = data;
    // }

    //alert(localStorage.token);
    if (localStorage.token) {
      config.headers.Authorization = 'Bearer ' + localStorage.token
    }
    //alert(JSON.stringify(config));
    return config
  },
  error => {
    alert('错误的参数', 'fail')
    return Promise.reject(error)
  }
)

Axios.interceptors.response.use(
  res => {
    return res.data
  },
  err => {
    if (err.response) {
      return {
        status: err.response.status,
        data: err.response.data
      }
    }
  }
)

export default {
  install(Vue) {
    Object.defineProperty(Vue.prototype, '$http', { value: Axios })
  }
}
