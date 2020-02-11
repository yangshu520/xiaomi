<template>
    <div>
        <div class="footer">
            <div class="footer-logo">
                <img src="../../public/imgs/logo-footer.png" alt="">
                <p>小米商城</p>
            </div>
            <div class="footer-link">
                <a href="http://123.57.167.146:443/" target="_blank">个人博客主页</a><span>|</span>
                <a href="http://123.57.167.146:443/" target="_blank">Vue框架</a><span>|</span>
                <a href="http://123.57.167.146:443/" target="_blank">react框架</a><span>|</span>
                <a href="http://123.57.167.146:443/" target="_blank">node后端</a><span>|</span>
                <a href="http://123.57.167.146:443/" target="_blank">express框架</a><span>|</span>
                <a href="http://123.57.167.146:443/" target="_blank">自学前端</a>
            </div>
            <div class="copyright">Copyright ©2020 <span class="doman">123.57.167.146:8080</span> All Rights Reserved.</div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'nav-footer'
    }
</script>

<style lang="scss" scoped>
@import '../assets/sass/config.scss';
.footer{
    height: 170px;
    border-top: 4px solid $colorA;
    background-color: $colorB;
    color:$colorD;
    font-size: $fontI;
    text-align: center;
    .footer-logo{
        margin:15px 0;
        img{
            width: 53px;
            height: 36px;
            margin-bottom: 13px;
        }
    }
    .footer-link{
        a{
            display: inline-block;
            color:$colorD;
        }
        span{
            margin: 0 10px;
        }
    }
    .copyright{
        margin-top: 13px;
        .doman{
            color:$colorA;
        }
    }
}
</style>