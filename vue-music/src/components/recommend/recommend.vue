<template>
  <div class="recommend">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in recommendList">
            <img :src="item.picUrl" :style="{width: currentClientWidth +'px'}">
        </div>
      </div>
            <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
      <!-- 如果需要导航按钮 -->
      <!-- <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div> -->
    </div>
      <div class="recommend-list">
        <h1 class="list-title">热门歌单推荐</h1>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
 import {getRecommend} from '../../api/recommend'
 import {errOk} from '../../api/config'
 import Swiper from '../../../static/swiper-3.3.1.min.js'
 require('../../../static/swiper-3.3.1.min.css')
 
export default {
   created () {
     this._getClientWidth()
   },
   mounted () {
     this._getRecommends()
     console.log('挂载好了')
     setTimeout(function () {
       var mySwiper = new Swiper('.swiper-container', {
         pagination: '.swiper-pagination',
         paginationClickable: true,
         spaceBetween: 30,
         centeredSlides: true,
         autoplay: 2000,
         autoplayDisableOnInteraction: false
       })
       console.log(mySwiper)
     }, 2000)
   },
   data () {
     return {
       recommendList: [],
       currentClientWidth: ''
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
     _getClientWidth () {
       this.currentClientWidth = document.body.clientWidth
     }
   }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

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