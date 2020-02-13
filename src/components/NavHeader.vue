<template>
    <div class="header">
        <div class="nav-topbar">
            <div class="container">
                <div class="topbar-menu">
                    <a href="javascript:;">小米商城</a>
                    <a href="javascript:;">MUI</a>
                    <a href="javascript:;">云服务</a>
                    <a href="javascript:;">协议规则</a>
                </div>
                <div class="topbar-user">
                    <a href="javascript:;" v-if="username">{{username}}</a>
                    <a href="javascript:;" v-if="!username" @click="login">登入</a>
                    <a href="javascript:;" v-if="username" @click="logout">退出</a>
                    <a href="javascript:;" v-if="username" @click="$router.push('/order/list')">我的订单</a>
                    <a href="javascript:;" v-if="!username">注册</a>
                    <a href="javascript:;" class="my-cart" @click="gotoCart"><span class="icon-cart"></span>购物车({{cartCount}})</a>
                </div>
            </div>
        </div>
        <div class="nav-header">
            <div class="container">
                <div class="header-logo">
                    <a href="/#/index"></a>
                </div>
                <div class="header-menu">
                    <div class="item-menu">
                        <span>小米手机</span>
                        <div class="children">
                            <ul>
                                <li class="product" v-for="(item,index) in phoneList" :key="index">
                                    <a :href="'/#/product/'+item.id" target="_blank">
                                        <div class="pro-imgs">
                                            <img v-lazy="item.mainImage" :alt="item.name">
                                        </div>
                                        <div class="pro-name">{{item.name}}</div>
                                        <div class="pro-price">{{item.price | price}}</div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="item-menu">
                        <span>Redmi红米</span>
                        <div class="children">
                            <ul>
                                <li class="product">
                                    <a href="https://item.mi.com/product/10000203.html?selected=10000203" target="_blank">
                                        <div class="pro-imgs">
                                            <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cff2977b8aab1e43b94b2f00083f4ae1.jpg?thumb=1&w=160&h=110&f=webp&q=90" alt="">
                                        </div>
                                        <div class="pro-name">Redmi K30</div>
                                        <div class="pro-price">￥1599.00元起</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="https://item.mi.com/product/10000203.html?selected=10000203" target="_blank">
                                        <div class="pro-imgs">
                                            <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/742a328bdaa242aea89ec2a9c8661013.jpg?thumb=1&w=160&h=110&f=webp&q=90" alt="">
                                        </div>
                                        <div class="pro-name">Redmi K30 5G</div>
                                        <div class="pro-price">￥1999.00元起</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="https://item.mi.com/product/10000203.html?selected=10000203" target="_blank">
                                        <div class="pro-imgs">
                                            <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/398311b2e6f47ac324ba0421a0ac1b80.png?thumb=1&w=160&h=110&f=webp&q=90" alt="">
                                        </div>
                                        <div class="pro-name">Redmi 8A</div>
                                        <div class="pro-price">￥599.00元起</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="https://item.mi.com/product/10000203.html?selected=10000203" target="_blank">
                                        <div class="pro-imgs">
                                            <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/dacd6a3d8440b7a038e9778702bd6db6.png?thumb=1&w=160&h=110&f=webp&q=90" alt="">
                                        </div>
                                        <div class="pro-name">Redmi Note 8</div>
                                        <div class="pro-price">￥999.00元起</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="https://item.mi.com/product/10000203.html?selected=10000203" target="_blank">
                                        <div class="pro-imgs">
                                            <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c1937ecb7e9b8e1aee11d6936e19d53c.png?thumb=1&w=160&h=110&f=webp&q=90" alt="">
                                        </div>
                                        <div class="pro-name">Redmi K20 Pro 尊享版</div>
                                        <div class="pro-price">￥2999.00元起</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="https://item.mi.com/product/10000203.html?selected=10000203" target="_blank">
                                        <div class="pro-imgs">
                                            <img src="https:////cdn.cnbj1.fds.api.mi-img.com/mi-mall/8ee0af37bbd2f5a83c799e87dd791037.png?thumb=1&w=160&h=110&f=webp&q=90" alt="">
                                        </div>
                                        <div class="pro-name">Redmi Note 8 Pro</div>
                                        <div class="pro-price">￥1199.00元起</div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="item-menu">
                        <span>电视</span>
                        <div class="children">
                            <ul>
                                <li class="product">
                                    <a href="https://www.mi.com/redmitv/70" target="_blank">
                                        <div class="pro-imgs">
                                            <img src="../../public/imgs/nav-img/nav-3-1.jpg" alt="">
                                        </div>
                                        <div class="pro-name">Redmi 红米电视 70英寸 R70A</div>
                                        <div class="pro-price">￥3499.00元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="https://www.mi.com/redmitv/70" target="_blank">
                                        <div class="pro-imgs">
                                            <img src="../../public/imgs/nav-img/nav-3-2.jpg" alt="">
                                        </div>
                                        <div class="pro-name">小米壁画电视 65英寸</div>
                                        <div class="pro-price">￥6999.00元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="https://www.mi.com/redmitv/70" target="_blank">
                                        <div class="pro-imgs">
                                            <img src="../../public/imgs/nav-img/nav-3-3.png" alt="">
                                        </div>
                                        <div class="pro-name">小米全面屏电视E55A</div>
                                        <div class="pro-price">￥1899.00元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="https://www.mi.com/redmitv/70" target="_blank">
                                        <div class="pro-imgs">
                                            <img src="../../public/imgs/nav-img/nav-3-4.jpg" alt="">
                                        </div>
                                        <div class="pro-name">小米电视4A 32英寸</div>
                                        <div class="pro-price">￥799.00元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="https://www.mi.com/redmitv/70" target="_blank">
                                        <div class="pro-imgs">
                                            <img src="../../public/imgs/nav-img/nav-3-5.jpg" alt="">
                                        </div>
                                        <div class="pro-name">小米电视4A 55英寸</div>
                                        <div class="pro-price">￥1999.00元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="https://www.mi.com/redmitv/70" target="_blank">
                                        <div class="pro-imgs">
                                            <img src="../../public/imgs/nav-img/nav-3-6.png" alt="">
                                        </div>
                                        <div class="pro-name">小米电视4A 65英寸</div>
                                        <div class="pro-price">￥2799.00元</div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="header-search">
                    <div class="wrapper">
                        <input type="text" name="keyword">
                        <a href="javascript:;"></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
    export default {
        name:'nav-header',
        data() {
            return {
                phoneList:[]
            }
        },
        computed:{
            /*username(){
                //计算属性必须加return 发生变化时自动调用
               return this.$store.state.username
            },
            cartCount(){
                return this.$store.state.cartCount
            }*/
            ...mapState(['username','cartCount'])
        },
        filters:{
            price(val){
                if(!val) return '0.00';
                return '￥'+val.toFixed(2)+'元'
            }
        },
        mounted(){
            this.getPhoneList();
            if(this.$route.params&&this.$route.params.from=='login'){
               this.getCartCount();
            }
        },
        methods:{
            getPhoneList(){
               this.axios.get('/products',{
                    params:{
                        categoryId:'100012'
                    }
                }).then((res)=>{
                    if(res.list.length>6){
                        this.phoneList=res.list.slice(0,6)
                    }
                })
            },
            gotoCart(){
                this.$router.push('/cart')
                //router取参数router.params或者router.query
            },
            login(){
                this.$router.push('/login')
            },
            logout(){
                this.axios.post('/user/logout').then((res)=>{
                    this.$message.success('退出成功')
                    this.$cookie.set('userId','',{expires:'-1'});
                    this.$store.dispatch('saveUserName','');
                    this.$store.dispatch('saveCartCount','0');
                })
            },
            getCartCount(){
                this.axios.get('/carts/products/sum').then((res=0)=>{
                //保存到vuex中
                this.$store.dispatch('saveCartCount',res)
                })
            }
        }
    }
</script>

<style lang="scss">
@import '../assets/sass/base.scss';
@import '../assets/sass/mixin.scss';
@import '../assets/sass/config.scss';
.header{
    .nav-topbar{
        height: 39px;
        line-height: 39px;
        background-color: #333;
        color: #b0b0b0;
        .container{
            @include flex();
            a{
                display: inline-block;
                color: #b0b0b0;
                margin-right: 17px;
            }
            .my-cart{
                width: 110px;
                margin-right: 0;
                background-color: #424242;
                text-align: center;
                .icon-cart{
                    @include bgImg(16px,12px,'../../public/imgs/icon-cart.png');
                    margin-right: 4px;
                }
            }
        }
    }
    .nav-header{
        .container{
            position: relative;
            height: 90px;
            @include flex();
            .header-logo{
                display:inline-block;
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
            .header-menu{
                display:inline-block;
                width: 643px;
                padding-left: 209px;
                .item-menu{
                    display:inline-block;
                    margin-right: 20px;
                    color:#333;
                    font-weight: bold;
                    font-size: 16px;
                    line-height: 90px;
                    span{
                        cursor: pointer;
                    }
                    &:hover{
                        color: $colorA;
                        .children{
                            height: 220px;
                            opacity: 1;
                        }
                    }
                    .children{
                        position: absolute;
                        top: 90px;
                        left: 0;
                        width: 1226px;
                        height: 0;
                        opacity: 0;
                        overflow: hidden;
                        border: 1px solid $colorH;
                        background-color: #fff;
                        box-shadow: 0px 7px 6px 0px rgba(0,0,0, 0.2);
                        z-index: 10;
                        transition: all .5s;
                        .product{
                            position: relative;
                            float: left;
                            width: 16.6%;
                            height: 220px;
                            font-size: 12px;
                            line-height: 12px;
                            text-align: center;
                            a{
                                display:inline-block;
                            }
                            img{
                                height: 111px;
                                width: auto;
                                margin-top: 26px;
                            }
                            .pro-imgs{
                                height: 137px;
                            }
                            .pro-name{
                                font-weight: bold;
                                margin-top: 19px;
                                margin-bottom: 8px;
                                color:$colorB;
                            }
                            .pro-price{
                                color:$colorA;
                            }
                            &:before{
                                content: '';
                                position: absolute;
                                top: 28px;
                                right: 0;
                                border-left: 1px solid $colorF;
                                width: 1px;
                                height: 100px;
                            }
                            &:last-child:before{
                                display: none;
                            }
                        }
                    }
                }
            }
            .header-search{
                width: 319px;
                .wrapper{
                    height: 50px;
                    border: 1px solid #e0e0e0;
                    display:flex;
                    align-items: center;
                    input{
                        border: 0;
                        box-sizing: border-box;
                        border-right: 1px solid #e0e0e0;
                        width: 264px;
                        height: 50px;
                        padding-left: 14px;
                    }
                    a{
                        @include bgImg(18px,18px,'../../public/imgs/icon-search.png');
                        padding-left: 33px;
                    }
                }
            }
        }
    }
}
</style>