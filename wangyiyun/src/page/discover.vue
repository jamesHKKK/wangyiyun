<template>
  <div>
    <toubu></toubu>
    <div class="discover-recommend">
        <div class="recommend" v-if="fatherComponent='recommend'">
            <div class="recommend-swiper">
                <div class="swiper-container swiper-container1">
                    <div class="swiper-wrapper swiper-wrapper1">
                        <div class="swiper-slide" :style="{backgroundImage: 'url(' + lun[index].image + ')' }" v-for="(item,index) in lun" v-bind:key="index">
                            <div class="swiper-slide-aaa">
                                <img :src=lun[index].img alt="">
                            </div>
                        </div>
                    </div>
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
        <div class="recommend-white">
            <div class="white-left">
                <!-- 热门推荐 -->
                <div class="recommend-white-re">
                    <div class="recommend-white-re-top">
                        <a href="/discover/playllist/" >{{tuijian}}</a>
                        <div class="recommend-white-re-tab">
                            <a href="/discover/playllist/" v-for="(item,index) in tab" v-bind:key="index">{{item}}</a>
                        </div>
                        <span class="recommend-white-re-span">
                            <a href="/discover/playllist/">更多</a>
                            <i></i>
                        </span>
                    </div>
                    <ul class="recommend-white-re-bottom">
                        <li v-for="(item,index) in list" v-bind:key="index">
                            <div class="recommend-white-re-cover">
                                <img v-bind:src="item.img" alt="">
                                <div class="recommend-white-cover-bottom">
                                    <a href="javascript:;" class="recommend-white-re-play"></a>
                                    <span class="recommend-white-re-music"></span>
                                    <span class="recommend-white-re-nb">{{item.listen}}</span>
                                </div>
                            </div>
                            <p><a href=""><i></i>{{item.title}}</a></p>
                        </li>
                    </ul>
                </div>
                <!-- 个性化推荐 -->
                <div class="recommend-white-re">
                    <div class="recommend-white-re-top">
                        <a href="/discover/playllist/" >{{tuijian1}}</a>
                    </div>
                    <ul class="recommend-white-re-bottom">
                        <li>
                            <div class="recommend-white-re-cover">
                                <span class="recommend-white-re-cover1">星期一</span>
                                <span class="recommend-white-re-cover2">25</span>
                                <span class="recommend-white-re-cover3" href="/discover/recommend/taste"></span>
                            </div>
                            <p><a href=""><i></i>每日歌曲推荐</a></p>
                            <p class="recommend-white-re-bottom-p">根据你的口味生成，<br>每天6:00更新</p>
                        </li>
                        <li v-for="(item,index) in list1" v-bind:key="index">
                            <div class="recommend-white-re-cover">
                                <img :src=item.img alt="">
                                <div class="recommend-white-cover-bottom">
                                    <a href="javascript:;" class="recommend-white-re-play"></a>
                                    <span class="recommend-white-re-music"></span>
                                    <span class="recommend-white-re-nb">{{item.listen}}</span>
                                </div>
                            </div>
                            <p><a href=""><i></i>{{item.title}}</a></p>
                            <p class="recommend-white-re-bottom-p">{{item.title1}}</p>
                        </li>

                    </ul>
                </div>
                <!-- 新碟上架 -->
                <div class="recommend-white-re recommend-white-die">
                    <div class="recommend-white-re-top">
                        <a href="/discover/playllist/" >{{tuijian2}}</a>
                        <span class="recommend-white-re-span">
                            <a href="/discover/playllist/">更多</a>
                            <i></i>
                        </span>
                    </div>
                    <div class="recommend-white-disk">
                        <div class="recommend-white-disk-inner">
                            <div class="swiper-container2">
                                <div class="swiper-wrapper ">
                                    <div class="swiper-slide" v-for="(item,index) in list2" v-bind:key="index">
                                        <div class="recommend-white-disk-img">
                                            <img :src=item.img alt="">
                                            <a class="recommend-white-disk-msk" href="/album?id=83487317"></a>
                                            <a class="recommend-white-disk-play" href="javascript:;"></a>
                                        </div>
                                        <p><a href="/album?id=83487317">{{item.text1}}</a></p>
                                        <p><a href="/album?id=83487317">{{item.text2}}</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-button-next swiper-button-next1 swiper-button-black"></div>
                        <div class="swiper-button-prev swiper-button-prev1 swiper-button-black"></div>
                    </div>
                </div>
                <!-- 榜单 -->
                <div class="recommend-white-re recommend-white-die">
                    <div class="recommend-white-re-top">
                        <a href="/discover/playllist/" >{{tuijian3}}</a>
                        <span class="recommend-white-re-span">
                            <a href="/discover/playllist/"><text>更多</text>更多</a>
                            <i></i>
                        </span>
                    </div>
                    <div class="recommend-white-flag">
                        <div class="recommend-white-blk" v-for="(item,index) in yun" v-bind:key="index">
                            <div class="recommend-white-blk-top">
                                <div class="recommend-white-blk-top1">
                                    <img :src=yun[index].img alt="">
                                    <a class="recommend-white-blk-top11" href=""></a>
                                </div>
                                <div class="recommend-white-blk-top2">
                                    <a class="recommend-white-blk-top21" href=""><p>{{yun[index].music}}</p></a>
                                    <div class="play">
                                        <a class="play-a" href="">播放</a>
                                    </div>
                                    <div class="play cang">
                                        <a class="play-a" href="">收藏</a>
                                    </div>
                                </div>
                            </div>
                            <div class="recommend-white-blk-bottom">
                                <ul >
                                    <li v-for="(item,index) in yun[index].list" v-bind:key="index">
                                        <span>{{index+1}}</span>
                                        <a href="">{{item}}</a>
                                    </li>
                                    <div class="more">
                                        <a href="/discover/toplist?id=19723756">查看全部 ></a>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 侧边 -->
            <div class="white-right">
                <div class="white-right-myinfo">
                    <div>
                        <a href="/user/home?id=1394991253" class="lin">
                            <img src="http://p1.music.126.net/cYvwvZF8kr1B1AX2jZeo_g==/109951163207976673.jpg?param=80y80" alt="">
                        </a>
                        <div class="right">
                            <h4><a href="/user/home?id=1394991253">吃肉不吧唧吧唧嘴</a></h4>
                            <p>
                                <a href="/user/level" class="level">
                                    7<i></i>
                                </a>
                            </p>
                            <div class="button">
                                <a href="javascript:;"><i>签到</i></a>
                            </div>
                        </div>
                    </div>
                    <ul>
                        <li class="fst">
                            <a href="/user/event?id=1394991253">
                                <strong>0</strong>
                                <span>动态</span>
                            </a>
                        </li>
                        <li class="fst">
                            <a href="/user/event?id=1394991253">
                                <strong>4</strong>
                                <span>关注</span>
                            </a>
                        </li>
                        <li class="fst">
                            <a href="/user/event?id=1394991253">
                                <strong>0</strong>
                                <span>粉丝</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="white-right-singer">
                    <h3>
                        <span>{{sing.title}}</span>
                        <a href="/discover/artist/signed/" class="more">{{sing.all}} ></a>
                    </h3>
                    <ul>
                        <li v-for="(item,index) in sing.list" v-bind:key="index">
                            <a href="/user/home?id=29879272">
                                <div class="head"><img :src=item.img alt=""></div>
                                <div class="ifo">
                                    <h4>{{item.singer}}</h4>
                                    <p>{{item.message}}</p>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="white-right-singers white-right-singer">
                    <h3>
                        <span>{{sings.title}}</span>
                    </h3>
                    <ul>
                        <li v-for="(item,index) in sings.list" v-bind:key="index">
                            <a href="/user/home?id=278438485">
                                <img :src=item.img alt="">
                            </a>
                            <div class="ifo">
                                <h4>
                                    <a href="">{{item.singer}}</a>
                                    <i class="u-icn-1"></i>
                                </h4>
                                <p>{{item.message}}</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <foot></foot>
  </div>
</template>
<script>
import Swiper from 'swiper'
import toubu from "../page/head";
import foot from "../page/foot";
import axios from '../../node_modules/axios'
import $ from 'jquery'
export default {
    components: { toubu, foot },
    data() {
        return {
            current:"0",
            tuijian:"",
            tab:[],
            list:[],
            tuijian1:"",
            list1:[],
            tuijian2:"",
            list2:[],
            yun:"",
            tuijian3:"",
            sing:"",
            sings:"",
            lun:""
        }
    },
    mounted() {
        this.$http.get("../../static/json/hotdoor.json").then((res)=>{
            // console.log(res.data[6].list)
            this.tuijian=res.data[0].tuijian
            this.tab=res.data[0].tab
            this.list=res.data[0].list
            this.tuijian1=res.data[1].tuijian
            this.list1=res.data[1].list
            this.tuijian2=res.data[2].tuijian
            this.list2=res.data[2].list
            this.yun=res.data[3].yun1
            this.tuijian3=res.data[3].tuijian
            this.sing=res.data[4]
            this.sings=res.data[5]
            this.lun=res.data[6].list
            return this
        }).then(()=>{
            var swiper1=new Swiper('.swiper-container1', {
                loop : true,
                spaceBetween: 30,
                effect: 'fade',
                autoplay: {
                    delay: 3000,
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-tui1',
                    prevEl: '.swiper-button-tui2',
                },
            });
            var swiper2 = new Swiper('.swiper-container2', {
                loop : true,
                slidesPerView: 5,
                slidesPerGroup : 5,
                // direction: getDirection(),
                navigation: {
                    nextEl: '.swiper-button-next1',
                    prevEl: '.swiper-button-prev1',
                },

            });
        });

    },
    methods: {

    }
};
</script>

<style scoped>
@import "../../node_modules/swiper/css/swiper.min.css";
@import "../../static/css/discover.css";

</style>
