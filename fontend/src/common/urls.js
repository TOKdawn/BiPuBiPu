/**
 * 接口地址
 */
import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)
const baseUrl = '/api/v1'
// const baseUrl = '/dsm'

/*
  提示：以下都是项目开发模板，具体需要看项目情况配置
*/

/**
 * 获取枚举值列表
 * @param  {string} 格式数据 "script_language"
 * @return {PromiseObj}  格式数据 {context:'',promise:Promise}
 */
var getEnumData = (name) => {
  return Vue.http.get(baseUrl + '/resource/' + name).then(res => {
    var resData = res.data
    return resData.data ? resData.data : null
  }, res => {
    return null
  })
}

// 获取系统参数
var getSystemParamData = (name) => {
  return Vue.http.get(baseUrl + '/resource/systemparam?paramName=' + encodeURI(name)).then(res => {
    var resData = res.data
    return resData.data ? resData.data : null
  }, res => {
    return null
  })
}

// 镜像
var getEnumResourceImageData = (name) => {
  return Vue.http.get(baseUrl + '/deployments/resources/imagerepository').then(res => {
    var resData = res.data
    return resData.data ? resData.data : null
  }, res => {
    return null
  })
}
// 镜像版本
var getEnumResourceImageEditionData = (name) => {
  return Vue.http.get(baseUrl + '/deployments/resources/image/tags?name=' + encodeURI(name)).then(res => {
    var resData = res.data
    return resData.data ? resData.data : null
  }, res => {
    return null
  })
}

// 服务管理
var serviceManage = Vue.resource(baseUrl + '/services', {}, {
  getServiceList: { method: 'GET' },
  addService: { method: 'PUT' },
  deleteService: { method: 'DELETE' },
  getServiceDetail: { method: 'GET', url: baseUrl + '/service/{serviceId}' },
  updateServiceDetail: { method: 'POST', url: baseUrl + '/service/{serviceId}' },
  getInterfaceParams: { method: 'GET', url: baseUrl + '/service/getInterfaceParams/{interfaceId}' }
})

serviceManage.importService = baseUrl + '/services/import'
serviceManage.exportService = baseUrl + '/services/export'

// 应用进程
var applyProcess = Vue.resource(baseUrl + '/app-procs', {}, {
  getApplyProcess: { method: 'GET', url: baseUrl + '/app-procs/{appId}' }, // 查询应用进程
  getAppProcsTopo: { method: 'POST', url: baseUrl + '/app-procs/topo/{appTopoId}' },
  getProcessDetail: { method: 'GET', url: baseUrl + '/app-procs/{appId}/{pid}' }, // 查询一个应用进程的明细信息
  addProcess: { method: 'POST', url: baseUrl + '/app-procs/{appId}/add' }, // 为一个应用增加进程
  forceStop: { method: 'POST', url: baseUrl + '/app-procs/force-stop/{appId}' }, // 强制停止所有的进程
  stopProcess: { method: 'POST', url: baseUrl + '/app-procs/{appId}/stop' }, // 停止所有的进程
  appProcsScale: { method: 'POST', url: baseUrl + '/app-procs/topo/scale/{appTopoId}' }
})

export {
  getEnumData,
  getSystemParamData,
  getEnumResourceImageData,
  getEnumResourceImageEditionData,
  serviceManage,
  applyProcess
}
