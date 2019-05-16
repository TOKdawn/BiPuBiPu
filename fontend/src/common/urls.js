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
  getMyCollection: baseUrl + '/user/collectionList/',
  getMyLike: baseUrl + '/user/likeList/',
  getMyStar: baseUrl + '/user/starList/',
  getMyUpload: baseUrl + '/user/uploadList/',
  getMyCreate: baseUrl + '/user/createList/',
  getUpdateNum: baseUrl + '/user/updateNum/',
  getCreateNum: baseUrl + '/user/createNum/',
  getFocusNum: baseUrl + '/user/focusNum/',
  getMyInfo: baseUrl + '/user',
  logout: baseUrl + '/user/logout',
  updateInfo: baseUrl + '/user/updateInfo',
  thirdParty: baseUrl + '/user/thirdParty/',
  changephone: baseUrl + '/user/changephone',
  getInfo: baseUrl + '/user/'
}
const Volume = {
  createVolume: baseUrl + '/volume/createVolume',
  getVolumeList: baseUrl + '/volume/volumeList',
  getVolumeInfo: baseUrl + '/volume/',
  getVolumeScore: baseUrl + '/getVolume/score/',
  addVolumeScore: baseUrl + '/postVolume/score/',
  deleteVolumeScore: baseUrl + '/deleteVolume/score/',
  getVolumeAuthor: baseUrl + '/volume/author/',
  getVolumeCollector: baseUrl + '/volume/collector/',
  editVolume: baseUrl + '/volume/',
  deleteVolume: baseUrl + '/volume/',
  addCollectionVolume: baseUrl + '/volumeCollection/',
  deleteCollectionVolume: baseUrl + '/volumeCollection/'

}
const systemUrl = {
  checkUser: baseUrl + '/system/checkuser',
  getScore: baseUrl + '/system/searchScore',
  getVolume: baseUrl + '/system/searchVolume',
  getUser: baseUrl + '/system/searchUser',
  getAll: baseUrl + '/system/searchAll'
}
const Upload = {
  uploadScore: baseUrl + '/score/upload'
}
const Score = {
  getAllScore: baseUrl + '/score/allscore',
  getScoreAuthor: baseUrl + '/Score/author/',
  getScoreCollector: baseUrl + '/Score/collector/'
}

export {
  Login,

  Upload,
  User,
  Volume,
  Score,
  systemUrl
}
