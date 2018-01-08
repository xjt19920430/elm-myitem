<template>
    <div class='goodselect'>
        <div class='goodsBottomNav'>
            <div class='navRouter'>
                <router-link to='/goods' exact>全部<i>{{select.ratingCount}}</i></router-link>
                <router-link to='/goods/yes' exact>满意<i>{{ratingsTrue}}</i></router-link>
                <router-link to='/goods/no' exact>不满意<i>{{ratingsFalse}}</i></router-link>
            </div>
            <div class='trueRating' @click='contextShow'>
                <span class='icon iconfont icon-duihao' :class='{"changeColor":unOFF}'></span>
                <span class='iconText'>只看有内容的评价</span>
            </div>
        </div>
        <div class='select'>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'

    export default {
        data() {
            return {
                elmObj: [],
                select: {}
            }
        },
        computed: {
            ratingsTrue() {
                let trueArr = this.elmObj.filter((t) => t.rateType === 0)
                return trueArr.length
            },
            ratingsFalse() {
                let trueArr = this.elmObj.filter((t) => t.rateType !== 0)
                return trueArr.length
            },
            unOFF() {
                this.$store.state.unOFF
            }
        },
        methods: {
            contextShow() {
                this.$store.commit('contextShow')
            }
        },
        created() {
            this.$ajax({
                method: 'get',
                url: '/static/data.json'
            })
                .then((respone) => {
                    this.elmObj = respone.data.ratings
                    this.select = respone.data.seller
                })
        }
    }
</script>

<style scoped lang='scss'>
    @import "../../../static/css/conmon";
    @import "../../assets/icon/icon/iconfont.css";

    .goodsBottomNav {
        font-size: 0;
        padding: 0 px2em(18);
        box-sizing: border-box;
        .navRouter {
            margin: px2em(18) 0 0 0;
            height: px2em(50);
            border-bottom: px2em(1) solid rgba(7, 17, 27, 0.1);
            a {
                display: inline-block;
                height: px2em(32);
                width: px2em(60);
                line-height: px2em(32);
                text-align: center;
                font-size: px2em(12);
                margin-right: px2em(8);
                &:nth-child(1) {
                    background-color: #00a0dc;
                    color: #ffffff;
                }
                &:nth-child(2) {
                    background-color: #ccecf8;
                    color: rgb(77, 85, 93);
                }
                &:nth-child(3) {
                    background-color: #e9ebec;
                    color: rgb(77, 85, 93);
                }
                i {
                    font-style: normal;
                    font-size: px2em(8);
                    margin-left: px2em(4);
                }
            }
        }
        .trueRating {
            height: px2em(50);
            line-height: px2em(50);
            span {
                display: inline-block;
                font-size: px2em(12);
                color: rgb(147, 153, 159);
            }
            .icon {
                font-size: px2em(24);
                color: rgb(147, 153, 159);
                vertical-align: top;
                margin-right: px2em(4);
            }
            .iconText {
                font-size: px2em(12);
                color: rgb(147, 153, 159);
                vertical-align: top;
            }
            .changeColor {
                color: #00a0dc;
            }
        }
    }

    .select {
        border-top: px2em(1) solid #e6e7e8;
    }
</style>