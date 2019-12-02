<template>
  <div>
    <producthead></producthead>
    <!-- <div id="g_top" class="m-header f-pr">
      <div class="m-nav f-pr">
        <div class="m-logo f-fl">
          <a href="javascript:;"></a>
        </div>
        <div class="m-search f-fl">
          <div class="inputwrap">
            <form class="f-pr" action>
              <input v-on:click="show01" type="txt" class="searchbox" autocomplete="off" placeholder="真无线耳机" />
            </form>
          </div>
          <div v-show="show"  class="wrap">
            <h2>热门搜索</h2>
            <ul>
              <li v-for="(item,index) in arr" :key="index">{{item}}</li>
            </ul>
          </div>
        </div>

        <div class="m-shopcar f-fl f-pr">
          <a href="javascript:;">
           <span class="s-flag num f-pa j-cartnum">0</span>
          </a>
        </div>
        <div class="m-user f-fl" v-on:click="show02">
          <div class="m-select f-pr">
            <div class="login">登录</div>
            <ul v-show="show1">
              <li>
                <a class="f-pr s-fc0">
                  <em class="phone"></em>
                  手机号登录
                  <span class="f-pa"></span>
                </a>
              </li>
              <li>
                <a class="f-pr s-fc0">
                  <em class="wechat"></em>
                  微信登录
                  <span class="f-pa"></span>
                </a>
              </li>
              <li>
                <a class="f-pr s-fc0">
                  <em class="qq"></em>
                  QQ登录
                  <span class="f-pa"></span>
                </a>
              </li>
              <li>
                <a class="f-pr s-fc0">
                 <em class="sina"></em>
                  新浪微博登录
                  <span class="f-pa"></span>
                </a>
              </li>
              <li>
                <a class="f-pr s-fc0">
                 <em class="netease"></em>
                  网易邮箱账号登录
                  <span class="f-pa"></span>
                </a>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div> -->
    <div class="n-banner">
      <div class="swiper-container">
									<div class="swiper-wrapper">
										<div class="swiper-slide">
											<li class="li1">
                        <a href="">
                        <img src="../../static/img/productImg/109951164503861716.jpg" alt="">
                       </a>
                      </li>
										</div>
										<div class="swiper-slide">
											<li class="li2">
                        <a href="">
                        <img src="../../static/img/productImg/E-Fk7RsaaTvs_o5ljdiHIQ==_109951164507351737.jpg" alt="">
                       </a>
                      </li>
										</div>
										<div class="swiper-slide">
											<li class="li3">
                        <a href="">
                        <img src="../../static/img/productImg/109951164504242283.jpg" alt="">
                       </a>
                      </li>
										</div>
										<div class="swiper-slide">
										<li class="li4">
                      <a href="">
                        <img src="../../static/img/productImg/109951164501909871.jpg" alt="">
                       </a>
                    </li>
										</div>
									</div>
									<!-- Add Pagination -->
									<div class="swiper-pagination"></div>
									<!-- Add Arrows -->
									<div class="swiper-button-next swiper-button-white"></div>
									<div class="swiper-button-prev swiper-button-white"></div>
								</div>
    </div>
    <div class="g-tab">
      <div class="hometab">
        <ul class="f-tc">
          <li class="tab">
            <a href="">
              <img src="http://p3.music.126.net/UKhDHWnEMmoOo27PQmDPbA==/19117208672446378.jpg">
              <span class="f-thide">热销爆品</span>
            </a>
            <em class="line"></em>
          </li>
          <li class="tab">
              <a href="">
              <img src="http://p4.music.126.net/tKMAm5OvR-2lAj7dnEOhsg==/18623527952924939.jpg">
              <span class="f-thide">IP周边</span>
            </a>
            <em class="line"></em>
          </li>
          <li class="tab">
            <a href="">
              <img src="http://p3.music.126.net/PzH4QQKE5R97J9f2V-SvqQ==/18585045045959929.jpg">
             <span class="f-thide">数码影音</span>
            </a>
            <em class="line"></em>
          </li>
          <li>
            <a href="">
              <div class="left"></div>
              <div class="right">
                 <div class="txt s-fc1">积分商城</div>
                 <span class="count">0</span>
                 <span class="jifen">积分</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="g-bd g-bd-home">
        <div class="ma">
          <div class="n-index">
            <div class="subjs f-cb">
              <div class="subj pad-right">
                <a href="">
                  <img src="http://p4.music.126.net/kQqf40w-NFhLXIksQPgSwg==/109951164207184328.jpg" alt="">
                </a>
              </div>
              <div class="sub">
                <a href="">
                  <img src="http://p4.music.126.net/QtFPuBnRPFatpnGsyNJYhw==/109951163973446450.jpg" alt="">
                </a>
              </div>
            </div>
            <div class="m-block" style="min-height:816px;">
              <span class="mid-txt mid-bold">编辑推荐</span>
              <div class="m-product">
                <ul class="list">
                   <li v-for="(item,index) in itemDetail[0].topic_answer" :key="index">
                     <div>
                       <a target="_blank" :href="item.dz" class="cover f-pr f-blk j-statistics">
                         <img :src="item.a" alt="">
                         <span class="spec f-pa" :style="item.yc">
                           <span class="origin f-pa">¥{{item.xj}}</span>
                           <span class="cut f-pa"><del>¥{{item.yj}}</del></span>
                         </span>
                      </a>
                      <div class="cnt f-tc">
                        <h3 class="f-thide2">
                          <span class="tag tag-red"><em>{{item.tj}}</em></span>
                          <a href="">{{item.js}}</a>
                        </h3>
                        <p class="txt f-thide">¥<em>{{item.sj}}</em></p>
                      </div>
                     </div>
                   </li>
                </ul>
              </div>
            </div>
            <div class="digalb f-mgt10">
              <div class="cnt">
                <div class="inner">
                  <span><i></i>数字专辑</span>
                  <p class="f-thide">Taylor Swift 新专辑火热售卖中<em class="p-cover"></em></p>
                  <a href="javascript:;">立 即 购 买 &gt;</a>
                </div>
              </div>
              <div class="covers f-pa">
                <img class="sml" src="https://p1.music.126.net/D1gL45hPNWNxoq1Foanh6Q==/109951164370176967.jpg?param=120y120">
                <img class="big" src="https://p2.music.126.net/6CB6Jsmb7k7qiJqfMY5Row==/109951164260234943.jpg?param=120y120">
                <i class="circle"></i>
              </div>
            </div>
            <div class="m-block" style="min-height:5017px;">
              <span class="mid-txt mid-bold">热门商品</span>
              <div class="m-product">
                <ul class="list">
                   <li v-for="(item,index) in itemDetail[1].rmsp" :key="index">
                     <div>
                       <a href="" class="cover f-pr f-blk j-statistics">
                         <img :src="item.a" alt="">
                         <span class="spec f-pa" :style="item.yc">
                           <span class="origin f-pa">¥{{item.xj}}</span>
                           <span class="cut f-pa"><del>¥{{item.yj}}</del></span>
                         </span>
                         
                      </a>
                      <div class="cnt f-tc">
                        <h3 class="f-thide2">
                          <span class="tag tag-red" :style="item.yc1"><em>{{item.tj}}</em></span>
                          <a href="">{{item.js}}</a>
                        </h3>
                        <p class="txt f-thide">¥<em>{{item.sj}}</em></p>
                      </div>
                     </div>
                   </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="m-wrap">
          <div class="m-item m-unclick">
            <span>查看<br>营业执照</span>
          </div>
          <div class="m-item m-unclick">
            <span>100%<br>正品</span>
          </div>
          <div class="m-item m-unclick">
            <span>七天无理由退货</span>
          </div>
          <div class="m-item shopcar">
            <span>
              <i class="icon"></i>
              <span class="f-pr">购物车<span class="num f-pa j-cartnum">0</span></span>
            </span>
          </div>
          <div class="m-item kefu">
            <i class="icon"></i>
            <span class="f-pr">客服</span>
          </div>
          <div class="m-item m-back">
            <a href="javascript:;"></a>
          </div>
        </div>
    </div>
    <foot></foot>
     
  </div>
</template>
<script>
import "../../static/css/product.css";
import Swiper from "swiper"

import foot from "../page/foot"
import producthead from "../page/producthead"
import {mapState} from "vuex"
export default {
  components:{foot,producthead},
  
  data() {
    return {
      
      
    }
  },
  computed:{
        ...mapState(["itemDetail"])
    },
  methods: {
   
  },
  mounted:function(){
    new Swiper(".swiper-container",{
      loop:true,
      pagination:{
        el:".swiper-pagination"
      },
      navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
        },
        effect: 'fade',
				autoplay: {
					delay: 3000,
					stopOnLastSlide: false,
					disableOnInteraction: true,
				}
    })
  }
};
</script>

<style>
</style>
