<template>
    <div class='shop'>
        <div class='shopleft' ref='meunScroll'>
            <ul>
                <li v-for='(item,index) in goods' @click='addActive(index,$event)' :class='{"active":currentIndex==index }'>
                   <div class='iconBox'>
                       <span class='iconText'><i v-if='item.type>=0' class='icon' :class='classMap[goods[index].type]'></i>{{item.name}}</span>
                   </div>
                </li>
            </ul>
        </div>
        <div class='shopRight' ref='foodsScroll'>
            <div class='shopScroll'>
                <div v-for='item in goods' class='shopRightBox goods-list-hook'>
                    <div class='boxName'>{{item.name}}</div>
                    <div class='boxList' v-for='(list,index) in item.foods' :key='item.foods.id'>
                        <div class='listImg'>
                            <img :src='list.icon' alt="">
                        </div>
                        <div class='listMain'>
                            <div class='mainName'>{{list.name}}</div>
                            <div class='mainRating'>
                                <span>月售{{list.sellCount}}份</span>
                                <span>好评{{list.rating}}%</span>
                            </div>
                            <div class='price'>
                                <span class='newPrice'><i>￥</i>{{list.price}}</span>
                                <s class='oldPrice' v-if='list.oldPrice'><i>￥</i>{{list.oldPrice}}</s>
                            </div>
                        </div>
                        <div class='ifPush'>
                            <shop-icon :list=list :goods-select='goods'></shop-icon>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import BSscroll from 'better-scroll'

    import shopIcon from '../shopicon/shopicon'
    export default {
        data (){
          return {
              goods:{},
              listHeight:[],
              scrollY:0,
          }
        },
        computed:{
          currentIndex (){
              for (let i=0; i<this.listHeight.length; i++){
                  let height1 = this.listHeight[i]
                  let height2 = this.listHeight[i+1]
                  if(!height2 || (this.scrollY>=height1 && this.scrollY<height2)){
                        return i
                  }
              }

          }
        },
        methods:{
            addActive (index,event){
                if(!event._constructed){
                    return
                }
                var el = this.$refs.foodsScroll.getElementsByClassName('goods-list-hook')
                var el1 = el[index]

                this.foodsScroll.scrollToElement(el1,300)
            },
            _initScroll (){
                this.meunScroll = new BSscroll(this.$refs.meunScroll,{
                    click:true
                });
                this.foodsScroll =  new BSscroll(this.$refs.foodsScroll,{
                    click:true,
                    probeType:3
                });
                this.foodsScroll.on('scroll',(pos)=>{
                    this.scrollY = Math.abs(Math.round(pos.y))
                })
            },
            _calculateHe (){
                let goodsList = this.$refs.foodsScroll.getElementsByClassName('goods-list-hook')
                let height= 0 ;
                this.listHeight.push(height)
                for (var i=0;i<goodsList.length;i++){
                    height+=goodsList[i].clientHeight
                    this.listHeight.push(height)
                }
            }
        },
        created (){
            this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
            this.$ajax({
                method:'get',
                url:'/static/data.json'
            }).then((rsp)=>{
                this.goods=rsp.data.goods
                this.$nextTick(()=>{
                    this._initScroll();
                    this._calculateHe()
                })
            })
        },
        components:{
            shopIcon,
        }
    }
</script>

<style scoped lang='scss'>
@import "../../../static/css/conmon";
    .shop {
        position: absolute;
        height: 100%;
        width: 100%;
        overflow: hidden;
        display: flex;
        .shopleft {
            width: px2em(80);
            flex: 0 0 px2em(80);
            background-color: #f3f5f7;
            ul {
                li {
                    .iconBox{
                        width: px2em(56);
                        height: px2em(54);
                        display: table;
                        line-height: px2em(54);
                        padding: 0 px2em(12);
                        .iconText {
                            font-size: px2em(12);
                            line-height: px2em(14);
                            vertical-align: middle;
                            width: px2em(56);
                            display: table-cell;
                            position: relative;
                            &:after {
                                display: block;
                                position: absolute;
                                left: 0;
                                bottom: 0;
                                width: 100%;
                                border-top: 1px solid rgba(7,17,27,0.1);
                                content: '';
                            }
                        }
                        .icon {
                            display: inline-block;
                            vertical-align: top;
                            width: 12px;
                            height: 12px;
                            margin-right: 2px;
                            &.decrease {
                                width: px2em(12);
                                height: px2em(12);
                                background: url('/static/img/header/decrease_2@2x.png') no-repeat;
                                background-size: px2em(12) px2em(12);
                            }
                            &.discount{
                                width: px2em(12);
                                height: px2em(12);
                                background: url('/static/img/header/discount_2@2x.png') no-repeat;
                                background-size: px2em(12) px2em(12);
                            }
                            &.guarantee{
                                width: px2em(12);
                                height: px2em(12);
                                background: url('/static/img/header/guarantee_2@2x.png') no-repeat;
                                background-size: px2em(12) px2em(12);
                            }
                            &.invoice{
                                width: px2em(12);
                                height: px2em(12);
                                background: url('/static/img/header/invoice_2@2x.png') no-repeat;
                                background-size: px2em(12) px2em(12);
                            }
                            &.special{
                                width: px2em(12);
                                height: px2em(12);
                                background: url('/static/img/header/special_2@2x.png') no-repeat;
                                background-size: px2em(12) px2em(12);
                            }
                        }
                    }

                }
                .active {
                    position: relative;
                    z-index: 10;
                    margin-top: -1px;
                    background: #fff;
                    .iconBox {
                       .iconText {
                           font-weight: 700;
                           &:after {
                               display: none;
                           }
                       }
                    }
                }
            }
        }
        .shopRight {
            flex: 1;
            .shopRightBox {
                .boxName {
                    height: px2em(26);
                    background-color: #f3f5f7;
                    line-height: px2em(26);
                    border-left: px2em(2) solid #d9dde1;
                    color: rgb(147,153,159);
                    font-size: px2em(12);
                    padding-left: px2em(14);
                }
                .boxList {
                    padding: px2em(18);
                    box-sizing: border-box;
                    overflow: hidden;
                    position: relative;
                    .listImg {
                        float: left;
                        img {
                            display: inline-block;
                            height: px2em(56);
                            width: px2em(56);
                        }
                    }
                    .listMain {
                        float: left;
                        margin-left: px2em(10);
                        .mainName {
                            font-size: px2em(14);
                            color: rgb(7,17,27);
                        }
                        .mainRating {
                            margin-top: px2em(8);
                            span {
                                font-size: px2em(10);
                                color: rgb(147,153,159);
                                margin-right: px2em(12);
                            }
                        }
                        .price {
                            margin-top: px2em(8);
                            .newPrice{
                                font-size: px2em(14);
                                color: rgb(240,20,20);
                                font-weight: 700;
                                i {
                                    font-style: normal;
                                    font-size: px2em(10);
                                }
                            }
                            .oldPrice {
                                font-size: px2em(10);
                                color: rgb(147,153,159);
                                font-weight: 700;
                                i {
                                    font-style: normal;
                                    font-size: px2em(10);
                                }
                            }
                        }
                    }
                    .ifPush {
                        position: absolute;
                        bottom: px2em(14);
                        right: px2em(14);
                    }
                }
            }
        }
    }
</style>