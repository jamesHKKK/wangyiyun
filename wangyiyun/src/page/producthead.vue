<template>
<div>
    <div id="g_top" class="m-header f-pr">
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
          <div class="m-item m-back" @click="db">
            <a href="javascript:;"></a>
          </div>
        </div>
    </div>
</template>
<script>
import "../../static/css/producthead.css";
export default {
    data() {
    return {
      show: false,
      show1: false,
      arr:["花","耳机","服装","蓝牙","乐器"],
      
    }
  },
  methods: {
    show01() {
      this.show = !this.show;
     
    },
    show02() {
      this.show1 = !this.show1;
      
    },
    db(){   
      //         window.scrollBy(0,-100);
			// scrolldelay = setTimeout(db,10)
			// var stp = document.documentElement.scrollTop || document.body.scrollTop;
			// if(stp == 0){
			// 	clearTimeout(scrolldelay);
			// }
           }
  
  },
  mounted() {
    
    
  }
}
</script>
<style>


</style>