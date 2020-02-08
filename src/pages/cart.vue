<template>
    <div>
        <cart-header></cart-header>
        cart
        <nav-footer></nav-footer>
    </div>
</template>

<script>
import CartHeader from '../components/CartHeader'
import NavFooter from '../components/NavFooter'
    export default {
        name:'cart',
        components:{
            CartHeader,
            NavFooter
        }
    }
</script>

<style lang="scss" scoped>

</style>