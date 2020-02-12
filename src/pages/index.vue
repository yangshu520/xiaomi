<template>
    <div class="index">
        <div class="container">
            <div class="swiper-box">
                <div class="nav-menu">
                    <ul class="menu-wrap">
                        <li class="menu-item">
                            <a href="javascript:;">手机 电话卡</a>
                            <div class="children">
                                <ul v-for="(item,index) in menuList" :key="index">
                                    <li v-for="(item1,index1) in item" :key="index1">
                                        <a :href="'/#/product/'+item1.id">
                                            <img :src="item1.img" alt="">
                                            {{item1.name}}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">笔记本 显示器 平板</a>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">家电 插线板</a>
                            <div class="children">
                                <ul v-for="(item,index) in menuList" :key="index">
                                    <li v-for="(item1,index1) in item" :key="index1">
                                        <a :href="'/#/product/'+item1.id">
                                            <img :src="item1.img" alt="">
                                            {{item1.name}}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">出行 穿戴</a>
                            <div class="children">
                                <ul v-for="(item,index) in menuList" :key="index">
                                    <li v-for="(item1,index1) in item" :key="index1">
                                        <a :href="'/#/product/'+item1.id">
                                            <img :src="item1.img" alt="">
                                            {{item1.name}}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">智能 路由器</a>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">电源 配件</a>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">健康 儿童</a>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">耳机 音箱</a>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">生活 箱包</a>
                        </li>
                    </ul>
                </div>
                <swiper :options="swiperOption">
                    <swiper-slide v-for="(item,index) in sliderList" :key="index">
                        <a :href="'/#/product/'+item.id">
                            <img :src="item.img" />
                        </a>
                    </swiper-slide>
                    <div class="swiper-pagination"  slot="pagination"></div>
                    <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>
                </swiper>
            </div>
            <div class="ads-box">
                <a :href="'/#/product/'+item.id" v-for="(item,index) in adsList" :key="index">
                    <img v-lazy="item.img" alt="">
                </a>
            </div>
            <div class="banner">
                <a :href="'/#/product/30'">
                    <img src="../../public/imgs/banner-1.png" alt="">
                </a>
            </div>
        </div>
         <div class="product-box">
                <div class="container">
                    <h2>手机</h2>
                    <div class="wrapper">
                        <div class="banner-left">
                            <a href="/#/product/35">
                                <img src="../../public/imgs/mix-alpha.jpg" alt="">
                            </a>
                        </div>
                        <div class="list-box">
                            <div class="list" v-for="(item,index) in phoneList" :key="index">
                                <div class="item" v-for="(item1,index1) in item" :key="index1">
                                    <span :class="index1%2==0?'new-pro':'kill-pro'">{{index1%2==0?'秒杀':'新品'}}</span>
                                    <div class="item-img">
                                        <img v-lazy="item1.mainImage" alt="">
                                    </div>
                                    <div class="item-info">
                                        <h3>{{item1.name}}</h3>
                                        <p>{{item1.subtitle}}</p>
                                        <p class="price" @click="addCart(item1.id)">{{item1.price | price}}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <service-bar></service-bar>
        <modal 
            :title="username?'提交':'登入'"
            :sureText="username?'查看商品详情':'前往登入'" 
            btnType="1" 
            modalType="middle"
            :showModal="showModal"
            @submit="$router.push('/cart')"
            @quxiao="showModal=false">
            <template v-slot:body>
                <div>
                    {{username?'商品添加成功':"请您先登入"}}
                </div>
            </template>
        </modal>
    </div>
</template>

<script>
    import ServiceBar from '../components/ServiceBar'
    import Modal from '../components/Modal'
    import {swiper,swiperSlide} from 'vue-awesome-swiper'
    import 'swiper/dist/css/swiper.css'
    import img1 from'../../public/imgs/slider/slide-1.jpg'
    import img2 from'../../public/imgs/slider/slide-2.jpg'
    import img3 from'../../public/imgs/slider/slide-3.jpg'
    import img4 from'../../public/imgs/slider/slide-4.jpg'
    import img5 from'../../public/imgs/slider/slide-5.jpg'
    import img6 from '../../public/imgs/item-box-1.png'
    import img7 from '../../public/imgs/item-box-2.png'
    import img8 from '../../public/imgs/item-box-3.jpg'
    import img9 from '../../public/imgs/item-box-4.jpg'
    import img10 from '../../public/imgs/ads/ads-1.png'
    import img11 from '../../public/imgs/ads/ads-2.jpg'
    import img12 from '../../public/imgs/ads/ads-3.png'
    import img13 from '../../public/imgs/ads/ads-4.jpg'
    import {mapState} from 'vuex'
    export default {
        name:'index',
        components:{
            swiper,
            swiperSlide,
            ServiceBar,
            Modal
        },
        data() {
            return {
                swiperOption:{
                    autoplay:true,//自动播放
                    loop:true,//循环播放
                    effect:'cube',//指定样式
                    cubeEffect: {
                        slideShadows: true,
                        shadow: true,
                        shadowOffset: 100,
                        shadowScale: 0.6
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable :true,
                        dynamicBullets: true,
                        dynamicMainBullets: 2,
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                },
                sliderList:[
                    {id:"42",img:img1},
                    {id:"45",img:img2},
                    {id:"46",img:img3},
                    {id:"42",img:img4},
                    {id:"46",img:img5},
                ],
                menuList:[
                    [
                        {id:30,img:img6,name:'小米cc9'},
                        {id:31,img:img7,name:'小米8 青春版'},
                        {id:32,img:img8,name:'Redmi k20 Pro'},
                        {id:33,img:img9,name:'移动4G 专区'},
                    ],
                    [
                        {id:30,img:img6,name:'小米cc9'},
                        {id:33,img:img9,name:'移动4G 专区'},
                        {id:31,img:img7,name:'小米8 青春版'},
                        {id:32,img:img8,name:'Redmi k20 Pro'},
                    ],
                    [
                        {id:30,img:img6,name:'小米cc9'},
                        {id:32,img:img8,name:'Redmi k20 Pro'},
                        {id:31,img:img7,name:'小米8 青春版'},
                        {id:33,img:img9,name:'移动4G 专区'},
                    ],
                    [
                        {id:33,img:img9,name:'移动4G 专区'},
                        {id:30,img:img6,name:'小米cc9'},
                        {id:31,img:img7,name:'小米8 青春版'},
                        {id:32,img:img8,name:'Redmi k20 Pro'},
                    ],
                    [
                        {id:30,img:img6,name:'小米cc9'},
                        {id:31,img:img7,name:'小米8 青春版'},
                        {id:33,img:img9,name:'移动4G 专区'},
                        {id:32,img:img8,name:'Redmi k20 Pro'},
                    ],
                    [
                        {id:32,img:img8,name:'Redmi k20 Pro'},
                        {id:33,img:img9,name:'移动4G 专区'},
                        {id:30,img:img6,name:'小米cc9'},
                        {id:31,img:img7,name:'小米8 青春版'},
                    ]
                ],
                adsList:[
                    {id:33,img:img10},
                    {id:48,img:img11},
                    {id:45,img:img12},
                    {id:47,img:img13}
                ],
                phoneList:[],
                showModal:false
            }
        },
        mounted(){
            this.getPhoneList()
        },
        methods:{
            getPhoneList(){
                this.axios.get('/products',{
                    params:{
                        categoryId:100012,
                        pageSize:14
                    }
                }).then((res)=>{
                    //slice分割和splice
                    //slice不会改变数组  splice 会改变原数组对象 
                    res.list=res.list.slice(6,14)
                    this.phoneList=[res.list.slice(0,4),res.list.slice(4,8)]
                })
            },
            addCart(id){
                this.axios.post('/carts',{
                    productId:id,
                    selected: true
                }).then((res)=>{
                    this.showModal=true;
                    this.$store.dispatch('saveCartCount',res.cartTotalQuantity)
                }).catch(()=>{
                    this.showModal=true;
                })
                
            }
        },
        filters:{
            price(val){
                if(!val) return '0.00'
                return '￥'+val.toFixed(2)+'元'
            }
        },
        computed:{
            ...mapState(['username'])
        }
    }
</script>

<style lang="scss" scoped>
@import '../assets/sass/config.scss';
@import '../assets/sass/mixin.scss';
.index{
    .swiper-box{
        .nav-menu{
            box-sizing: border-box;
            position: absolute;
            width: 264px;
            height: 451px;
            z-index: 9;
            padding: 26px 0;
            background-color: #6e6c6fa6;
            .menu-wrap{
                .menu-item{
                    height: 44px;
                    line-height: 44px;
                    a{//a里面的颜色大小优先级高于父亲的
                       display: block;
                       position: relative;
                       font-size: $fontI;
                       color:#ffffff; 
                       padding-left: 30px;
                       &:after{
                           position: absolute;
                           right: 30px;
                           top: 14px;
                           content: '';
                           @include bgImg(10px,15px,'../../public/imgs/icon-arrow.png')
                       }
                    }
                    &:hover{
                        transition: all .5s;
                        background-color:$colorA;
                        .children{
                            width: 962px;
                            transition: width .2s;
                        }
                    }
                    .children{
                        box-sizing: border-box;
                        width: 0;
                        overflow: hidden;
                        height: 451px;
                        background-color: $colorG;
                        position: absolute;
                        top:0;
                        left:264px;
                        border:1px solid $colorH;
                        ul{
                            display: flex;
                            justify-content: space-between;
                            height: 75px;
                            li{
                                height: 75px;
                                line-height: 75px;
                                flex:1;
                                padding-left: 33px;
                                a{
                                    color:$colorB;
                                    font-size: $fontJ;
                                }
                                img{
                                    vertical-align: middle;
                                    width: 42px;
                                    height: 35px;
                                    margin-right: 15px;
                                }
                            }
                        }
                    }
                }
            }
        }
        .swiper-container {
            height: 451px;
            .swiper-button-prev{
                left:274px;
            }
            img{
                width: 100%;
                height: 100%;
            }
        }  
    }
    .ads-box{
        @include flex();
        margin-top: 14px;
        margin-bottom: 30px;
        a{
            width: 296px;
            height: 167px;
            img{
               overflow: hidden;
            }
            &:hover{
                transform: translate3d(0,-2px,2px);
                box-shadow: 10px 10px 2px #888888;
            }
        }
    }
    .banner{
        margin-bottom: 40px;
    }
    .product-box{
        background-color: $colorJ;
        padding: 30px 0 50px;
        h2{
            font-size: $fontF;
            height: 22px;
            line-height: 22px;
            color: $colorB;
            margin-bottom: 20px;
        }
        .wrapper{
            display: flex;
            .banner-left{
                width: 224px;
                height: 619px;
                margin-right: 16px;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .list-box{
                .list{
                    @include flex();
                    width: 986px;
                    margin-bottom: 14px;
                    &:last-child{
                        margin-bottom: 0;
                    }
                    .item{
                        width: 236px;
                        height: 302px;
                        background-color: $colorG;
                        text-align: center;
                        span{
                            display: inline-block;
                            width: 67px;
                            height: 24px;
                            font-size: $fontJ;
                            color: $colorG;
                            line-height: 24px;
                            &.new-pro{
                                background-color: #7ecf68;
                            }
                            &.kill-pro{
                                background-color: #e82626;
                            }
                        }
                        .item-img{
                            img{
                                height: 195px;
                                width: 100%;
                            }
                        }
                        .item-info{
                            h3{
                                font-size: $fontJ;
                                color:$colorB;
                                line-height: 14px;
                                font-weight: bold;
                            }
                            p{
                                color: $colorD;
                                line-height: 13px;
                                margin: 6px auto 13px;
                            }
                            .price{
                                font-size: $colorJ;
                                font-weight: bold;
                                color:#f20a0a;
                                cursor: pointer;
                                &:after{
                                    @include bgImg(22px,22px,'../../public/imgs/icon-cart-hover.png');
                                    content: '';
                                    margin-left:5px;
                                    vertical-align:middle;
                                }
                            }
                        } 
                    }
                }
            }
        }
    }
}  
</style>