<template>
    <div class='shopicon'>
       <transition name='fade' mode='out-in'>
           <div class='subNum iconfont icon-jian' v-if='list.count>0' @click.stop.prevent='minusNum'></div>
       </transition>
       <div class='shopNum' v-if='list.count>0'>{{list.count}}</div>
       <div class='addNum iconfont icon-jia' @click.stop.prevent='pushNum'></div>
    </div>
</template>

<script>
    import Vue from 'vue'
    export default {
        props:{
            list :{
                type:Object
            },
            goodsSelect:{}
        },
        computed:{
            priceArray(){
                let arr = []
                this.goodsSelect.forEach((t)=>{
                    t.foods.forEach((price)=>{
                        if(price.count){
                            arr.push(price)
                        }
                    })
                })
                return arr
            }
        },
        methods:{
            minusNum(event){
                if(!event._constructed){
                    return
                }
                if (this.list.count){
                    this.list.count--
                }
                this.$store.commit('addTotalPrice',this.priceArray)
            },
            pushNum (event) {
                if (!event._constructed) {
                    return
                }

                if (!this.list.count){
                    Vue.set(this.list,'count',1)
                }else {
                    this.list.count++
                }
                this.$store.commit('addTotalPrice',this.priceArray)
            },
        }

    }
</script>

<style scoped lang='scss'>
    @import "../../../static/css/conmon";
    @import "../../assets/icon/icon/iconfont.css";
    .shopicon {
        div {
            text-align: center;
            float: left;
        }
        .subNum {
            font-size: px2em(24);
            color: #00a0dc;
        }
        .shopNum {
            width: px2em(24);
            height: px2em(24);
            font-size: px2em(10);
            line-height: px2em(24);
            color: rgb(147,153,159);
        }
        .addNum {
            font-size: px2em(24);
            color: #00a0dc;
            float: right;
        }
    }
    .fade-enter-active, .fade-leave-active {
        transition: all 0.5s linear;
    }
    .fade-enter {
        opacity: 0;
        transform: translate3d(0,0,0);
    }
    .fade-enter-to {
        opacity: 1;
    }
    .fade-leave {
        opacity: 1;
    }
    .fade-leave-to {
        opacity: 0;
        transform: translate3d(0,0,0);
    }
</style>