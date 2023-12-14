import request from '@/utils/request'

export function fetchBookDetail (query) {
  return request({
    url: '/shorts/episode',
    method: 'get',
    params: query,
    showLoading: false
  })
}


export function fetchSearch (query) {
    return request({
      url: '/shorts/search',
      method: 'get',
      params: query,
      showLoading: false
    })
  }

  export function fetchEpisode (query) {
    return request({
      url: '/shorts/episode',
      method: 'get',
      params: query,
      showLoading: false
    })
  }

  export function collectRemove (query) {
    return request({
      url: '/shorts/play/record/remove',
      method: 'post',
      data: query,
      showLoading: false
    })
  }
  export function fetchShorts (query) {
    return request({
      url: '/shorts',
      method: 'get',
      params: query,
      showLoading: false
    })
  }
  export function fetchRecord (query) {
    return request({
      url: '/shorts/play/record',
      method: 'post',
      data: query,
      showLoading: false
    })
  }
  export function fetchRecordList (query) {
    return request({
      url: '/shorts/play/record',
      method: 'get',
      params: query,
      showLoading: false
    })
  }

  export function collectAdd (query) {
    return request({
      url: '/shorts/collect',
      method: 'post',
      data: query,
      showLoading: false
    })
  }
  export function collectAddCancel (query) {
    return request({
      url: '/shorts/collect/rm',
      method: 'post',
      data: query,
      showLoading: false
    })
  }
  export function collectList (query) {
    return request({
      url: '/shorts/collect',
      method: 'get',
      params: query,
      showLoading: false
    })
  }
  
  export function collectStatus (query) {
    return request({
      url: '/shorts/episode/collect/status',
      method: 'get',
      params: query,
      showLoading: false
    })
  }

  export function likeEisode (query) {
    return request({
      url: '/shorts/like/episode',
      method: 'post',
      data: query,
      showLoading: false
    })
  }

  export function cancelLikeEisode (query) {
    return request({
      url: '/shorts/like/episode/rm',
      method: 'post',
      data: query,
      showLoading: false
    })
  }
  export function collectEisode (query) {
    return request({
      url: '/shorts/collect/episode',
      method: 'post',
      data: query,
      showLoading: false
    })
  }
  export function cancelCollectEisode (query) {
    return request({
      url: '/shorts/collect/episode/rm',
      method: 'post',
      data: query,
      showLoading: false
    })
  }
  
  




  
  

