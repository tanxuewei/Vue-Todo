/*
* @description:  接口
* @author:  Shirley(hztanxuewei@corp.netease.com)
* @createTime:  2017-05-16, 11:08:44
*/
import * as request from '@/base/request'

const urlfix = '/static/json'

export function getJson () {
  return request.get(urlfix + '/test.json', {})
}
export function getJson1 () {
  return request.get(urlfix + '/test1.json', {})
}