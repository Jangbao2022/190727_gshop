<template>
  <!--首页外卖-->
  <section class="msite">
    <!--首页头部-->
    <HeaderTop title="十堰竹溪">
      <span slot="left" class="header_search">
        <i class="iconfont iconsousuo"></i>
      </span>
      <span slot="right" class="header_login">
       <span class="header_login_text">登录|注册</span>
      </span>
    </HeaderTop>
    <!--首页导航-->
    <shop-nav></shop-nav>
    <!--首页附近商家-->
    <div class="msite_shop_list">
      <div class="shop_header">
        <i class="iconfont iconliebiao1"></i>
        <span class="shop_header_title">附近商家</span>
      </div>
      <!--商家列表-->
      <ShopList></ShopList>
    </div>
  </section>
</template>

<script>
  import HeaderTop from '../../components/HeaderTop/HeaderTop'
  import ShopNav from '../../components/ShopNav/ShopNav'
  import ShopList from '../../components/ShopList/ShopList'

  export default {
    components: {
      HeaderTop,
      ShopNav,
      ShopList,
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

  .msite //首页
    width 100%
    .header
      background-color #02a774
      position fixed
      z-index 100
      left 0
      top 0
      width 100%
      height 45px

      .header_search
        position absolute
        left 15px
        top 50%
        transform translateY(-50%)
        width 10%
        height 50%

        .icon-sousuo
          font-size 25px
          color #fff

      .header_title
        position absolute
        top 50%
        left 50%
        transform translate(-50%, -50%)
        width 50%
        color #fff
        text-align center

        .header_title_text
          font-size 20px
          color #fff
          display block

      .header_login
        font-size 14px
        color #fff
        position absolute
        right 15px
        top 50%
        transform translateY(-50%)

        .header_login_text
          color #fff



  .msite_shop_list
    top-border-1px(#e4e4e4)
    margin-top 10px
    background #fff

    .shop_header
      padding 10px 10px 0

      .shop_icon
        margin-left 5px
        color #999

      .shop_header_title
        color #999
        font-size 14px
        line-height 20px

</style>
