<template>
   <div class='header'>
      <img class='backgroundImg' :src="select.avatar" alt="">
      <div class='headerBox'>
         <div class='headerImage'>
            <img :src="select.avatar">
         </div>
         <div class='headerMain'>
            <div class=mainTop>
               <img src="/static/img/header/brand@2x.png" alt="">
               <span class='headerName'>{{select.name}}</span>
            </div>
            <div class='description'>{{select.description}} / {{select.deliveryTime}}分钟送达</div>
            <div class='MainButton' v-for='(item,index) in select.supports' v-if='index==0'>
               <span class='icon' :class="classMap[select.supports[index].type]"></span>
               <span class='iconTitle'>{{item.description}}</span>
            </div>
         </div>
         <div class='supports' v-if='select.supports' @click='showSupports'>
            <span>{{select.supports.length}}个</span>
            <i>></i>
         </div>
      </div>
      <div class='bulletin'>
         <img src="/static/img/header/bulletin@2x.png" alt="">
         <div>{{select.bulletin}}</div>
         <span>></span>
      </div>
   </div>
</template>

<script>
    export default {
        data(){
            return {
                isShow:false,
                select:{}
            }
        },
        methods: {
            showSupports(){
               this.$store.commit('ifShowSupports',!this.isShow)
            }
        },
        created(){
            this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
            this.$ajax({
                method:'get',
                url:'/static/data.json'
            }).then( (rsp)=> {
                this.select=rsp.data.seller
            })
        }
    }
</script>

<style scoped lang='scss'>
   @import "../../../static/css/conmon";
   .header {
      position: relative;
      height: px2em(134);
      overflow: hidden;
      .backgroundImg {
         position: absolute;
         height: 100%;
         width: 100%;
         top: 0;
         left: 0;
         z-index: -1;
         filter: blur(10px);
      }
   }
   .bulletin {
      height: px2em(28);
      background-color: rgba(7,17,27,0.2);
      padding: 0 px2em(18) 0 px2em(34);
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      position: relative;
      img {
         position: absolute;
         top: 50%;
         transform: translateY(-50%);
         left:px2em(12);
         height: px2em(12);
         width: px2em(22);
      }
      div {
         height: px2em(28);
         margin-left: px2em(4);
         font-size: px2em(10);
         line-height: px2em(28);
         text-overflow:ellipsis;
         overflow: hidden;
         white-space: nowrap;
         color: #fff;
      }
      span {
         position: absolute;
         right: px2em(12);
         top: 50%;
         transform: translateY(-50%);
         color: #fff;
         font-family: monospace;
         font-weight: 800;
         font-size: px2em(10);
      }
   }
   .headerBox {
      height: px2em(106);
      width: 100%;
      background-color: rgba(7, 17, 27, 0.5);
      padding: px2em(24) px2em(12) 0 px2em(24);
      box-sizing: border-box;
      .headerImage {
         height:px2em(64);
         width: px2em(64);
         float: left;
         border-radius: px2em(4);
         overflow: hidden;
         img {
            height: 100%;
            width: 100%;
         }
      }
      .headerMain {
         margin-left: px2em(16);
         float: left;
         .mainTop {
            margin-top: px2em(2);
            img {
               height: px2em(18);
               width: px2em(30);
               vertical-align: middle;
            }
            .headerName {
               margin-left: px2em(6);
               font-size: px2em(16);
               font-weight: bold;
               color: white;
               vertical-align: middle;
            }
         }
         .description {
            font-size: px2em(12);
            font-weight: 200;
            margin-top: px2em(8);
            color: white;
         }
         .MainButton {
            margin-top: px2em(10);
            .icon {
               height: px2em(12);
               width: px2em(12);
               display: inline-block;
               vertical-align: middle;
               &.decrease {
                  background: url('/static/img/header/decrease_1@2x.png') no-repeat;
                  background-size: px2em(12) px2em(12);
               }
               &.discount{
                  background: url('/static/img/header/discount_1@2x.png') no-repeat;
                  background-size: px2em(12) px2em(12);
               }
               &.guarantee{
                  background: url('/static/img/header/guarantee_1@2x.png') no-repeat;
                  background-size: px2em(12) px2em(12);
               }
               &.invoice{
                  background: url('/static/img/header/invoice_1@2x.png') no-repeat;
                  background-size: px2em(12) px2em(12);
               }
               &.special{
                  background: url('/static/img/header/special_1@2x.png') no-repeat;
                  background-size: px2em(12) px2em(12);
               }
            }
            .iconTitle {
               font-size: px2em(10);
               font-weight: 200;
               margin-top: px2em(8);
               color: white;
               vertical-align: middle;
               margin-left: px2em(4);
            }
         }
      }
      .supports {
         float: right;
         width: px2em(46);
         height: px2em(24);
         background-color: rgba(0,0,0,0.2);
         border-radius: px2em(14);
         margin-top: px2em(40);
         padding: px2em(4) px2em(8);
         box-sizing: border-box;
         cursor: pointer;
         span {
            font-size: px2em(10);
            color: white;
         }
         i {
            font-size: px2em(10);
            color: white;
            font-style: normal;
            font-family: monospace;
            font-weight: 800;
         }
      }
   }
</style>