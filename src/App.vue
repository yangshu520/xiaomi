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
      storage.setItem('a',44,'user')
    }
}
</script>

<style>
</style>
