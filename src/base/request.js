/*
* @description:  request
* @author:  Shirley(hztanxuewei@corp.netease.com)
* @createTime:  2017-05-02, 10:19:10
*/
import 'whatwg-fetch'

/**
 * @method request 请求
 * @param {string}                  url                 请求路径
 * @param {object}                  options             请求选项
 * @param {boolean=true}            options.data        请求数据
 * @param {string}                  options.method      请求方式
 */
const request = function (url, options = {}) {
  const opt = {
    credentials: 'same-origin', // send cookie
    headers: {
      'Accept': 'application/json'
    }
  }
  const isJSON = typeof options.data === 'object';
  isJSON && (opt.headers['Content-Type'] = 'application/json');
  opt.method = (options.method || 'GET').toUpperCase()
  if (options.data && isJSON) {
    switch (opt.method) {
      case 'GET':
      case 'DELETE':
        url += '?' + serialize(options.data)
        break
      case 'POST':
      case 'PUT':
        opt.body = JSON.stringify(options.data)
        break
      default:
        throw new Error('No `method` when request!')
    }
  } else {
    opt.body = options.data
  }
  return new Promise((resolve, reject) => {
    fetch(url, opt)
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          return {
            'code': res.status,
            'message': '服务端异常!'
          }
          // console.log("Looks like the response wasn't perfect, got status", res.status);
          // throw new Error(res.status);
        }
      }).then((json) => {
        if (json.code === 200) {
          resolve(json.data)
        } else {
          reject(json)
        }
      }).catch((err) => {
        console.error('Request failed:', err)
      })
  })
}
const serialize = function (obj) {
  return Object.keys(obj).map((name) =>
        `${name}=${obj[name]}`).join('&')
}
/**
 * @method request GET请求
 * @param {string}                  url                 请求路径
 * @param {var}                     data                请求数据
 */
export function get (url, data = {}, timestamp = true) {
  if (timestamp) {
    data = data || {}
    data.timestamp = +new Date()
  }
  return request(url, {method: 'GET', data})
}
/**
 * @method request POST请求
 * @param {string}                  url                 请求路径
 * @param {var}                     data                请求数据
 */
export function post (url, data, type) {
  return request(url, {method: 'POST', data, type})
}

/**
 * @method request PUT请求
 * @param {string}                  url                 请求路径
 * @param {var}                     data                请求数据
 */
export function put (url, data) {
  return request(url, {method: 'PUT', data})
}

/**
 * @method request DEL请求
 * @param {string}                  url                 请求路径
 * @param {var}                     data                请求数据
 */
export function del (url, data) {
  return request(url, {method: 'DELETE', data})
}
