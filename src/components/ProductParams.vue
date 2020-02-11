<template>
    <div>
        <div class="nav-bar" :class="{'isfixed':isFixed}">
            <div class="container">
                <div class="pro-title">
                    小米8
                </div>
                <div class="pro-params">
                    <a href="javascript:;">概述</a><span>|</span>
                    <a href="javascript:;">参数</a><span>|</span>
                    <a href="javascript:;">用户评价</a><span class="kong"></span>
                    <slot name="params"></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'product-params',
        data() {
            return {
                isFixed:false
            }
        },
        mounted(){
            window.addEventListener('scroll',this.initHeight)
        },
        methods:{
            initHeight(){
                let scrollTop=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;
                this.isFixed=scrollTop >129 ? true: false;
            }
        },
        //生命周期销毁
        destroyed(){
            window.removeEventListener('scroll',this.initHeight,false)
        }
    }
</script>

<style lang="scss" scoped>
.nav-bar{
    height: 70px;
    line-height: 70px;
    border-top: 1px solid #e5e5e5;
    background-color: #fff;
    z-index: 10;
    &.isfixed{
        position: fixed;
        top:0;
        width: 100%;
        box-shadow: 0 5px 5px #ccc;
    }
    .container{
        display: flex;
        justify-content: space-between;
        align-items: center;
        .pro-title{
            font-size: 18px;
            color: #333333;
            font-weight: bold;
        }
        .pro-params{
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 14px;
            a{
                color: #666666;
                &:hover{
                    color:#ff6600;
                }
            }
            span{
                margin: 0 10px;
                &:last-child{
                    margin-right: 10px;
                }
            }

        }
    }
}
</style>