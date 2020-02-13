<template>
    <div>
        <order-header title="订单支付">
            <template v-slot:tip>
                <span>
                确认支付正确,欢迎下次购买
                </span>
            </template>
        </order-header>
        <div class="ali-pay">
            <loading v-if="loading"></loading>
            <div class="from" v-html="content"></div>
        </div>
    </div>
</template>

<script>
    import Loading from './../components/Loading'
    import OrderHeader from './../components/OrderHeader'
    export default {
        name:'alipay',
        data() {
            return {
                orderId:this.$route.query.orderId,
                payment:this.$route.query.payment,
                content:'',
                loading:true,
            }
        },
        components:{
            Loading,
            OrderHeader
        },
        mounted(){
            this.paySubmit()
        },
        methods:{
            paySubmit(){
                this.axios.post('/pay',{
                    orderId:this.orderId,
                    orderName:'Vue高仿小米商城',//扫码支付时订单名称
                    amount:1.88,//单位元
                    payType:1
                }).then((res)=>{
                    this.content=res.content;
                    setTimeout(()=>{
                        document.forms[0].submit();
                    },1000)
                })
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>