/*
* @description:  组件公共方法
* @author:  Shirley(hztanxuewei@corp.netease.com)
* @createTime:  2017-06-07, 11:00:44
*/
import dateUtil from './date'

export function extend (o1, o2) {
  for (let key in o2) {
    o1[key] = o2[key]
  }
  return o1
}
export const DAY_DURATION = 86400000
/*
 * 获取某个月有多少天
 * @param year 年份
 * @param month 月份
 */
export function getDayCountOfMonth (year, month) {
  if (month === 3 || month === 5 || month === 8 || month === 10) {
    return 30
  }
  if (month === 1) {
    return (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) ? 29 : 28
  }
  return 31
}
/*
 * 获取某个月的第一天
 * @param date 日期对象
 */
export function getFirstDayOfMonth (date) {
  let temp = new Date(date.getTime())
  temp.setDate(1)
  return temp.getDay()
}