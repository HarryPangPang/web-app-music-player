<template>
  <div class="recommend">
      <div class="swiper-container">
        <div class="swiper-wrapper">
            <div v-for="item in recommendList" class="swiper-slide">
                <a :href="item.linkUrl">
                <img :src="item.picUrl">
              </a>
            </div>
        </div>
		   <div class="swiper-pagination"></div>
        <div class="recommend-list">
          <h1 class="list-title">热门歌单推荐</h1>
        </div>
      </div>
      <div>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
 import {getRecommend} from '../../api/recommend'
 import {errOk} from '../../api/config'
 import Swiper from '../../../static/swiper/swiper.min.js'

export default {
   created () {
     this._getRecommends()
   },
   mounted () {
     this._getLunBo()
   },
   data () {
     return {
       recommendList: []
     }
   },
   methods: {
     _getRecommends () {
       getRecommend().then((res) => {
         if (res.code === errOk) {
           this.recommendList = res.data.slider
         }
       })
     },

     _getLunBo () {
       var mySwiper = new Swiper('.swiper-container', {
         pagination: '.swiper-pagination',
         paginationClickable: true
       })
       console.log(mySwiper)
     }
   }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import '../../../static/swiper/swiper.min.css'
    html, body {
        position: relative;
        height: 100%;
    }
    body {
        background: #eee;
        font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
        font-size: 14px;
        color:#000;
        margin: 0;
        padding: 0;
    }
    .swiper-container {
        width: 100%;
        height: 100%;
    }
    .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;

        /* Center slide text vertically */
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
    }
  .recommend
    position: fixed
    width: 100%
    top: 88px
    bottom: 0
    .recommend-content
      height: 100%
      overflow: hidden
      .slider-wrapper
        position: relative
        width: 100%
        overflow: hidden
      .recommend-list
        .list-title
          height: 65px
          line-height: 65px
          text-align: center
          font-size: $font-size-medium
          color: $color-theme
        .item
          display: flex
          box-sizing: border-box
          align-items: center
          padding: 0 20px 20px 20px
          .icon
            flex: 0 0 60px
            width: 60px
            padding-right: 20px
          .text
            display: flex
            flex-direction: column
            justify-content: center
            flex: 1
            line-height: 20px
            overflow: hidden
            font-size: $font-size-medium
            .name
              margin-bottom: 10px
              color: $color-text
            .desc
              color: $color-text-d
      .loading-container
        position: absolute
        width: 100%
        top: 50%
        transform: translateY(-50%)
</style>