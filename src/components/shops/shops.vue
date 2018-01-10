<template>
    <div class='shopsBox' ref='shopsBoxbetter'>
        <div class='shops'>
            <!--商家头部-->
            <div class='shopsNav'>
                <div class='navTilte'>
                    <div class='navTitleName'>{{select.name}}</div>
                    <div class='navTitleText'>
                        <div class='star'>
                            <star :size='36' :score='select.score'></star>
                        </div>
                        <div class='sale'>
                            <span>({{select.ratingCount}})</span>
                            <span>月售{{select.sellCount}}单</span>
                        </div>
                    </div>
                    <div class='collect'>
                        <span class='icon iconfont icon-xin'></span>
                        <br>
                        <span class='icontext'>已收藏</span>
                    </div>
                </div>
                <div class='navContext'>
                    <div>
                        <span class='describe'>起送价</span>
                        <br>
                        <span class='details'>{{select.minPrice}}<i>元</i></span>
                    </div>
                    <div>
                        <span class='describe'>商家配送</span>
                        <br>
                        <span class='details'>{{select.deliveryPrice}}<i>元</i></span>
                    </div>
                    <div>
                        <span class='describe'>平均配送时间</span>
                        <br>
                        <span class='details'>{{select.deliveryTime}}<i>分钟</i></span>
                    </div>
                </div>
            </div>
            <div class='line'></div>
            <div class='notice'>
                <h4 class='noticeTitle'>公告与活动</h4>
                <div class='noticeContext'>{{select.bulletin}}</div>
                <div class='activity' v-for='(item,index) in select.supports'>
                    <span class='icon' :class='classMap[select.supports[index].type]'></span>
                    <span>{{item.description}}</span>
                </div>
            </div>
            <div class='line'></div>
            <div class='merchants'>
                <h4 class='merchantsName'>商家实景</h4>
                <div class='merchantsImg' ref='merchantsDom'>
                    <ul ref='merchantsul'>
                        <li v-for='item in select.pics'>
                            <img :src="item" alt="">
                        </li>
                    </ul>
                </div>
            </div>
            <div class='line'></div>
            <div class='CompanyData'>
                <h4 class='CompanyDataTitle'>商家信息</h4>
                <div class='CompanyDataactivity' v-for='(item,index) in select.infos'>
                    <span>{{item}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    const CLS_width = 126
    import star from '../star/star'
    import BScroll from 'better-scroll';
    export default {
        data() {
            return {
                select: {}
            }
        },
        components: {
            star,
        },

        methods: {
            _methodWidth() {
                // if(this.select.pics){
                //     let index = this.select.pics.length
                // console.log(this.$refs.merchantsul)
                // this.$refs.merchantsul.style.width = CLS_width*4/14+'rem'
                this.merchantsDom = new BScroll(this.$refs.merchantsDom, {
                    scrollX: true,
                    eventPassthrough: 'vertical'
                });
                this.shopsBoxbetter = new BScroll(this.$refs.shopsBoxbetter, {})

                // }

            }
        },
        created() {
            this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
            this.$ajax({
                method: 'get',
                url: '/static/data.json'
            })
                .then((respone) => {
                    this.select = respone.data.seller
                    this.$nextTick(() => {
                        this._methodWidth()
                    })
                })
        }

    }
</script>

<style scoped lang='scss'>
    @import "../../../static/css/conmon";
    @import "../../assets/icon/icon/iconfont.css";

    .shopsBox {
        height: 100%;
        overflow: hidden;
        .shops {
            .line {
                height: px2em(16);
                border-top: px2em(1) solid #e6e7e8;
                border-bottom: px2em(1) solid #e6e7e8;
                background-color: #f3f5f7;
            }
            .shopsNav {
                box-sizing: border-box;
                height: px2em(150);
                padding: 0 px2em(18);
                .navTilte {
                    font-size: 0;
                    box-sizing: border-box;
                    padding: px2em(18) 0;
                    height: px2em(75);
                    border-bottom: px2em(1) solid rgba(7, 17, 27, 0.1);
                    position: relative;
                    .navTitleName {
                        font-size: px2em(14);
                        color: rgb(7, 17, 27);
                    }
                    .navTitleText {
                        margin-top: px2em(8);
                        .star {
                            display: inline-block;
                            vertical-align: middle;
                        }
                        .sale {
                            margin-left: px2em(8);
                            display: inline-block;
                            span {
                                vertical-align: middle;
                                display: inline-block;
                                font-size: px2em(10);
                                color: rgb(77, 85, 93);
                                margin-right: px2em(12);
                            }
                        }
                    }
                    .collect {
                        position: absolute;
                        top: px2em(18);
                        right: 0;
                        text-align: center;
                        .icon {
                            font-size: px2em(24);
                            color: rgb(240, 20, 20);
                        }
                        .icontext {
                            font-size: px2em(10);
                            color: rgb(77, 85, 93);
                            display: inline-block;
                            margin-top: px2em(4);
                        }
                    }
                }
                .navContext {
                    font-size: 0;
                    box-sizing: border-box;
                    padding: px2em(18) 0;
                    height: px2em(75);
                    display: flex;
                    div {
                        flex: 1;
                        text-align: center;
                        border-right: px2em(1) solid rgba(7, 17, 27, 0.1);
                        &:last-child {
                            border-right: none;
                        }
                        .describe {
                            font-size: px2em(10);
                            color: rgb(147, 153, 159);
                        }
                        .details {
                            font-size: px2em(24);
                            color: rgb(7, 17, 27);
                            margin-top: px2em(4);
                            display: inline-block;
                            i {
                                font-style: normal;
                                font-size: px2em(10)
                            }
                        }
                    }
                }
            }
            .notice {
                padding: px2em(18) px2em(18) px2em(16) px2em(18);
                .noticeTitle {
                    font-size: px2em(14);
                    color: rgb(7, 17, 27);
                }
                .noticeContext {
                    padding: 0 px2em(12);
                    font-size: px2em(12);
                    color: rgb(240, 20, 20);
                    line-height: px2em(24);
                    font-weight: 200;
                    margin-top: px2em(8);
                }
                .activity {
                    font-size: 0;
                    border-top: px2em(1) solid rgba(7, 17, 27, 0.1);
                    span {
                        vertical-align: top;
                        height: px2em(16);
                        display: inline-block;
                        margin-left: px2em(6);
                        font-size: px2em(12);
                        color: rgb(7, 17, 27);
                        line-height: px2em(16);
                        margin: px2em(16) 0;
                    }
                    .icon {
                        margin-left: px2em(12);
                        vertical-align: top;
                        height: px2em(16);
                        width: px2em(16);
                        &.decrease {
                            background: url('/static/img/header/decrease_2@2x.png') no-repeat;
                            background-size: px2em(16) px2em(16);
                        }
                        &.discount {
                            background: url('/static/img/header/discount_2@2x.png') no-repeat;
                            background-size: px2em(16) px2em(16);
                        }
                        &.guarantee {
                            background: url('/static/img/header/guarantee_2@2x.png') no-repeat;
                            background-size: px2em(16) px2em(16);
                        }
                        &.invoice {
                            background: url('/static/img/header/invoice_2@2x.png') no-repeat;
                            background-size: px2em(16) px2em(16);
                        }
                        &.special {
                            background: url('/static/img/header/special_2@2x.png') no-repeat;
                            background-size: px2em(16) px2em(16);
                        }
                    }

                }
            }
            .merchants {
                padding: px2em(18);
                overflow: hidden;
                .merchantsName {
                    font-size: px2em(14);
                    color: rgb(7, 17, 27);
                }
                .merchantsImg {
                    font-size: 0;
                    margin-top: px2em(12);
                    width: 100%;
                    overflow: hidden;
                    white-space: nowrap;
                    ul {
                        width: px2em(498);
                        li {
                            display: inline-block;
                            margin-right: px2em(6);
                            img {
                                height: px2em(90);
                                width: px2em(120);
                            }
                        }
                    }
                }
            }
            .CompanyData {
                padding: px2em(18) px2em(18) px2em(16) px2em(18);
                .CompanyDataTitle {
                    font-size: px2em(14);
                    color: rgb(7, 17, 27);
                    margin-bottom: px2em(12);
                }
                .CompanyDataactivity {
                    font-size: 0;
                    border-top: px2em(1) solid rgba(7, 17, 27, 0.1);
                    span {
                        padding: 0 px2em(12);
                        display: inline-block;
                        font-size: px2em(12);
                        color: rgb(7, 17, 27);
                        line-height: px2em(16);
                        margin: px2em(16) 0;
                    }
                }
            }
        }
    }
</style>