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

// 接口管理
var interfaceManage = Vue.resource(baseUrl + '/interfaces', {}, {
  getInterfaceList: { method: 'GET' },
  addInterface: { method: 'PUT' },
  deleteInterface: { method: 'DELETE' },
  getInterfaceDetail: { method: 'GET', url: baseUrl + '/interface/{interfaceId}' },
  updateInterfaceDetail: { method: 'POST', url: baseUrl + '/interface/{interfaceId}' }
})

interfaceManage.importService = baseUrl + '/interfaces/import'
interfaceManage.exportService = baseUrl + '/interfaces/export'

// 应用模板管理
var applyTempManage = Vue.resource(baseUrl + '/appTemplates', {}, {
  getTemplatesList: { method: 'GET' },
  addTemplates: { method: 'PUT' },
  getTemplatesDetail: { method: 'GET', url: baseUrl + '/appTemplate/{appTemplateId}' },
  updateTemplatesDetail: { method: 'POST', url: baseUrl + '/appTemplate/{appTemplateId}' },
  getTemplatesParams: { method: 'GET', url: baseUrl + '/appTemplates/params/{appTemplateId}' },
  deleteTemp: { method: 'DELETE' },
  buildtpxml: { method: 'POST', url: baseUrl + '/appTemplates/buildtpxml' },
  buildtgxml: { method: 'POST', url: baseUrl + '/appTemplates/buildtgxml' },
  format: { method: 'POST', url: baseUrl + '/appTemplates/format' }
})

applyTempManage.importTemp = baseUrl + '/appTemplates/import'
applyTempManage.exportTemp = baseUrl + '/appTemplates/export'

// TT模板管理
var ttTempManage = Vue.resource(baseUrl + '/topoTemplates', {}, {
  getTemplatesList: { method: 'GET' },
  addTemp: { method: 'PUT' },
  deleteTemp: { method: 'DELETE' },
  getDetail: { method: 'GET', url: baseUrl + '/topoTemplate/{id}' },
  updateTemp: { method: 'POST', url: baseUrl + '/topoTemplate/{id}' }
  // getInterfaceParams: { method: 'GET', url: baseUrl + '/service/getInterfaceParams/{interfaceId}' }
})
ttTempManage.importTemp = baseUrl + '/topoTemplates/import'
ttTempManage.exportTemp = baseUrl + '/topoTemplates/export'

// 应用管理
var applyManage = Vue.resource(baseUrl + '/applications', {}, {
  getApplyList: { method: 'POST' },
  deleteApplyList: { method: 'DELETE' },
  getTemplatesList: { method: 'GET', url: baseUrl + '/applications/templates' },
  getChildAppsList: { method: 'GET', url: baseUrl + '/applications/{appTopoId}/child-apps' },
  startApply: { method: 'POST', url: baseUrl + '/applications/start' },
  stopApply: { method: 'POST', url: baseUrl + '/applications/stop' },
  forceStopApply: { method: 'POST', url: baseUrl + '/applications/force-stop' }
})

// 单应用管理
var applySingleManage = Vue.resource(baseUrl + '/applications/single', {}, {
  getApply: { method: 'GET', url: baseUrl + '/applications/single/{appId}' },
  addApply: { method: 'PUT' },
  updateApply: { method: 'POST', url: baseUrl + '/applications/single/{appId}' }
})

// 多应用管理
var applyCombinationManage = Vue.resource(baseUrl + '/applications/combination', {}, {
  // getApply: { method: 'GET', url: baseUrl + '/applications/combination/{appTopoId}' },
  addApply: { method: 'PUT' },
  updateApply: { method: 'POST', url: baseUrl + '/applications/combination/{appTopoId}' }
})

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

// 部署
var deployment = Vue.resource(baseUrl + '/deployments/resources', {}, {
  getList: { method: 'POST' },
  uninstall: { method: 'DELETE' },
  handleDeploy: { method: 'PUT' }
  // getTemplatesList: { method: 'GET', url: baseUrl + '/applications/templates' },
  // getChildAppsList: { method: 'GET', url: baseUrl + '/applications/{appTopoId}/child-apps' }
})

// 日志级别
var logLevel = Vue.resource(baseUrl + '/log-levels', {}, {
  adjustLog: { method: 'POST' },
  recoverLog: { method: 'DELETE' }
})

export {
  getEnumData,
  getSystemParamData,
  getEnumResourceImageData,
  getEnumResourceImageEditionData,
  serviceManage,
  interfaceManage,
  applyTempManage,
  ttTempManage,
  applyManage,
  applySingleManage,
  applyCombinationManage,
  applyProcess,
  deployment,
  logLevel
}
