<template>
    <div class='main'>
        <div class='mainNav'>
          <div class='tab-item'>
              <router-link to='/' exact>商品</router-link>
          </div>
         <div class='tab-item'>
             <router-link to='/goods'>评价</router-link>
         </div>
         <div class='tab-item'>
             <router-link to='/shops'>商家</router-link>
         </div>
        </div>
        <div class='mainContent'>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped lang='scss'>
    @import "../../../static/css/conmon";
.main {
    position: absolute;
    top: px2em(134);
    left: 0;
    width: 100%;
    .mainNav {
        height: px2em(40);
        width: 100%;
        line-height: px2em(40);
        display: flex;
        .tab-item {
            flex: 1;
            text-align: center;
            font-size: px2em(14);
            a{
                color: rgb(77,85,93);
            }
            .active {
                color: rgb(240,20,20);
            }
        }
    }
    .mainContent {
        height:px2em(446);
        position: absolute;
        top: px2em(40);
        left: 0;
        width: 100%;
        border-top: px2em(1) solid rgba(7,17,27,0.1);
    }
}
</style>