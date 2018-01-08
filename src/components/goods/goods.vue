<template>
    <div class='goods'>
        <div class='goodsTop'>
            <div class='grade'>
                <div class='num'>{{serll.score}}</div>
                <div class='text'>综合评分</div>
                <div class='numText'>高于周边商家{{serll.rankRate}}%</div>
            </div>
            <div class='attitude'>
                <div class='serviceScore attitudeScore'>
                    <span class='text'>服务态度</span>
                    <span class='score'>
                        <star :size='36' :score='serll.serviceScore'></star>
                    </span>
                    <span class='scoreNum'>{{serll.serviceScore}}</span>
                </div>
                <div class='foodScore attitudeScore'>
                    <span class='text'>商品评分</span>
                    <span class='score'>
                        <star :size='36' :score='serll.foodScore'></star>
                    </span>
                    <span class='scoreNum'>{{serll.foodScore}}</span>
                </div>
                <div class='deliveryTime attitudeScore'>
                    <span class='text'>送达时间</span>
                    <span class='time'>
                        {{serll.deliveryTime}}分钟
                    </span>
                </div>
            </div>
        </div>
        <div class='line'></div>
        <div class='goodsBottom'>
            <goodselect></goodselect>
        </div>
    </div>
</template>

<script>
    import star from '../star/star'
    import goodselect from '../goodselect/goodselect'
    export default {
        components: {
            star,
            goodselect
        },
        computed: {
            serll() {
                return this.$store.state.select
            }
        }
    }
</script>

<style scoped lang='scss'>
    @import "../../../static/css/conmon";

    .goods {
        .goodsTop {
            display: flex;
            height: px2em(102);
            padding: px2em(18) px2em(24) px2em(18) 0;
            box-sizing: border-box;
            .grade {
                flex: 0 0 px2em(137.5);
                text-align: center;
                border-right: px2em(1) solid #e6e7e8;
                .num {
                    font-size: px2em(24);
                    color: rgb(255, 153, 0);
                }
                .text {
                    font-size: px2em(12);
                    color: #07111b;
                    margin-top: px2em(6);
                }
                .numText {
                    font-size: px2em(10);
                    color: #93999f;
                    margin-top: px2em(8);
                }
            }
            .attitude {
                flex: 1;
                padding-left: px2em(24);
                font-size: 0;
                .attitudeScore {
                    margin-top: px2em(8);
                    overflow: hidden;
                    &:nth-child(1) {
                        margin-top: 0;
                    }
                    span {
                        display: inline-block;
                    }
                    .text {
                        font-size: px2em(12);
                        color: #07111b;
                        margin-right: px2em(12);
                        vertical-align: middle;
                    }
                    .time {
                        font-size: px2em(12);
                        color: rgb(147, 153, 159);
                        vertical-align: middle;
                    }
                    .score {
                        vertical-align: middle;
                    }
                    .scoreNum {
                        font-size: px2em(12);
                        color: rgb(255, 153, 0);
                        margin-left: px2em(12);
                        vertical-align: middle;
                    }
                }
                .serviceScore {

                }
            }
        }
        .line {
            height: px2em(16);
            border: px2em(1) solid #e6e7e8;
            border-left: none;
            border-right: none;
            background-color: #f3f5f7;
        }
        .goodsBottom {

        }
    }
</style>