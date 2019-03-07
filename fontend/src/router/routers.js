module.exports = [{
  path: '/index',
  name: 'index',
  component: require('pages/index/index')
}, {
  path: '',
  redirect: '/index'
}, {
  path: '/login',
  name: 'login',
  component: require('pages/login/login')
}, {
  path: '/page',
  name: 'page',
  component: require('pages/page'),
  children: [{
    path: 'scorelist',
    name: 'scorelist',
    component: require('pages/scorelist/scoreList')
  }, {
    path: 'translator',
    name: 'translator',
    component: require('pages/translator/translator')
  }, {
    path: 'searchres/:searchtext',
    name: 'searchres',
    component: require('pages/searchres/searchres')
  }, {
    path: 'score/:scoreid',
    name: 'score',
    component: require('pages/score/score')
  }, {
    path: 'upload',
    name: 'upload',
    component: require('pages/upload/upload')
  }, {
    path: 'user/:uid',
    name: 'user',
    component: require('pages/user/user'),
    meta: {
      requireAuth: true
    }
  }, {
    path: 'uploadimg/:uid',
    name: 'uploadimg',
    component: require('pages/user/uploadimg'),
    meta: {
      requireAuth: true
    }
  }, {
    path: 'editInfo/:uid',
    name: 'editInfo',
    component: require('pages/user/editInfo'),
    meta: {
      requireAuth: true
    }
  }]
}]
