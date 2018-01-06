<template>
    <div class='discounts'>
        <div class='title'>
            {{select.name}}
        </div>
        <div class='deliveryPrice'>
            <el-rate v-model="select.score" disabled :allow-half=true></el-rate>
        </div>
        <div class='discountsTitle'>
            <span></span>
            <span>优惠信息</span>
            <span></span>
        </div>
        <div class='discountsMain'>
               <ul>
                   <li v-for='(item,index) in select.supports'>
                       <span class='icon' :class='classMap[select.supports[index].type]'></span>
                       <span>{{item.description}}</span>
                   </li>
               </ul>
        </div>
        <div class='notice'>
            <span></span>
            <span>商家公告</span>
            <span></span>
        </div>
        <div class='noticeText'>
            <span>{{select.bulletin}}</span>
        </div>
        <div class='discountsFoot' @click='close'>X</div>
    </div>
</template>

<script>
    export default {
        data(){
          return {
              select:{}
          }
        },
        methods:{
            close (){
               this.$store.commit('ifShowSupports')
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
    .discounts {
        position: absolute;
        z-index: 100;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-color: rgba(7, 17, 27, 0.8);
        padding: px2em(64) px2em(36) px2em(32) px2em(36);
        box-sizing: border-box;
        .title {
            color: #fff;
            font-size:px2em(16);
            text-align: center;
            font-weight: 700;
        }
        .deliveryPrice {
            margin-top: px2em(16);
            text-align: center;
            height: px2em(24);
        }
        .discountsTitle {
            margin-top: px2em(28);
            overflow: hidden;
            span{
                float: left;
                &:nth-child(1){
                    width: px2em(112);
                    height: px2em(1);
                    margin-top: px2em(5.25);
                    background-color: rgba(255, 255, 255, 0.2);
                }
                &:nth-child(2){
                    width: px2em(76);
                    font-size: px2em(12);
                    font-weight: 700;
                    color: #fff;
                    text-align: center;
                }
                &:nth-child(3){
                    float: right;
                    width: px2em(112);
                    height: px2em(1);
                    margin-top: px2em(5.25);
                    background-color: rgba(255, 255, 255, 0.2);
                }
            }

        }
        .discountsMain {
            margin-top: px2em(24);
            ul{
               li{
                   margin-bottom: px2em(12);
                   .icon{
                       margin-left: px2em(12);
                       vertical-align: top;
                       height:px2em(16);
                       width: px2em(16);
                       &.decrease {
                           background: url('/static/img/header/decrease_2@2x.png') no-repeat;
                           background-size: px2em(16) px2em(16);
                       }
                       &.discount{
                           background: url('/static/img/header/discount_2@2x.png') no-repeat;
                           background-size: px2em(16) px2em(16);
                       }
                       &.guarantee{
                           background: url('/static/img/header/guarantee_2@2x.png') no-repeat;
                           background-size: px2em(16) px2em(16);
                       }
                       &.invoice{
                           background: url('/static/img/header/invoice_2@2x.png') no-repeat;
                           background-size: px2em(16) px2em(16);
                       }
                       &.special{
                           background: url('/static/img/header/special_2@2x.png') no-repeat;
                           background-size: px2em(16) px2em(16);
                       }
                   }
                   span {
                       vertical-align: top;
                       height: px2em(16);
                       display: inline-block;
                       margin-left: px2em(6);
                       font-size: px2em(12);
                       color: #fff;
                       line-height: px2em(16);

                   }
               }
            }
        }
        .notice {
            margin-top: px2em(28);
            overflow: hidden;
            span{
                float: left;
                &:nth-child(1){
                    width: px2em(112);
                    height: px2em(1);
                    margin-top: px2em(5.25);
                    background-color: rgba(255, 255, 255, 0.2);
                }
                &:nth-child(2){
                    width: px2em(76);
                    font-size: px2em(12);
                    font-weight: 700;
                    color: #fff;
                    text-align: center;
                }
                &:nth-child(3){
                    float: right;
                    width: px2em(112);
                    height: px2em(1);
                    margin-top: px2em(5.25);
                    background-color: rgba(255, 255, 255, 0.2);
                }
            }

        }
        .noticeText {
            margin-top: px2em(24);
            span {
                color: #fff;
                font-size: px2em(12);
                line-height: px2em(24);
            }
        }
        .discountsFoot {
            position: absolute;
            bottom: px2em(32);
            left: 50%;
            transform: translateX(-50%);
            font-size: px2em(32);
            color: rgba(255,255,255,0.5);
            font-family: "Arial";
        }
    }
</style>