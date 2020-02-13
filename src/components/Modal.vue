<template>
    <transition name="slide">
        <div class="modal" v-show="showModal">
            <div class="mask"></div>
            <div class="modal-dialog">
                <div class="modal-header">
                    <span>{{title}}</span>
                    <a href="javascript:;" class="icon-close"  @click="$emit('quxiao')"></a>
                </div>
                <div class="modal-body">
                    <slot name="body"></slot>
                </div>
                <div class="modal-footer">
                    <a href="javascript:;" class="btn" v-if="btnType==1" @click="$emit('submit')">{{sureText}}</a>
                    <a href="javascript:;" class="btn" v-if="btnType==2" @click="$emit('quxiao')">{{cancelText}}</a>
                    <div class="btn-group" v-if="btnType==3">
                        <a href="javascript:;" class="btn" @click="$emit('submit')">{{sureText}}</a>
                        <a href="javascript:;" class="btn btn-default" @click="$emit('quxiao')">{{cancelText}}</a>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name:'modal',
        props:{
            //弹框类型:小small 中middle 大large 表单from
            modalType:{
                type:String,
                default:'from'
            },
            //弹框标题
            title:String,
            //按钮类型 1.确定按钮 2.取消按钮 3.确定取消
            btnType:String,
            sureText:{
                type:String,
                default:'确定'
            },
            cancelText:{
                type:String,
                default:'取消'
            },
            showModal:Boolean
        }
    }
</script>

<style lang="scss" scoped>
@import '../assets/sass/mixin.scss';
@import '../assets/sass/config.scss';
@import '../assets/sass/modal.scss';
</style>