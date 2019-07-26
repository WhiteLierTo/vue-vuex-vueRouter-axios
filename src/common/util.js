/**
 * 公共方法封装
 */

// 缓存工具类 Storage
let Storage = {
  // ==================sessionsTorage设置缓存================
  // 设置缓存
  sessionSet: (name, data) => {
    sessionStorage.removeItem(name)
    sessionStorage.setItem(name, JSON.stringify(data))
  },
  // 获取缓存
  sessionGet: (name) => {
    return JSON.parse(sessionStorage.getItem(name))
  },
  // 清除缓存
  sessionRemove: (name) => {
    sessionStorage.removeItem(name)
  },
  // ==================localStorage设置缓存==================
  // 设置缓存
  localSet: (name, data) => {
    localStorage.removeItem(name)
    localStorage.setItem(name, JSON.stringify(data))
  },
  // 获取缓存
  localGet: (name) => {
    return JSON.parse(localStorage.getItem(name))
  },
  // 清除缓存
  localRemove: (name) => {
    localStorage.removeItem(name)
  }
}

// 深拷贝：目标的完全拷贝（只要进行了深拷贝，它们老死不相往来，谁也不会影响谁）
let Copy = {
  deepClone: (source) => {
    const targetObj = source.constructor === Array ? [] : {} // 判断复制的目标是数组还是对象
    for (let keys in source) { // 遍历目标
      if (source.hasOwnProperty(keys)) {
        if (source[keys] && typeof source[keys] === 'object') { // 如果值是对象，就递归一下
          targetObj[keys] = source[keys].constructor === Array ? [] : {}
          targetObj[keys] = deepClone(source[keys])
        } else { // 如果不是，就直接赋值
          targetObj[keys] = source[keys]
        }
      }
    }
    return targetObj
  }
}

// type 类型判断
let type = {
  isString: (o) => { // 是否字符串
    return Object.prototype.toString.call(o).slice(8, -1) === 'String'
  },

  isNumber: (o) => { // 是否数字
    return Object.prototype.toString.call(o).slice(8, -1) === 'Number'
  },

  isBoolean: (o) => { // 是否boolean
    return Object.prototype.toString.call(o).slice(8, -1) === 'Boolean'
  },

  isFunction: (o) => { // 是否函数
    return Object.prototype.toString.call(o).slice(8, -1) === 'Function'
  },

  isNull: (o) => { // 是否为null
    return Object.prototype.toString.call(o).slice(8, -1) === 'Null'
  },

  isUndefined: (o) => { // 是否undefined
    return Object.prototype.toString.call(o).slice(8, -1) === 'Undefined'
  },

  isObj: (o) => { // 是否对象
    return Object.prototype.toString.call(o).slice(8, -1) === 'Object'
  },

  isArray: (o) => { // 是否数组
    return Object.prototype.toString.call(o).slice(8, -1) === 'Array'
  },

  isDate: (o) => { // 是否时间
    return Object.prototype.toString.call(o).slice(8, -1) === 'Date'
  },

  isRegExp: (o) => { // 是否正则
    return Object.prototype.toString.call(o).slice(8, -1) === 'RegExp'
  },

  isError: (o) => { // 是否错误对象
    return Object.prototype.toString.call(o).slice(8, -1) === 'Error'
  },

  isSymbol: (o) => { // 是否Symbol函数
    return Object.prototype.toString.call(o).slice(8, -1) === 'Symbol'
  },

  isPromise: (o) => { // 是否Promise对象
    return Object.prototype.toString.call(o).slice(8, -1) === 'Promise'
  },

  isSet: (o) => { // 是否Set对象
    return Object.prototype.toString.call(o).slice(8, -1) === 'Set'
  }
}
// tureOrfalse判断真假
let tureOrfalse = {
  isFalse: (o) => {
    if (!o || o === 'null' || o === 'undefined' || o === 'false' || o === 'NaN') return true
    return false
  },

  isTrue: (o) => {
    return !this.isFalse(o)
  }
}
let iosOrpc = {
  isIos: () => {
    var u = navigator.userAgent
    if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) { // 安卓手机
      // return "Android";
      return false
    } else if (u.indexOf('iPhone') > -1) { // 苹果手机
      // return "iPhone";
      return true
    } else if (u.indexOf('iPad') > -1) { // iPad
      // return "iPad";
      return false
    } else if (u.indexOf('Windows Phone') > -1) { // winphone手机
      // return "Windows Phone";
      return false
    } else {
      return false
    }
  },

  isPC: () => { // 是否为PC端
    var userAgentInfo = navigator.userAgent
    var Agents = ['Android', 'iPhone',
      'SymbianOS', 'Windows Phone',
      'iPad', 'iPod'
    ]
    var flag = true
    for (var v = 0; v < Agents.length; v++) {
      if (userAgentInfo.indexOf(Agents[v]) > 0) {
        flag = false
        break
      }
    }
    return flag
  }
}

let verificationFnc = {
  checkStr: (str, type) => {
    switch (type) {
      case 'phone': // 手机号码
        return /^1[3|4|5|6|7|8|9][0-9]{9}$/.test(str)
      case 'tel': // 座机
        return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(str)
      case 'card': // 身份证
        return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(str)
      case 'pwd': // 密码以字母开头，长度在6~18之间，只能包含字母、数字和下划线
        return /^[a-zA-Z]\w{5,17}$/.test(str)
      case 'postal': // 邮政编码
        return /[1-9]\d{5}(?!\d)/.test(str)
      case 'QQ': // QQ号
        return /^[1-9][0-9]{4,9}$/.test(str)
      case 'email': // 邮箱
        return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(str)
      case 'money': // 金额(小数点2位)
        return /^\d*(?:\.\d{0,2})?$/.test(str)
      case 'URL': // 网址
        return /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/.test(str)
      case 'IP': // IP
        return /((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))/.test(str)
      case 'date': // 日期时间
        return /^(\d{4})\-(\d{2})\-(\d{2}) (\d{2})(?:\:\d{2}|:(\d{2}):(\d{2}))$/.test(str) || /^(\d{4})\-(\d{2})\-(\d{2})$/.test(str)
      case 'number': // 数字
        return /^[0-9]$/.test(str)
      case 'english': // 英文
        return /^[a-zA-Z]+$/.test(str)
      case 'chinese': // 中文
        return /^[\u4E00-\u9FA5]+$/.test(str)
      case 'lower': // 小写
        return /^[a-z]+$/.test(str)
      case 'upper': // 大写
        return /^[A-Z]+$/.test(str)
      case 'HTML': // HTML标记
        return /<("[^"]*"|'[^']*'|[^'">])*>/.test(str)
      default:
        return true
    }
  },
  // 严格的身份证校验
  isCardID: (sId) => {
    if (!/(^\d{15}$)|(^\d{17}(\d|X|x)$)/.test(sId)) {
      alert('你输入的身份证长度或格式错误')
      return false
    }
    // 身份证城市
    var aCity = { 11: '北京', 12: '天津', 13: '河北', 14: '山西', 15: '内蒙古', 21: '辽宁', 22: '吉林', 23: '黑龙江', 31: '上海', 32: '江苏', 33: '浙江', 34: '安徽', 35: '福建', 36: '江西', 37: '山东', 41: '河南', 42: '湖北', 43: '湖南', 44: '广东', 45: '广西', 46: '海南', 50: '重庆', 51: '四川', 52: '贵州', 53: '云南', 54: '西藏', 61: '陕西', 62: '甘肃', 63: '青海', 64: '宁夏', 65: '新疆', 71: '台湾', 81: '香港', 82: '澳门', 91: '国外' }
    if (!aCity[parseInt(sId.substr(0, 2))]) {
      alert('你的身份证地区非法')
      return false
    }

    // 出生日期验证
    var sBirthday = (sId.substr(6, 4) + '-' + Number(sId.substr(10, 2)) + '-' + Number(sId.substr(12, 2))).replace(/-/g, '/')
    var d = new Date(sBirthday)
    if (sBirthday !== (d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate())) {
      alert('身份证上的出生日期非法')
      return false
    }

    // 身份证号码校验
    var sum = 0
    var weights = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
    var codes = '10X98765432'
    for (var i = 0; i < sId.length - 1; i++) {
      sum += sId[i] * weights[i]
    }
    var last = codes[sum % 11] // 计算出来的最后一位身份证号码
    if (sId[sId.length - 1] != last) {
      alert('你输入的身份证号非法')
      return false
    }

    return true
  }
}

let date = {
  /**
     * 格式化时间
     *
     * @param  {time} 时间
     * @param  {cFormat} 格式
     * @return {String} 字符串
     *
     * @example formatTime('2018-1-29', '{y}/{m}/{d} {h}:{i}:{s}') // -> 2018/01/29 00:00:00
     */
  formatTime: (time, cFormat) => {
    if (arguments.length === 0) return null
    if ((time + '').length === 10) {
      time = +time * 1000
    }

    var format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
    var date
    if (typeof time === 'object') {
      date = time
    } else {
      date = new Date(time)
    }

    var formatObj = {
      y: date.getFullYear(),
      m: date.getMonth() + 1,
      d: date.getDate(),
      h: date.getHours(),
      i: date.getMinutes(),
      s: date.getSeconds(),
      a: date.getDay()
    }
    var timeStr = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
      var value = formatObj[key]
      if (key === 'a') return ['一', '二', '三', '四', '五', '六', '日'][value - 1]
      if (result.length > 0 && value < 10) {
        value = '0' + value
      }
      return value || 0
    })
    return timeStr
  },
  /**
     * 返回指定长度的月份集合
     *
     * @param  {time} 时间
     * @param  {len} 长度
     * @param  {direction} 方向：  1: 前几个月;  2: 后几个月;  3:前后几个月  默认 3
     * @return {Array} 数组
     *
     * @example   getMonths('2018-1-29', 6, 1)  // ->  ["2018-1", "2017-12", "2017-11", "2017-10", "2017-9", "2017-8", "2017-7"]
     */
  getMonths: (time, len, direction) => {
    var mm = new Date(time).getMonth()
    var yy = new Date(time).getFullYear()
    var direction = isNaN(direction) ? 3 : direction
    var index = mm
    var cutMonth = function (index) {
      if (index <= len && index >= -len) {
        return direction === 1 ? formatPre(index).concat(cutMonth(++index)) : direction === 2 ? formatNext(index).concat(cutMonth(++index)) : formatCurr(index).concat(cutMonth(++index))
      }
      return []
    }
    var formatNext = function (i) {
      var y = Math.floor(i / 12)
      var m = i % 12
      return [yy + y + '-' + (m + 1)]
    }
    var formatPre = function (i) {
      var y = Math.ceil(i / 12)
      var m = i % 12
      m = m === 0 ? 12 : m
      return [yy - y + '-' + (13 - m)]
    }
    var formatCurr = function (i) {
      var y = Math.floor(i / 12)
      var yNext = Math.ceil(i / 12)
      var m = i % 12
      var mNext = m === 0 ? 12 : m
      return [yy - yNext + '-' + (13 - mNext), yy + y + '-' + (m + 1)]
    }
    // 数组去重
    var unique = function (arr) {
      if (Array.hasOwnProperty('from')) {
        return Array.from(new Set(arr))
      } else {
        var n = {}
        var r = []
        for (var i = 0; i < arr.length; i++) {
          if (!n[arr[i]]) {
            n[arr[i]] = true
            r.push(arr[i])
          }
        }
        return r
      }
    }
    return direction !== 3 ? cutMonth(index) : unique(cutMonth(index).sort(function (t1, t2) {
      return new Date(t1).getTime() - new Date(t2).getTime()
    }))
  },
  /**
     * 返回指定长度的天数集合
     *
     * @param  {time} 时间
     * @param  {len} 长度
     * @param  {direction} 方向： 1: 前几天;  2: 后几天;  3:前后几天  默认 3
     * @return {Array} 数组
     *
     * @example date.getDays('2018-1-29', 6) // -> ["2018-1-26", "2018-1-27", "2018-1-28", "2018-1-29", "2018-1-30", "2018-1-31", "2018-2-1"]
     */
  getDays: (time, len, diretion) => {
    var tt = new Date(time)
    var getDay = function (day) {
      var t = new Date(time)
      t.setDate(t.getDate() + day)
      var m = t.getMonth() + 1
      return t.getFullYear() + '-' + m + '-' + t.getDate()
    }
    var arr = []
    if (diretion === 1) {
      for (var i = 1; i <= len; i++) {
        arr.unshift(getDay(-i))
      }
    } else if (diretion === 2) {
      for (let i = 1; i <= len; i++) {
        arr.push(getDay(i))
      }
    } else {
      for (let i = 1; i <= len; i++) {
        arr.unshift(getDay(-i))
      }
      arr.push(tt.getFullYear() + '-' + (tt.getMonth() + 1) + '-' + tt.getDate())
      for (let i = 1; i <= len; i++) {
        arr.push(getDay(i))
      }
    }
    return diretion === 1 ? arr.concat([tt.getFullYear() + '-' + (tt.getMonth() + 1) + '-' + tt.getDate()]) : diretion === 2 ? [tt.getFullYear() + '-' + (tt.getMonth() + 1) + '-' + tt.getDate()].concat(arr) : arr
  },
  /**
     * @param  {s} 秒数
     * @return {String} 字符串
     *
     * @example formatHMS(3610) // -> 1h0m10s
     */
  formatHMS (s) {
    var str = ''
    if (s > 3600) {
      str = Math.floor(s / 3600) + 'h' + Math.floor(s % 3600 / 60) + 'm' + s % 60 + 's'
    } else if (s > 60) {
      str = Math.floor(s / 60) + 'm' + s % 60 + 's'
    } else {
      str = s % 60 + 's'
    }
    return str
  },
  //    获取某月有多少天
  getMonthOfDay (time) {
    var date = new Date(time)
    var year = date.getFullYear()
    var mouth = date.getMonth() + 1
    var days

    // 当月份为二月时，根据闰年还是非闰年判断天数
    if (mouth === 2) {
      days = (year % 4 === 0 && year % 100 === 0 && year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0) ? 28 : 29
    } else if (mouth === 1 || mouth === 3 || mouth === 5 || mouth === 7 || mouth === 8 || mouth === 10 || mouth === 12) {
      // 月份为：1,3,5,7,8,10,12 时，为大月.则天数为31；
      days = 31
    } else {
      // 其他月份，天数为：30.
      days = 30
    }
    return days
  },
  /* 获取某年有多少天 */
  getYearOfDay: (time) => {
    var firstDayYear = this.getFirstDayOfYear(time)
    var lastDayYear = this.getLastDayOfYear(time)
    var numSecond = (new Date(lastDayYear).getTime() - new Date(firstDayYear).getTime()) / 1000
    return Math.ceil(numSecond / (24 * 3600))
  },

  /* 获取某年的第一天 */
  getFirstDayOfYear: (time) => {
    var year = new Date(time).getFullYear()
    return year + '-01-01 00:00:00'
  },

  /* 获取某年最后一天 */
  getLastDayOfYear: (time) => {
    var year = new Date(time).getFullYear()
    var dateString = year + '-12-01 00:00:00'
    var endDay = this.getMonthOfDay(dateString)
    return year + '-12-' + endDay + ' 23:59:59'
  },

  /* 获取某个日期是当年中的第几天 */
  getDayOfYear: (time) => {
    var firstDayYear = this.getFirstDayOfYear(time)
    var numSecond = (new Date(time).getTime() - new Date(firstDayYear).getTime()) / 1000
    return Math.ceil(numSecond / (24 * 3600))
  },

  /* 获取某个日期在这一年的第几周 */
  getDayOfYearWeek: (time) => {
    var numdays = this.getDayOfYear(time)
    return Math.ceil(numdays / 7)
  }
}

export default {
  Storage,
  Copy,
  verificationFnc,
  type,
  tureOrfalse,
  iosOrpc,
  date
}
