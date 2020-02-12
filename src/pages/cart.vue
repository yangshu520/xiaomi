<template>
  <div class="cart">
    <order-header title="我的购物车">
      <template v-slot:tip>
        <span>温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算</span>
      </template>
    </order-header>
    <div class="wrapper">
      <div class="container">
        <div class="cart-box">
          <ul class="cart-item-head">
            <li class="col-1"><span class="checkbox" :class="{'checked':allChecked}" @click="toggleAll"></span>全选</li>
            <li class="col-3">商品名称</li>
            <li class="col-1">单价</li>
            <li class="col-2">数量</li>
            <li class="col-1">小计</li>
            <li class="col-1">操作</li>
          </ul>
          <ul class="cart-item-list">
            <li class="cart-item" v-for="(item,index) in cartList" :key="index">
              <div class="item-check">
                <span class="checkbox" :class="{'checked':item.productSelected}" @click="updateCart(item)"></span>
              </div>
              <div class="item-name">
                <img v-lazy="item.productMainImage" alt="">
                <span>{{item.productName+' '+item.productSubtitle}}</span>
              </div>
              <div class="item-price">{{item.productPrice}}元</div>
              <div class="item-num">
                <div class="num-box">
                  <a href="javascript:;" @click="updateCart(item,'-')">-</a>
                  <span>{{item.quantity}}</span>
                  <a href="javascript:;" @click="updateCart(item,'+')">+</a>
                </div>
              </div>
              <div class="item-total">{{item.productTotalPrice}}元</div>
              <div class="item-del" @click="deleteCart(item)"></div>
            </li>
          </ul>
        </div>
        <div class="order-wrap clearfix">
          <div class="cart-tip fl">
            <a href="/">继续购物</a>
            共<span>{{cartList.length}}</span>件商品，已选择<span>{{cartcount.length}}</span>件
          </div>
          <div class="total fr">
            合计：<span>{{cartTotalPrice}}</span>元
            <a href="javascript:;" class="btn">去结算</a>
          </div>
        </div>
      </div>
    </div>
    <service-bar></service-bar>
    <nav-footer></nav-footer>
    <modal 
    :showModal="showModal"
    title="确定删除该商品吗?"
    btnType="3"
    @submit="submit"
    @quxiao="quxiao">
        <template v-slot:body>
            <div>
                <span class="delete">该商品为:<span>{{name}}</span></span>
            </div>
        </template>
    </modal>
  </div>
</template>
<script>
  import OrderHeader from './../components/OrderHeader'
  import ServiceBar from './../components/ServiceBar'
  import NavFooter from './../components/NavFooter'
  import Modal from './../components/Modal'
  export default{
    name:'cart',
    components:{
      OrderHeader,
      ServiceBar,
      NavFooter,
      Modal
    },
    data(){
      return {
          cartList:[],//商品裂变
          allChecked:false,// 是否全选
          cartTotalPrice:0,//商品总金额
          cartcount:[],//选中过滤后的订单
          showModal:false,//控制模态框
          name:'',//删除的商品名字
          deleteId:'',//删除商品Id
      }
    },
    mounted(){
        this.getCartList()
    },
    methods:{
        //获取商品
        getCartList(){
            this.axios.get('/carts').then((res)=>{
                this.renderDate(res)
            })
        },
        //单选按钮 加 减 获取商品
        updateCart(item,type){
            let quantity=item.quantity;
            let selected=item.productSelected;
            if(type=='-'){
                if(quantity=='1'){
                    this.$message.info('商品至少保留一件');
                    return
                }
                --quantity;//前置-- 先减在发生变化
            }else if(type=='+'){
                if(quantity>item.productStock){
                    this.$message.info('库存不足');
                    return
                }
                ++quantity;
            }else{
                selected=!item.productSelected;
            }
            this.axios.put(`/carts/${item.productId}`,{
                quantity,
                selected
            }).then((res)=>{
                this.renderDate(res)
            })
        },
        //删除商品
        deleteCart(item){
            this.deleteId=item.productId;
            this.showModal=true;
            this.name=item.productName
        },
        submit(){
            this.showModal=false;
            this.axios.delete(`/carts/${this.deleteId}`).then((res)=>{
                this.renderDate(res)
                this.$message.success('删除商品成功')
            })
        },
        quxiao(){
            this.showModal=false;
            this.$message.info('取消了商品的删除')
        },
        //控制全选和全部选
        toggleAll(){
            this.allChecked=!this.allChecked
            let path=this.allChecked?'/carts/selectAll':'/carts/unSelectAll';
            this.axios.put(path).then((res)=>{
                this.renderDate(res)
            })
        },
        renderDate(res){
            this.cartList=res.cartProductVoList || [];
            this.allChecked=res.selectedAll;
            this.cartTotalPrice=res.cartTotalPrice;
            this.cartcount=this.cartList.filter((item,index)=>{
                return item.productSelected;
            })
        }
    }
  }
</script>
<style lang="scss">
.cart{
    .delete{
       font-size: 16px;
       span{
           color: red;
           font-size: 18px;
           margin-left: 10px;
       }
    }
    .wrapper{
      background-color:#F5F5F5;
      padding-top:30px;
      padding-bottom:114px;
      .cart-box{
        background-color:#fff;
        font-size:14px;
        color:#999999;
        text-align:center;
        .checkbox{
          display: inline-block;
          width: 22px;
          height: 22px;
          border: 1px solid #E5E5E5;
          vertical-align: middle;
          margin-right: 17px;
          cursor:pointer;
          &.checked{
            background:url('../../public/imgs/icon-gou.png') #FF6600 no-repeat center;
            background-size:16px 12px;
            border:none;
          }
        }
        .cart-item-head{
          display:flex;
          height: 79px;
          line-height: 79px;
          .col-1{
            flex:1;
          }
          .col-2{
            flex:2;
          }
          .col-3{
            flex:3;
          }
        }
        .cart-item-list{
          .cart-item{
            display:flex;
            align-items:center;
            height:125px;
            border-top:1px solid #E5E5E5;
            font-size:16px;
            .item-check{
              flex:1;
            }
            .item-name{
              flex:3;
              font-size: 18px;
              color: #333333;
              display: flex;
              align-items: center;
              img{
                width:80px;
                height:80px;
                vertical-align:middle;
              }
              span{
                margin-left: 30px;
              }
            }
            .item-price{
              flex:1;
              color:#333333;
            }
            .item-num{
              flex:2;
              .num-box{
                display:inline-block;
                width:150px;
                height:40px;
                line-height:40px;
                border:1px solid #E5E5E5;
                font-size:14px;
                a{
                  display:inline-block;
                  width:50px;
                  color:#333333;
                }
                span{
                  display:inline-block;
                  width:50px;
                  color:#333333;
                }
              }
            }
            .item-total{
              flex:1;
              color:#FF6600;
            }
            .item-del{
              flex:1;
              width:14px;
              height:12px;
              background:url('/imgs/icon-close.png') no-repeat center;
              background-size:contain;
              cursor:pointer;
            }
          }
        }
      }
      .order-wrap{
        font-size:14px;
        color: #666666;
        margin-top: 20px;
        height: 50px;
        line-height: 50px;
        .cart-tip{
          margin-left: 29px;
          a{
            color: #666666;
            margin-right:37px;
          }
          span{
            color:#FF6600;
            margin:0 5px;
          }
        }
        .total{
          font-size:14px;
          color:#FF6600;
          span{
            font-size:24px;
          }
          a{
            width:202px;
            height:50px;
            line-height:50px;
            font-size:18px;
            margin-left:37px;
          }
        }
      }
    }
  }
</style>