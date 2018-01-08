<template>
    <div class='goodselectall' ref='meunScroll'>
        <ul>
            <li v-for='item in elmObjArr'>
                <div class='ratingsImg'>
                    <img :src="item.avatar" alt="">
                </div>
                <div class='ratingsMain'>
                    <div class='title'>{{item.username}}</div>
                    <div class='goods'>
                        <span><star :size='24' :score='item.score'></star></span>
                        <span v-if='item.deliveryTime'>{{item.deliveryTime}}分送达</span>
                    </div>
                    <div class='text'>{{item.text}}</div>
                    <div class='recommend'>
                        <i class='iconfont' :class='iconType(item.rateType)' v-if='item.recommend.length!==0'></i>
                        <span v-for='(aa,index) in item.recommend' v-if='index<3'>{{aa}}</span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    const CLS_UP = 'icon-zan2'
    const CLS_down = 'icon-zan11'
    import star from '../star/star'
    import BSscroll from 'better-scroll'

    export default {
        name: "goodselectall",
        data() {
            return {
                elmObj: [],
                unOFF: ''
            }
        },
        computed: {
            elmObjArr() {
                let trueArr = this.elmObj.filter((t) => t.rateType !== 0)
                if (this.unOFF) {
                    let aa = trueArr.filter((t) => t.text)
                    return aa
                }
                if (!this.unOFF) {
                    return trueArr
                }
            }
        },
        methods: {
            iconType(item) {
                if (item === 1) {
                    return CLS_down
                }
                if (item === 0) {
                    return CLS_UP
                }
            },
            _initScroll() {
                this.meunScroll = new BSscroll(this.$refs.meunScroll, {
                    click: true
                });
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
                    this.$nextTick(() => {
                        this._initScroll()
                    })
                })
            this.unOFF = this.$store.state.unOFF
        },
        components: {
            star,
        }
    }
</script>

<style scoped lang='scss'>
    @import "../../../static/css/conmon";
    @import "../../assets/icon/icon/iconfont.css";

    .goodselectall {
        padding: 0 px2em(18);
        height: px2em(400);
        overflow: hidden;
        ul {
            li {
                height: px2em(130);
                padding-top: px2em(18);
                box-sizing: border-box;
                display: flex;
                .ratingsImg {
                    flex: 0 0 px2em(28);
                    height: px2em(28);
                    width: px2em(28);
                    border-radius: 50%;
                    /*overflow: hidden;*/
                    img {
                        height: 100%;
                        width: 100%;
                    }
                }
                .ratingsMain {
                    flex: 1;
                    margin-left: px2em(12);
                    .title {
                        font-size: px2em(10);
                        color: rgb(7, 17, 27);
                    }
                    .goods {
                        margin-top: px2em(4);
                        span {
                            display: inline-block;
                            &:nth-child(2) {
                                font-size: px2em(10);
                                color: rgb(147, 153, 159);
                            }
                        }
                    }
                    .text {
                        margin-top: px2em(6);
                        font-size: px2em(12);
                        color: rgb(7, 17, 27);
                        line-height: px2em(18);
                    }
                    .recommend {
                        font-size: 0;
                        margin-top: px2em(8);
                        i {
                            vertical-align: top;
                            font-size: px2em(12);
                        }
                        .icon-zan11 {
                            color: rgb(183, 187, 191);
                        }
                        .icon-zan2 {
                            color: rgb(0, 160, 220);
                        }
                        span {
                            vertical-align: top;
                            margin-left: px2em(8);
                            display: inline-block;
                            height: px2em(15);
                            width: px2em(62);
                            border: px2em(1) solid #e6e7e8;
                            font-size: px2em(9);
                            color: rgb(147, 153, 159);
                            padding: 0 px2em(6);
                            box-sizing: border-box;
                            line-height: px2em(15);
                            text-overflow: ellipsis;
                            overflow: hidden;
                            white-space: nowrap;
                            text-align: center;
                        }
                    }
                }
            }
        }
    }
</style>