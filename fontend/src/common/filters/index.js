import Utils from 'utils'
import _ from 'lodash'

/**
 * Number.prototype.format(n, x)
 *
 * @param integer n: length of decimal
 * @param integer x: length of sections
 */
Number.prototype.format = function (n, x) {
  var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')'
  return this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&,')
}

/**
 * 以万为单位显示数值
 * Number.prototype.kunit()
 *
 */
Number.prototype.kunit = function (fixNum) {
  if (this >= 10000) {
    let val = Number((this / 10000).toFixed(fixNum))
    return (val % 10000 == 0 ? val.format() : val) + '万'
  }

  return this.format()
}

/**
 * 百分比显示
 */
Number.prototype.percent = function (fixNum) {
  return (this).toFixed(fixNum || 2) + '%'
}

const getDateFromNow = date => Utils.dateFromNow(new Date() - new Date(date))

// 数字格式化
/*
 1234..format();           // "1,234"
 12345..format(2);         // "12,345.00"
 123456.7.format(3, 2);    // "12,34,56.700"
 123456.789.format(2, 4);  // "12,3456.79"
 */
const numFormat = (d, n, x) => {
  if (d === '' || _.isNaN(d)) return '—'
  if (d === 0) return d
  if (!d) return '—'
  return (parseFloat(d, 10)).format(n, x)
}

// 日期格式化
const formatDate = (time, format) => Utils.msToDate(new Date(time).getTime(), format || 'yyyy-MM-dd hh:mm')

// 百分比格式化
const percentFormat = (d) => {
  if (d === '' || _.isNaN(d)) return '—'
  if (d === 0) return d
  if (!d) return '—'
  return (parseFloat(d, 10)).percent(1)
}

// 指数格式化
const scoreFormat = (score) => {
  if (score === '' || _.isNaN(score)) return '—'
  if (score === 0) return score
  if (!score) return '—'
  return parseFloat(score, 10).toFixed(1)
}

// "万"格式化 (<10000，保留小数点后一位)
const kFormat = (d) => {
  if (d === '' || _.isNaN(d)) return '—'
  if (d === 0) return d
  if (!d) return '—'
  return parseInt(d, 10).kunit(1).toString()
}

// "万"格式化 (<10000 不留小数点)
const kIntFormat = (d) => {
  if (d === '' || _.isNaN(d)) return '—'
  if (d === 0) return d
  if (!d) return '—'
  return parseInt(d, 10).kunit(1).toString()
}

// 价格格式化
const priceFormat = (d, fix) => {
  if (d === '' || _.isNaN(d)) return '—'
  if (d === 0) return d
  if (!d) return '—'
  let val = parseFloat(d, 10)

  return '￥' + val.format(val % 1 === 0 ? null : (fix | 2)).toString()
}
const urlEncode = (str) => {
  return encodeURIComponent(str)
}

const searchKey = (str) => {
  var escapedStr = _.escape(str.replace(/<em\s+class\s*=\s*'search-key'\s*>/g, '[###_').replace(/<\/em>/g, '_###]'))
  return escapedStr.replace(/\[###_(.+?)_###\]/g, "<em class='search-key'>$1</em>")
}
const removeHtmlTag = (str) => {
  return _.escape(str.replace(/<(?:[^>=]|='[^']*'|="[^"]*"|=[^'"][^\s>]*)*>/g, ''))
}
export default { removeHtmlTag, getDateFromNow, searchKey, formatDate, numFormat, scoreFormat, percentFormat, kFormat, kIntFormat, priceFormat, urlEncode }
