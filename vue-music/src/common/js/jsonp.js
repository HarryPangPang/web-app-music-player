// 二次封装jsonp
import originJsonp from 'jsonp'
export default function jsonp (url, data, option) {
  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)
  return new Promise((resolve, reject) => {
    originJsonp(url, option, (err, data) => {
      if (!err) {
        // 成功抛出数据
        resolve(data)
      } else {
        // 失败抛出错误
        reject(err)
      }
    })
  })
  function param (data) {
    let url = ''
    for (var k in data) {
      let value = data[k]
      url += `&${k}=${encodeURIComponent(value)}`
    }
    return url ? url.substring(1) : ''
  }
}
