import jsonp from '../common/js/jsonp'
import {commonParam, option1} from './config'

export function getRecommend () {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'

  const data = Object.assign({}, commonParam, {
    platform: 'h5',
    needNewCode: 1,
    uin: 0,
    _: 1506307808009
  })
  return jsonp(url, data, option1)
}
