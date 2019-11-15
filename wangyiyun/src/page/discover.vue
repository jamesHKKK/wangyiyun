<template>
  <div>
    <toubu></toubu>

      <div class="recommend" v-if="fatherComponent='recommend'">
        <div class="recommend-swiper">
            <div class="swiper-container swiper-container1">
                <div class="swiper-wrapper swiper-wrapper1">
                    <div class="swiper-slide" style="background-image:url(http://p1.music.126.net/ERrZy5EpcwJnyZaWtEs0xw==/109951164501993643.jpg?imageView&quality=89)"></div>
                    <div class="swiper-slide" style="background-image:url(http://p1.music.126.net/BY1gL1RGAVSHxP6-9d3Mqw==/109951164501999516.jpg?imageView&quality=89)"></div>
                    <div class="swiper-slide" style="background-image:url(http://p1.music.126.net/M0yC8YnuC88NsqZEFR6FSg==/109951164503615246.jpg?imageView&quality=89)"></div>
                    <div class="swiper-slide" style="background-image:url(http://p1.music.126.net/fXEQ1aYu3xmEpZSwu6u27A==/109951164503758739.jpg?imageView&quality=89)"></div>
                    <div class="swiper-slide" style="background-image:url(http://p1.music.126.net/3UgrvzfeveXB7TkQluKJ_g==/109951164503770506.jpg?imageView&quality=89)"></div>
                    <div class="swiper-slide" style="background-image:url(http://p1.music.126.net/3UgrvzfeveXB7TkQluKJ_g==/109951164503770506.jpg?imageView&quality=89)"></div>
                    <div class="swiper-slide" style="background-image:url(http://p1.music.126.net/558UH6GafPpJIhtt_veWyw==/109951164502890194.jpg?imageView&quality=89)"></div>
                    <div class="swiper-slide" style="background-image:url(http://p1.music.126.net/yI5Bzm8MOx2aDboAxmVn7w==/109951164502009550.jpg?imageView&quality=89)"></div>
                    <div class="swiper-slide" style="background-image:url(http://p1.music.126.net/4AQ-neZ5OYjQ331CkA_I5g==/109951164503082619.jpg?imageView&quality=89)"></div>
                </div>
                <!-- Add Pagination -->
                <div class="swiper-pagination swiper-pagination-white"></div>
            </div>
            <!-- Add Arrows -->
            <div class="swiper-button-next swiper-button-white swiper-button-tui1"></div>
            <div class="swiper-button-prev swiper-button-white swiper-button-tui2"></div>
            <div class="recommend-download">
                <a href="" class="recommend-btn btn"></a>
                <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
            </div>
        </div>
    </div>

    <foot></foot>
  </div>
</template>
<script>
import toubu from "../page/head";
import foot from "../page/foot";
import Swiper from 'swiper'

export default {
  props: ["fatherComponent"],
    mounted() {
        var swiper1=new Swiper('.swiper-container', {
            loop:true,
            spaceBetween: 30,
            effect: 'fade',
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    },
  components: { toubu, foot }
};
</script>




<style scope>
@import "../../node_modules/swiper/css/swiper.min.css";
.head_02 {
  display: block;
}
*{
    margin: 0;padding: 0;
}
.recommend{
    width: 100%;
    height: 285px;
    background: black;
}
.recommend-swiper {
    margin: 0 auto;
    width: 985px;
    height: 285px;
    position: relative;
}
.swiper-container1{
    float: left;
    width: 730px;
    height: 285px;
    position: relative;
    overflow: hidden;
    list-style: none;
    padding: 0;
    z-index: 1;
}
.swiper-slide {
    background-position: center;
    background-size: cover;
}
.swiper-pagination-bullet{
    background: white;
}
.swiper-pagination-bullet-active{
    background:#9f0606;
}
.swiper-button-tui1{
    right: -60px !important;
}
.swiper-button-tui2{
    left: -60px !important;
}
.recommend-download{
    position: absolute;
    top: 0;
    z-index: 20;
    right: -1px;
    width: 254px;
    height: 285px;
    background: url('https://s2.music.126.net/style/web2/img/index/download.jpg?965a94c87533ccbde73106bea32344d9') no-repeat 0 0;
}
.recommend-download .recommend-btn{
    display: block;
    width: 215px;
    height: 56px;
    margin: 186px 0 0 19px;
    background: url('https://s2.music.126.net/style/web2/img/index/download.jpg?965a94c87533ccbde73106bea32344d9') no-repeat;
    background-position: 0 9999px;
}
.recommend-download .recommend-btn:hover{
    background: url('https://s2.music.126.net/style/web2/img/index/download.jpg?965a94c87533ccbde73106bea32344d9') no-repeat;
    background-position: 0px -290px;
}
.recommend-download>p{
    font-size: 12px;
    margin: 10px auto;
    text-align: center;
    color: #8d8d8d;
}
</style>
