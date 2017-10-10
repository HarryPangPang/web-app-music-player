import jsonp from '../common/js/jsonp'
import {commonParam, option1} from './config'

export function getSingerList () {
  const url = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg'
  for (var i = 1; i < 2; i++) {
    var dataSinger = Object.assign({}, commonParam, {
      channel: 'singer',
      page: 'list',
      key: 'all_all_all',
      pagesize: 100,
      pagenum: i,
      hostUin: 0,
      needNewCode: 0,
      platform: 'yqq',
      g_tk: '1270970352'
    })
    console.log(i)
    jsonp(url, dataSinger, option1)
  }
}
