<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import storage from './storage/index'
  export default{
    data() {
      return {
        key: ''
      }
    },
    mounted(){
      this.getUser();
      this.getCartCount();
    },
    methods:{
      getUser(){
        this.axios.get('/user').then((res)=>{
          //保存到vuex里面
          this.$store.dispatch('saveUserName',res.username)
        })
      },
      getCartCount(){
        this.axios.get('/carts/products/sum').then((res)=>{
          //保存到vuex中
          this.$store.dispatch('saveCartCount',res)
        })
      }
    }
}
</script>

<style lang="scss">
@import './assets/sass/reset.scss';
@import './assets/sass/config.scss';
@import './assets/sass/buttons.scss';
</style>
