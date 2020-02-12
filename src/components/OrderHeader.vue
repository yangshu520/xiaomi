<template>
    <div class="order-header">
        <div class="container clearfix">
            <div class="header-logo">
                <a href="/#/index"></a>
            </div>
            <div class="order-title">
                <div>{{title}}
                    <slot name="tip"></slot>
                </div>
                
            </div>
            <div class="username">
                <a href="javascript:;">{{username}}</a>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name:'order-header',
        props:['title'],
        computed:{
            ...mapState(['username'])
        }
    }
</script>

<style lang="scss">
@import './../assets/sass/mixin.scss';
.order-header{
    box-sizing: border-box;
    height: 116px;
    padding: 30px 0;
    .container{
        .header-logo{
            float: left;
            width: 55px;
            height: 55px;
            background-color: #ff6600;
            a{
                display: inline-block;
                width: 110px;
                height: 55px;
                &:before{
                    content: '';
                    @include bgImg(55px,55px,'../../public/imgs/mi-logo.png');
                    transition: margin .3s;
                }
                &:after{
                    content: '';
                    @include bgImg(55px,55px,'../../public/imgs/mi-home.png',55px);
                }
                &:hover:before{
                    margin-left: -55px;
                    transition: margin .3s;
                }
            }
        }
        .order-title,.username{
            display: inline-block;
            height: 55px;
            line-height: 55px;
        }
        .order-title{
            font-size: 28px;
            float: left;
            color: #333333;
            margin-left: 54px;
            span{
                font-size: 14px;
                margin-left: 17px;
                columns: #999999;
            }
        }
        .username{
            float: right;
            a{
                color:#666;
                font-size: 16px;
            }
        }
    }
}
</style>