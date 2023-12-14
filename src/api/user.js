import request from '@/utils/request'

export function logUp (data) {
  return request({
    url: '/shorts/register/email',
    method: 'get',
    params: data
  })
}

export function Reader (data) {
  return request({
    url: '/shorts/oauth/url',
    method: 'get',
    params: data
  })
}
export function login (data) {
  return request({
    url: '/shorts/login/email',
    method: 'get',
    params: data
  })
}
export function getInfo (token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout () {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
export function handleInfo () {
  return request({
    url: '/shorts/user/profile',
    method: 'get'
  })
}
export function updataInfo (data) {
  return request({
    url: '/shorts/user/profile',
    method: 'post',
    data: data,
  })
}


