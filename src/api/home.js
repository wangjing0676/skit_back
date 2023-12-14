import request from '@/utils/request'
import { getToken } from '@/utils/auth'
let url = import.meta.env.VITE_BASE_API

export function fetchList (query) {
  return request({
    url: '/shorts/discover',
    method: 'get',
    showLoading: false
  })
}
export function discoverDetail (query) {
  return request({
    url: '/shorts/discover/detail',
    method: 'get',
    params: query,
    showLoading: false
  })
}


