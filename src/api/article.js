import request from '@/utils/request'
export function fetchList (query) {
  const { pageSize = 10, page = 1, ...rest } = query || {}
  return request({
    // url: '/api/v3inv2/za/logs/batch',
    url: '/reader/oauth/url',
    method: 'get',
    data: {
      pageSize,
      page,
      ...rest
    },
    showLoading: false
  })
}
