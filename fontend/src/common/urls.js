let baseUrl

if (process.env.NODE_ENV === 'development') {
  baseUrl = '/api'
} else {
  baseUrl = ''
}

const Login = {
  login: baseUrl + '/user/login',
  register: baseUrl + '/user/register',
  getCatcha: baseUrl + '/system/catcha',
  getSMS: baseUrl + '/system/sms'

}
const System = {
  checkUser: baseUrl + '/system/checkuser'
}
export {
  Login,
  System
}
