/**
 * 公共方法封装
 */

//缓存工具类 Storage
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
};

//深拷贝：目标的完全拷贝（只要进行了深拷贝，它们老死不相往来，谁也不会影响谁）
let Copy = {
    deepClone: (source) => {
        const targetObj = source.constructor === Array ? [] : {}; // 判断复制的目标是数组还是对象
        for (let keys in source) { // 遍历目标
            if (source.hasOwnProperty(keys)) {
                if (source[keys] && typeof source[keys] === 'object') { // 如果值是对象，就递归一下
                    targetObj[keys] = source[keys].constructor === Array ? [] : {};
                    targetObj[keys] = deepClone(source[keys]);
                } else { // 如果不是，就直接赋值
                    targetObj[keys] = source[keys];
                }
            }
        }
        return targetObj;
    }
};

//验证
let verificationFnc = {
    //身份证正则
    IDReg: /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}[0-9Xx]$)/,
    //检测设备类型
    detectDeviceType: () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|OperaMini/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop',
    //将数字转化为千分位格式
    toDecimalMark: num => num.toLocaleString('en-US'),
    //RGB 颜色转 16进制颜色
    RGBToHex: (r, g, b) => ((r << 16) + (g << 8) + b).toString(16).padStart(6, '0'),
    //判断dom元素是否具有某个className
    hasClass: (el, className) => new RegExp(`(^|\\s)${className}(\\s|$)`).test(el.className)
};

export {
    Storage,
    Copy,
    verificationFnc
}