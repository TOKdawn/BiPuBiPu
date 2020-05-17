/**
 * 时间格式转换 ms -> date
 * @return {string} yyyy-MM-dd hh:mm:ss格式时间
 */
const msToDate = (_ms, _format) => {
  let ms = _ms
  let format = _format
  if (ms.toString().length === 10) {
    ms *= 1000
  }
  format = format || 'yyyy-MM-dd hh:mm:ss'
  const d = new Date(ms)
  const year = d.getFullYear()
  const month = d.getMonth() + 1
  const day = d.getDate()
  const hour = d.getHours()
  const minute = d.getMinutes()
  const seconds = d.getSeconds()

  const addPrefix = source => (source < 10 ? `0${source}` : source)

  format = format.replace('yyyy', year)
    .replace('MM', addPrefix(month))
    .replace('dd', addPrefix(day))
    .replace('hh', addPrefix(hour))
    .replace('mm', addPrefix(minute))
    .replace('ss', addPrefix(seconds))
  return format
}

/**
 * 过去距离当前时间差
 * @param  {int} ms 毫秒数
 * @return {string}    时间差标示
 */
const dateFromNow = ms => {
  const time = parseFloat(ms) / 1000
//   console.log('time: ', time)
  let result = ''
  if (time) {
    if (time > 60 && time < 3600) {
      result = `${parseInt(time / 60.0, 10)}分钟前`
    } else if (time >= 3600 && time < 24 * 3600) {
      result = `${parseInt(time / 3600.0, 10)}小时前`
    } else if (time >= 24 * 3600 && time < 30 * 24 * 3600) {
      result = `${parseInt(time / 3600.0 / 24.0, 10)}天前`
    } else if (time >= 30 * 24 * 3600 && time < 12 * 30 * 24 * 3600) {
      result = `${parseInt(time / 3600.0 / 24.0 / 30, 10)}月前`
    } else if (time >= 12 * 30 * 24 * 3600) {
      result = `${parseInt(time / 3600.0 / 24.0 / 30.0 / 12.0, 10)}年前`
    } else {
      result = `${parseInt(time / 1.0, 10)}秒前`
    }
  }
  return result
}

/**
 * object转成uri参数字符串
 * @param  {object} obj object格式数据 { x: xx, y: yy }
 * @return {string}     uri参数字串 x=xx&y=yy
 */
const obj2uri = obj => {
  for (let key in obj) { if (obj[key] === null || obj[key] === '') delete obj[key] }
  return Object.keys(obj).map(k => `${k}=${obj[k]}`).join('&')
}

/**
 * pagination每页条数
 * @return {Array}
 */
const cutomPageSizes = [10, 20, 30, 40, 50, 100]

/**
 * 枚举值获取text
 * @param  {Array} list格式数据 [{ text: xx, value: yy }]
 * @return {string}
 */
const getEnumText = (list, value) => {
  let findItem = list.find((item, index) => {
    return String(item.value) === String(value)
  })
  return findItem ? findItem.text : ''
}

/**
* 数组 上移  下移
* 组件内调用方法 Utils.arrayUpDown.up(arr , 1)

*/

let arrayUpDown = {
  swapItems (arr, index1, index2) {
    arr[index1] = arr.splice(index2, 1, arr[index1])[0]
    return arr
  },
  // 上移
  up (arr, $index) {
    if ($index === 0) {
      return
    }
    this.swapItems(arr, $index, $index - 1)
  },
  // 下移
  down (arr, $index) {
    if ($index === arr.length - 1) {
      return
    }
    this.swapItems(arr, $index, $index + 1)
  }
}

/*******
 * 深拷贝
 * *****/
const deepCopy = json => {
  if (typeof json === 'number' || typeof json === 'string' || typeof json === 'boolean') {
    return json
  } else if (typeof json === 'object') {
    if (json instanceof Array) {
      let newArr = []
      let i
      let len = json.length
      for (i = 0; i < len; i++) {
        newArr[i] = deepCopy(json[i])
      }
      return newArr
    } else {
      var newObj = {}
      for (var name in json) {
        newObj[name] = deepCopy(json[name])
      }
      return newObj
    }
  }
}

export default {
  msToDate,
  dateFromNow,
  obj2uri,
  cutomPageSizes,
  getEnumText,
  arrayUpDown,
  deepCopy
}

