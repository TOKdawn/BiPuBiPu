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
  getSMS: baseUrl + '/system/sms',
  updatePass: baseUrl + '/user/remakespassword'

}
const User = {
  getMyCollection: baseUrl + '/user/collectionList',
  getMyLike: baseUrl + '/user/likeList',
  getMyStar: baseUrl + '/user/starList',
  getMyUpload: baseUrl + '/user/uploadList',
  getMyCreate: baseUrl + '/user/createList',
  getUpdateNum: baseUrl + '/user/updateNum/',
  getCreateNum: baseUrl + '/user/createNum/',
  getFocusNum: baseUrl + '/user/focusNum/',
  getMyInfo: baseUrl + '/user',
  logout: baseUrl + '/user/logout',
  updateInfo: baseUrl + '/user/updateInfo',
  thirdParty: baseUrl + '/user/thirdParty/',
  changephone: baseUrl + '/user/changephone'
}
const Volume = {
  createVolume: baseUrl + '/volume/createVolume'
}
const System = {
  checkUser: baseUrl + '/system/checkuser'
}
const Upload = {
  uploadScore: baseUrl + '/score/upload'
}
const Score = {
  getAllScore: baseUrl + '/score/allscore'
}

export {
  Login,
  System,
  Upload,
  User,
  Volume,
  Score
}
