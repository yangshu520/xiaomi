<template>
    <div class="order-list">
        <order-header title="订单列表">
            <template v-slot:tip>
                <span>
                确认支付正确,欢迎下次购买
                </span>
            </template>
        </order-header>
        <div class="wrapper">
            <div class="container">
                <div class="order-box">
                  <loading v-if="loading"></loading>
                  <div class="order" v-for="(item,index) in list" :key="index">
                      <div class="order-title">
                          <div class="item-info fl">
                              {{item.createTime}}
                              <span>|</span>
                              {{item.receiverName}}
                              <span>|</span>
                              订单号：{{item.orderNo}}
                              <span>|</span>
                              {{item.paymentTypeDesc}}
                          </div>
                          <div class="item-money fr">
                              <span>应付金额：</span>
                              <span class="money">{{item.payment}}</span>
                              <span>元</span>
                          </div>
                      </div>
                      <div class="order-content clearfix">
                          <div class="good-box fl">
                              <div class="good-list" v-for="(item1,index1) in item.orderItemVoList" :key="index1">
                                  <div class="good-img">
                                      <img v-lazy="item1.productImage" alt="">
                                  </div>
                                  <div class="good-name">
                                      <div class="p-name">{{item1.productName}}</div>
                                      <div class="p-money">{{item1.currentUnitPrice}} X {{item1.quantity}}元</div>
                                  </div>
                              </div>
                          </div>
                          <div class="good-state fr" v-if="item.status== 10">
                              <a href="javascript:;" @click="goPay(item.orderNo)">{{item.statusDesc}}</a>
                              <a href="javascript:;" @click="cancalOrder(item.orderNo)">取消订单</a>
                          </div>
                          <div class="good-state fr" v-if="item.status== 20">
                              <a href="javascript:;">{{item.statusDesc}}</a>
                          </div>
                      </div>
                  </div>
                  <el-pagination v-if="!loading" class="pagination"
                    background
                    layout="prev, pager, next"
                    :total="total"
                    @size-change="sizeChange"
                    @current-change="handleChange"
                    :pageSize="pageSize"
                    :currentPage="pageNum"
                    >
                  </el-pagination>
                  <no-data v-if="!loading&&list.length==0"></no-data>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import OrderHeader from './../components/OrderHeader'
import Loading from './../components/Loading'
import NoData from './../components/NoData'
    export default {
        name:'order-list',
        components:{
            OrderHeader,
            Loading,
            NoData
        },
        data() {
            return {
                list: [],
                loading:true,//控制是否显示loading
                pageSize:5,
                pageNum:1,
                total:0,
            }
        },
        mounted(){
            this.getOrderList()
        },
        methods:{
            getOrderList(){
                this.axios.get('/orders',{
                  params:{
                    pageSize:this.pageSize,
                    pageNum:this.pageNum
                  }
                }).then((res)=>{
                  this.loading=false
                  this.list=res.list
                  this.total=res.total
                }).catch(()=>{
                  this.loading=false
                })
                console.log(this.pageNum)
            },
            //去支付
            goPay(orderNo){
                this.$router.push({
                    path:'/order/pay',
                    query:{
                        orderNo
                    }
                })
            },
            //取消订单
            cancalOrder(orderNo){
                this.axios.put(`/orders/${orderNo}`).then((res)=>{
                    this.$message.success('取消订单成功')
                    this.getOrderList()
                }).catch(()=>{
                    this.$message.error('取消订单失败')
                })
            },
            handleChange(pageNum){
              this.pageNum=pageNum
              this.getOrderList()
            },
            sizeChange(pageSize){
              this.pageSize=pageSize
            }
        }
    }
</script>

<style lang="scss">
  @import './../assets/sass/config.scss';
  @import './../assets/sass/mixin.scss';
  .order-list{
    .wrapper{
      background-color:$colorJ;
      padding-top:33px;
      padding-bottom:110px;
      .order-box{
        .order{
          border: 1px solid $colorF;
          background-color:$colorG;
          margin-bottom:31px;
          &:last-child{
            margin-bottom:0;
          }
          .order-title{
            height: 74px;
            line-height: 74px;
            background-color:$colorK;
            padding:0 43px;
            font-size:16px;
            color:$colorC;
            .item-info{
              span{
                margin:0 9px;
              }
            }
            .money{
              font-size:26px;
              color:$colorB;
            }
          }
          .order-content{
            padding:0 43px;
            .good-box{
              width:88%;
              .good-list{
                display: flex;
                align-items: center;
                height:145px;
                .good-img{
                  width:112px;
                  img{
                    width:100%;
                  }
                }
                .good-name{
                  font-size:20px;
                  color:$colorB;
                }
              }
            }
            .good-state{
              height: 145px;
              line-height: 145px;
              font-size: 14px;
              color:$colorA;
              a{
                color:$colorA;
                margin-right: 15px;
                &:last-child{
                   margin-right: 0;
                   color: #333;
                }
              }
            }
          }
        }
        .pagination{
          text-align:center;
        }
        .el-pagination.is-background .el-pager li:not(.disabled).active{
          background-color: #FF6600;
        }
        .el-button--primary{
          background-color: #FF6600;
          border-color: #FF6600;
        }
        .load-more,.scroll-more{
          text-align:center;
        }
      }
    }
  }
</style>