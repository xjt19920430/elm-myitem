<template>
    <div class='star' :class='satrType'>
        <span v-for='item in classArr' class='star-item' :class='item'></span>
    </div>
</template>

<script>
    const LENGTH = 5;
    const CLS_ON = 'on';
    const CLS_HALF = 'half';
    const CLS_OFF = 'off';

    export default {
        props: ['size', 'score'],
        computed: {
            satrType() {
                return 'star-' + this.size
            },
            classArr() {
                let result = []
                let score = this.score
                let half = Math.ceil(score % 1)
                let length1 = Math.floor(score)
                for (let i = 0; i < length1; i++) {
                    result.push(CLS_ON)
                }
                if (half !== 0) {
                    result.push(CLS_HALF)
                }
                while (result.length < LENGTH) {
                    result.push(CLS_OFF);
                }
                return result
            }
        }
    }
</script>

<style scoped lang='scss'>
    @import "../../../static/css/conmon";

    .star-48 {
        .star-item {
            display: inline-block;
            width: px2em(20);
            height: px2em(20);
            margin-right: px2em(22);
            &:last-child {
                margin-right: 0;
            }
        }
        .on {
            background: url("../../../static/img/header/star48_on@2x.png") no-repeat;
            background-size: px2em(20) px2em(20);
        }
        .half {
            background: url("../../../static/img/header/star48_half@2x.png") no-repeat;
            background-size: px2em(20) px2em(20);
        }
        .off {
            background: url("../../../static/img/header/star48_off@2x.png") no-repeat;
            background-size: px2em(20) px2em(20);
        }
    }

    .star-36 {
        .star-item {
            display: inline-block;
            width: px2em(15);
            height: px2em(15);
            margin-right: px2em(6);
            &:last-child {
                margin-right: 0;
            }
        }
        .on {
            background: url("../../../static/img/header/star48_on@2x.png") no-repeat;
            background-size: px2em(15) px2em(15);
        }
        .half {
            background: url("../../../static/img/header/star48_half@2x.png") no-repeat;
            background-size: px2em(15) px2em(15);
        }
        .off {
            background: url("../../../static/img/header/star48_off@2x.png") no-repeat;
            background-size: px2em(15) px2em(15);
        }
    }

    .star-24 {
        .star-item {
            display: inline-block;
            width: px2em(10);
            height: px2em(10);
            margin-right: px2em(3);
            &:last-child {
                margin-right: 0;
            }
        }
        .on {
            background: url("../../../static/img/header/star48_on@2x.png") no-repeat;
            background-size: px2em(10) px2em(10);
        }
        .half {
            background: url("../../../static/img/header/star48_half@2x.png") no-repeat;
            background-size: px2em(10) px2em(10);
        }
        .off {
            background: url("../../../static/img/header/star48_off@2x.png") no-repeat;
            background-size: px2em(10) px2em(10);
        }
    }
</style>