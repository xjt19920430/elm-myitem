<template>
    <div class='goodselect'>
        <div class='goodsBottomNav'>
            <div class='navRouter'>
                <span @click='active(2)' :class='{changeNavColor:index===2}'>全部<i>{{select.ratingCount}}</i></span>
                <span @click='active(0)' :class='{changeNavColor:index===0}'>满意<i>{{ratingsTrue}}</i></span>
                <span @click='active(1)' :class='{changeNavColor:index===1}'>不满意<i>{{ratingsFalse}}</i></span>
            </div>
            <div class='trueRating' @click='contextShow'>
                <span class='icon iconfont icon-duihao' :class='unOFFType'></span>
                <span class='iconText'>只看有内容的评价</span>
            </div>
        </div>
        <div class='select'>
            <div class='goodselectall' ref='meunScroll'>
                <ul>
                    <li v-for='item in changeArr'>
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
                                <i class='iconfont' :class='iconType(item.rateType)'
                                   v-if='item.recommend.length!==0'></i>
                                <span v-for='(aa,index) in item.recommend' v-if='index<3'>{{aa}}</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    const CLS_UP = 'icon-zan2'
    const CLS_down = 'icon-zan11'
    import star from '../star/star'
    import BSscroll from 'better-scroll'
    export default {
        data() {
            return {
                elmObj: [],
                select: {},
            }
        },
        watch: {
            changeArr: {
                handler() {
                    this.$nextTick(() => {
                        this._initScroll()
                    })
                }
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
            unOFFType() {
                let unOff = this.$store.state.unOFF
                if (unOff) {
                    return 'changeColor'
                }
                if (!unOff) {
                    return unOff
                }
            },
            changeArr() {
                let selectIndex = this.$store.state.selectIndex
                let aaa = []
                if (selectIndex === 2) {
                    if (this.unOFFType === 'changeColor') {
                        aaa = this.elmObj.filter((t) => t.text)
                    }
                    if (!this.unOFFType) {
                        aaa = this.elmObj
                    }

                }
                if (selectIndex === 0) {
                    let trueArr = this.elmObj.filter((t) => t.rateType === 0)
                    if (this.unOFFType === 'changeColor') {
                        aaa = trueArr.filter((t) => t.text)
                    }
                    if (!this.unOFFType) {
                        aaa = trueArr
                    }
                }
                if (selectIndex === 1) {
                    let falseArr = this.elmObj.filter((t) => t.rateType !== 0)
                    if (this.unOFFType === 'changeColor') {
                        aaa = falseArr.filter((t) => t.text)
                    }
                    if (!this.unOFFType) {
                        aaa = falseArr
                    }
                }
                return aaa
            },
            index() {
                return this.$store.state.selectIndex
            }

        },
        methods: {
            contextShow() {
                this.$store.commit('contextShow')
            },
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
            },
            active(index) {
                this.$store.commit('getSelectIndex', index)
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
        },
        components: {
            star,
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
            span {
                display: inline-block;
                height: px2em(32);
                width: px2em(60);
                line-height: px2em(32);
                text-align: center;
                font-size: px2em(12);
                margin-right: px2em(8);
                background-color: #ccecf8;
                color: rgb(77, 85, 93);
                &:nth-child(1) {

                }
                &:nth-child(2) {

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
            .changeNavColor {
                background-color: #00a0dc !important;
                color: #ffffff !important;
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
    }
</style>