module.exports = [{
  path: '/index',
  name: 'index',
  component: require('pages/index/index')
}, {
  path: '',
  redirect: '/index'
}, {
  path: '/page',
  name: 'page',
  component: require('pages/page'),
  children: [{
    path: 'scorelist',
    name: 'scorelist',
    component: require('pages/scorelist/scoreList')
  }]
}]
