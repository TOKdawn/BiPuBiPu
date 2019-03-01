let baseUrl

if (process.env.NODE_ENV === 'development') {
  baseUrl = '/api'
} else {
  baseUrl = ''
}

const Login = {
  weiboLogin: baseUrl + '/passport/weibo'

}
export {
  Login
}
