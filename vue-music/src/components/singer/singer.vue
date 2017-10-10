<template>
  <div class="singer">

  </div>
</template>

<script type="text/ecmascript-6">
  import {getSingerList} from '../../api/singer'
  import {errOk} from '../../api/config'
  const HOT_SINGER_LEN = 10
  const HOT_NAME = '热门'
  export default {
    created () {
      this._getSingerList()
    },
    data () {
      return {
        singerList: []
      }
    },
    methods: {
      _getSingerList () {
        getSingerList().then((res) => {
          if (res.code === errOk) {
            this.singerList = res.data.list
            // console.log(this.singerList.length)
          }
        })
      },
      _normalLizeSinger (list) {
        let map = {
          hot: {
            title: HOT_NAME,
            items: []
          }
        }
        list.foreach((item, index) => {
          if (index < HOT_SINGER_LEN) {
            map.hot.items.push({
              id: item.Fsinger.mid,
              name: item.Fsinger.name,
              avatar: `https://y.gtimg.cn/music/photo_new/T001R300x300M000${item.Fsinger.mid}.jpg?max_age=2592000`
            })
          }
          const key = item.Findex
          if (!map[key]) {
            map[key] = {
              title: key,
              items: []
            }
          }
          map[key].items.push({
            id: item.Fsinger.mid,
            name: item.Fsinger.name,
            avatar: `https://y.gtimg.cn/music/photo_new/T001R300x300M000${item.Fsinger.mid}.jpg?max_age=2592000`
          })
        })
        // 为了得到有序列表，需要处理map
        let ret = []
        let hot = []
        for (let key in map) {
          let val = map[key]
          if (val.title.match(/[a-zA-Z]/)) {
            ret.push(val)
          } else if (val.title === HOT_NAME) {
            hot.push(val)
          }
        }
        ret.sort((a, b) => {
          return a.title.charCodeAt(0) - b.title.charCodeAt(0)
        })
        return hot.concat(ret)
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .singer
    position: fixed
    top: 88px
    bottom: 0
    width: 100%
</style>