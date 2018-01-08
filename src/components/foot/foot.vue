<template>
    <div class='foot'>
        <div class='footCar'>
            <div class='footLeft'>
                <div class='icon'>
                    <div class='logo' :class="{'changeColor':totalCount>0}">
                        <i class='iconfont icon-gouwuche1' :class="{'changeColor':totalCount>0}"></i>
                    </div>
                    <div class='num' v-if='totalPrices!=0'>{{totalCount}}</div>
                </div>
                <div class='price' :class='{"changePrice":totalPrices>0}'>￥{{totalPrices}}</div>
                <div class='text'>另需配送￥{{select.deliveryPrice}}元</div>
            </div>
            <div class='footRight' :class='{"changeColor":totalPrices>=this.select.minPrice}'>
                <div class='pay'>{{payDesc}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        computed:{
            select (){
                return this.$store.state.select
            },
            selectFoods (){
                return this.$store.state.totalPrice
            },
            //总价格
            totalPrices (){
                let newprice = 0
                for(let i=0;i<this.selectFoods.length;i++){
                    newprice+= this.selectFoods[i].price * this.selectFoods[i].count
                }
                return newprice
            },
            //结算状态
            payDesc (){
                if(this.totalPrices === 0){
                    return '￥'+this.select.minPrice+'元起送'
                }else if(this.totalPrices < this.select.minPrice ){
                    let priceSpread = this.select.minPrice - this.totalPrices
                    return '还差￥' + priceSpread + '元'
                }else {
                    return '去结算'
                }
            },
            //商品总数
            totalCount (){
                let count = 0
                for(let i=0;i<this.selectFoods.length;i++){
                    count+= this.selectFoods[i].count
                }
                return count
            }
        }
    }
</script>

<style scoped lang='scss'>
    @import "../../../static/css/conmon";
    @import "../../assets/icon/icon/iconfont.css";
    .foot {
        position: fixed;
        bottom: 0;
        left: 0;
        height: px2em(48);
        width: 100%;
        z-index: 50;
        color:rgba(255, 255, 255, 0.4);
        .footCar {
            display: flex;
            font-size: 0;
            color: rgba(255, 255, 255, 0.4);
            .footLeft {
                flex: 1;
                background-color: #141d27;
                .icon {
                    display: inline-block;
                    vertical-align: top;
                    position: relative;
                    top: px2em(-10);
                    margin: 0 px2em(12);
                    padding: px2em(6);
                    width:px2em(56);
                    height: px2em(56);
                    box-sizing: border-box;
                    border-radius: 50%;
                    background: #141d27;
                    .logo {
                        width: 100%;
                        height: 100%;
                        border-radius: 50%;
                        text-align: center;
                        background: #2b343c;
                        .iconfont {
                            line-height: px2em(44);
                            font-size: px2em(24);
                            color: #80858a;
                        }
                        .changeColor {
                            color: #fff;
                        }
                    }
                    .changeColor{
                        background-color: #00a0dc;
                    }

                    .num {
                        position: absolute;
                        top: 0;
                        right: 0;
                        width: px2em(24);
                        height: px2em(16);
                        line-height: px2em(16);
                        text-align: center;
                        border-radius: px2em(16);
                        font-size: px2em(9);
                        font-weight: 700;
                        color: #fff;
                        background: rgb(240, 20, 20);
                        box-shadow: 0 px2em(4) px2em(8) 0 rgba(0, 0, 0, 0.4);
                    }
                }
                .price {
                    display: inline-block;
                    vertical-align: top;
                    margin-top: px2em(12);
                    line-height: px2em(24);
                    padding-right: px2em(12);
                    box-sizing: border-box;
                    border-right: px2em(1) solid rgba(255, 255, 255, 0.1);
                    font-size: px2em(16);
                    font-weight: 700;
                }
                .changePrice {
                    color: #ffffff;
                }
                .text {
                    display: inline-block;
                    vertical-align: top;
                    margin: px2em(12) 0 0 px2em(12);
                    line-height: px2em(24);
                    font-size: px2em(10);
                }
            }
            .footRight {
                flex: 0 0 px2em(105);
                width: px2em(105);
                background-color: #2b333b;
                .pay {
                    height: px2em(48);
                    text-align: center;
                    font-size: px2em(12);
                    line-height: px2em(48);
                    font-weight: 700;
                }
            }
            .changeColor {
                background-color: #00b43c;
                color: #ffffff;
            }
        }
    }
</style>