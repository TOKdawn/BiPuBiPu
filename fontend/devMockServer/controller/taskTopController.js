module.exports = function (apiRouter, URL, API_SUCCESS) {
  apiRouter.get(URL.TASK_TOPOLOGY_LIST, function (req, res) {
    let result = require('../json/taskTop/task-topology-list.json')
    res.json({
      code: API_SUCCESS,
      msg: '成功',
      data: result
    })
  })

  apiRouter.get(URL.GET_DEPLOYED_INSTANCE, function (req, res) {
    let result = require('../json/taskTop/task-topology-list.json')
    res.json({
      code: API_SUCCESS,
      msg: '成功',
      data: result
    })
  })

  apiRouter.get(URL.TASK_INSTANCE_DETAILS, function (req, res) {
    let result = require('../json/user/detail.json')
    res.json({
      code: API_SUCCESS,
      msg: '成功',
      data: result
    })
  })
}
