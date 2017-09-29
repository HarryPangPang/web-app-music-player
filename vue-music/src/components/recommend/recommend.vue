<template>
  <div class="recommend">
    <scroll ref="scroll" :data="dissLists">
      <div>
    <div class="swiper-container recommend-content">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in recommendList">
          <a :href="item.linkUrl">
            <img :src="item.picUrl" :style="{width: currentClientWidth +'px'}">
          </a>
        </div>
      </div>
            <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
      <!-- 如果需要导航按钮 -->
      <!-- <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div> -->
    </div>
    <div class="recommend-content" >
      <div>
      <div class="recommend-list">
        <h1 class="list-title">热门歌单推荐</h1>
          <ul class="content">
            <li v-for="item in dissLists" class="item">
              <div class="icon">
                <img width="60" height="60" :src="item.imgurl">
              </div>
              <div class="text">
                <h2 class="name" v-text="item.creator.name"></h2>
                <p class="desc" v-text="item.dissname"></p>
              </div>
            </li>
          </ul>
      </div>
      </div>
    </div>
      </div>
    </scroll>
  </div>
</template>

<script type="text/ecmascript-6">
 import {getRecommend, getDissLists} from '../../api/recommend'
 import {errOk} from '../../api/config'
 import Swiper from '../../../static/swiper-3.3.1.min.js'
 require('../../../static/swiper-3.3.1.min.css')
 import scroll from '../../base/scroll/scroll'
 
export default {
   components: {
     scroll
   },
   created () {
     this._getClientWidth()
   },
   mounted () {
     this._getRecommends()
     this._getDissLists()
    //  console.log('挂载好了')
     setTimeout(function () {
       var mySwiper = new Swiper('.swiper-container', {
         pagination: '.swiper-pagination',
         paginationClickable: true,
         spaceBetween: 30,
         centeredSlides: true,
         autoplay: 2000,
         autoplayDisableOnInteraction: false,
         loop: true
       })
       return mySwiper
     }, 2000)
   },
   data () {
     return {
       recommendList: [],
       dissLists: [],
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
    //  获取歌单列表
     _getDissLists () {
       getDissLists().then((res) => {
         if (res.code === errOk) {
           this.dissLists = res.data.list
          //  console.log(this.dissLists)
         }
       })
     },
     _getClientWidth () {
       this.currentClientWidth = document.body.clientWidth
     }
   },
  //  清理计时器，有利于内存释放
   destroyed () {
     clearTimeout(this.timer)
   }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .recommend
    // position: fixed
    width: 100%
    top: 88px
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
          height: 83px
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