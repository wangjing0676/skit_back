import axios from 'axios'
import { Toast } from 'vant'
import store from '@/store'
import { getToken } from '@/utils/auth'
import router from '@/router'


// create an axios instance
const service = axios.create({
  baseURL: import.meta.env.VITE_URL,
  // baseURL: import.meta.env.VITE_BASE_API,
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
    if (getToken()) {
      // config.headers.token = getToken()
      config.headers.Authorization = getToken()
    }
    return config
  },
  error => {
    // do something with request error
    console.log(error, 'err') // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data
    console.log('88888888')
    // if the custom code is not 20000, it is judged as an error.
    if (res.code !== 0) {
      Toast.fail({
        message: res.message,
        duration: 2000
      })
      console.log(res,'00000')
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error) // for debug
    Toast.fail({
      message: error.message,
      duration: 1.5 * 1000
    })
    router.push('/login')
    return Promise.reject(error)
  }
)

export default service
