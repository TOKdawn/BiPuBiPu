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
  }]
}]
