<template>
  <div id="app">
    <vue-header></vue-header>
    <transition name='component-fade' mode='out-in'>
      <vue-discounts v-if='ifShow'></vue-discounts>
    </transition>
    <vue-main></vue-main>
    <vue-foot></vue-foot>
  </div>

</template>

<script>
import vueHeader from './components/header/header'
import vueFoot from './components/foot/foot'
import vueMain from './components/main/main'
import vueDiscounts from './components/discounts/discounts'
export default {
    components:{
        vueHeader,
        vueFoot,
        vueMain,
        vueDiscounts,
    },
    computed:{
        ifShow (){
            return this.$store.state.ifShow
        }
    },
    created(){
        this.$store.dispatch('getSelect')
    }

}
</script>

<style scoped lang='scss'>
  @import "../static/css/conmon";
#app {
  height: px2em(668);
  width: px2em(375);
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
  position: relative;
}

.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .5s ease;
}
.component-fade-enter, .component-fade-leave-to
  /* .component-fade-leave-active for below version 2.1.8 */ {
  opacity: 0;
}
</style>
