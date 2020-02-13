<template>
    <div>
        <router-view></router-view>
        <service-bar></service-bar>
        <nav-footer></nav-footer>
    </div>
</template>

<script>
import NavFooter from '../components/NavFooter'
import ServiceBar from '../components/ServiceBar'
    export default {
        name:'order',
        data() {
            return {
            }
        },
        components:{
            NavFooter,
            ServiceBar
        },
        mounted(){
            // let path=this.$route.path;获取路由跳转地址
        }
    }
</script>

<style lang="less" scoped>

</style>