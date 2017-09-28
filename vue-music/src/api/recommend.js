import jsonp from '../common/js/jsonp'
import {commonParam, option1} from './config'
import axios from 'axios'

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

// 使用axios请求获取歌单列表
export function getDissLists () {
  const url = '/api/getDissLists'
  const data = Object.assign({}, commonParam, {
    rnd: Math.random(),
    loginUin: 0,
    hostUin: 0,
    platform: 'yqq',
    needNewCode: 0,
    categoryId: 10000000,
    sortId: 5,
    sin: 0,
    ein: 29,
    format: 'json'
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
