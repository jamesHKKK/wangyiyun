<template>
  <div>
    <div class="head1" :class="fatherComponent?'sssss':''">
      <div class="head_01">
        <div class="a1">
          <h1 class="logo">
            <a href></a>
          </h1>
          <ul class="head_03">
            <li @click="toggle(index)" v-for="(item,index) in arr" :key="index">{{item}}</li>
            <div class="head03_02"></div>
          </ul>

          <div class="head03_03">
            <a v-if="showed"  @click="upper">登录</a>
            <a v-if="!showed" @click="uppered">钱家寄</a>
             <a class="display3" v-if="display3" @click="luppered"><button>退出登录</button></a>
          </div>

          <div v-if="display" class="g-bd" style="background-color:#fafafa;">
            <h1 class="hd f-ff2">请用你的云音乐帐号登录 <i @click="closed" style="display:block;float:right;margin-top:4px" class="el-icon-circle-close"></i></h1>
            <div class="lg">
              <div v-if="display" class="create-log">
                <div class="create-main">
                  <div class="u-plt"></div>
                  <div class="f-mate10">
                    <div @click="ubtn" class="u-btn2 u-btn">
                      <i>手机号登录</i>
                    </div>
                  </div>
                  <div class="f-mate10">
                    <div @click="ubtn1" class="u-btn2 u-btn3">
                      <i>注册</i>
                    </div>
                  </div>
                </div>
                <div class="create-alt">
                  <ul>
                    <li>
                      <i class="u-mlg1"></i> 微信登录
                    </li>
                    <li>
                      <i class="u-mlg1 u-mlg2"></i> QQ登录
                    </li>
                    <li>
                      <i class="u-mlg1 u-mlg3"></i> 微博登录
                    </li>
                    <li>
                      <i class="u-mlg1 u-mlg4"></i> 网易邮箱账号登录
                    </li>
                  </ul>
                </div>
                <div class="create-u">
                  <input type="checkbox" id="j-official-terms" />
                  <label for="j-official-terms" style="margin-left: 2px;">同意</label>
                  <a class="maxx"
                    href="http://st.music.163.com/official-terms/service"
                    target="_blank"
                    style="color:#507DAF"
                  >《服务条款》</a>
                  <a class="maxx"
                    href="http://st.music.163.com/official-terms/privacy"
                    target="_blank"
                    style="color:#507DAF"
                  >《隐私政策》</a>
                  <a class="maxx"
                    href="https://st.music.163.com/official-terms/children"
                    target="_blank"
                    style="color:#507DAF"
                  >《儿童隐私政策》</a>
                </div>
              </div>

          </div>

            </div>
        <div v-if="display1" class="g-bdg" style="background-color:#fafafa;">
            <h2 class="h2h2">手机号登录 <i @click="closed1" style="display:block;float:right;margin-top:4px" class="el-icon-circle-close"></i></h2>
            <div class="display1">

                <input class="inputd username" type="text" placeholder="请输入用户名"><br><br>
                 <input class="inputd password" type="password" placeholder="密码"><br><br>
                 <div class="fs_gd">
                   <input type="radio">自动登录
                    <span style="float:right">忘记密码？</span>
                 </div>
                 <div class="klgd" style="text-align:center">
                 <div @click="primaryied">  <el-button type="primary" plain>登录</el-button></div>
                 </div>
            </div>
            <div class="display1_bottom">
            <div style="float:left;padding-left:15px">



                 <el-link type="primary">< 其他登录方式</el-link>
            </div>
              <div style="float:right;padding-right:15px">
               没有帐号？免费注册
              </div>
            </div>


        </div>
        <div v-if="display2" class="g-bdg" style="background-color:#fafafa;">
            <h2 class="h2h2">手机号注册 <i @click="closed2" style="display:block;float:right;margin-top:4px" class="el-icon-circle-close"></i></h2>
            <div class="display1">

                <input class="inputd username" type="text" placeholder="请输入用户名"><br><br>
                 <input class="inputd password" type="password" placeholder="请设置密码"><br><br>
                 <div class="klgd" style="text-align:center">
                 <div @click="primaryieded">  <el-button type="primary" plain>点击注册</el-button></div>
                 </div>
            </div>
            <div class="display1_bottom">
            <div style="float:left;padding-left:15px">
                 <el-link type="primary">< 返回登录</el-link>
            </div>
            </div>
        </div>






          <div class="head03_04" @click="open">创造者中心</div>
          <div class="head03_05">
            <div class="a3"></div>
            <input type="text" name id="a4" placeholder="音乐/视频/电台/用户" />
          </div>
        </div>
      </div>

      <div class="head_02">
        <div class="a2">
          <ul class="a5">
            <li>
              <span @click="changed(0)" class="a6" :class="change==0?'acti':''">
                <router-link :to="{path:'/discover'}">推荐</router-link>
              </span>
            </li>
            <li>
              <span @click="changed(1)" class="a6" :class="change==1?'acti':''">
                <router-link :to="{path:'/discover/toplist'}">排行榜</router-link>
              </span>
            </li>
            <li>
              <span @click="changed(2)" class="a6" :class="change==2?'acti':''">
                <router-link :to="{path:'/discover/playlist'}">歌单</router-link>
              </span>
            </li>
            <li>
              <span @click="changed(3)" class="a6" :class="change==3?'acti':''">
                <router-link :to="{path:'/discover/djradio'}">主播电台</router-link>
              </span>
            </li>
            <li>
              <span @click="changed(4)" class="a6" :class="change==4?'acti':''">
                <router-link :to="{path:'/discover/artist'}">歌手</router-link>
              </span>
            </li>
            <li>
              <span @click="changed(5)" class="a6" :class="change==5?'acti':''">
                <router-link :to="{path:'/discover/album'}">新碟上架</router-link>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "../../static/css/head.css";
export default {
  props: ["fatherComponent"],
  data() {
    return {
      arr: ["发现音乐", "我的音乐", "朋友", "商城", "音乐人", "下载客户端"],
      arr1: [
        { path: "/" },
        { path: "/my" },
        { path: "/friend" },
        { path: "/" },
        { path: "/" },
        { path: "/download" }
      ],
       change: 0,
       display:false,
       display1:false,
       display2:false,
       showed:true,
       display3:false
    };
  },
  methods: {
    primaryied(){
     var username=$(".username").val()
     var password=$(".password").val()

    this.$http
      .post("/api/login",
      {username:username,password:password},
      { emulateJSON: true}
      )
      .then(res => {

       if(res.data.status==0){
              alert("登录成功")
          this.display1=false
          this.showed=false
            location.reload()
        }else if(res.data.status==1){
             alert("用户名或者密码错误")
        }

      })
      .catch(err => {});
    },
    primaryieded(){
     var username=$(".username").val()
     var password=$(".password").val()
    this.$http
      .post("/api/reg",
      {username:username,password:password},
      { emulateJSON: true}
      )
      .then(res => {

        if(res.data.status==0){
              alert("注册成功")
          this.display2=false
           this.display1=true
        }else if(res.data.status==1){
             alert("该手机号已经注册")

        }

      })
      .catch(err => {});
    },
    closed(){
        this.display=false
    },
     closed1(){
        this.display1=false
    },
closed2(){
this.display2=false
},
    ubtn(){
     this.display1=true
     this.display=false
    },
    ubtn1(){
    this.display2=true
     this.display=false
    },
    uppered(){
       this.display3=!this.display3
    },
    luppered(){
        this.$http
      .post("/api/quit", { emulateJSON: true })
      .then(res => {

        if (res.data.status == 0) {
            this.display3=false
            this.showed=true
        }
      })
      .catch(err => {});
    },
    upper(){
        this.display=true
    },
    toggle(index) {
      this.$router.push(this.arr1[index]);
      if (index == 3) {
        window.open("/store/product", "_blank");
      }
    },
    open() {
      window.open("/creator", "_blank");
    },
    changed(a) {
      this.change = a;
    }
  },
  mounted() {
    this.$http
      .post("/api/just", { emulateJSON: true })
      .then(res => {
        console.log(res.data.status);
        if (res.data.status == 0) {
          this.show = true;
          this.showed=false
        } else if (res.data.status == 1) {
          this.show = false;
        }
        this.$emit("zjl", this.show);
      })
      .catch(err => {});
  }
};
</script>

<style scoped>
.display3{
    position: absolute;
    width: 55px !important;
    top: 23px;
    left: -4px;
    z-index: 999;
}
.head03_03 a{
width: 40px;
}
.maxx{
color: #333 !important;
}
a {
  text-decoration: none;
  color: #ffffff !important;
}
.sssss {
  position: fixed;
  z-index: 10;
}
.g-bd {
  position: fixed;
    top: 50%;
    left: 50%;
    z-index: 999;
    width: 537px;
    min-height: 338px;
    margin-left: -260px;;
   margin-top: -180px;
   background-color: #fff;
   border: 1px solid #d3d3d3;
   border-width: 0 1px;
}
.g-bdg{
  position: fixed;
    top: 50%;
    left: 50%;
    z-index: 999;
    width: 537px;
    min-height: 338px;
    margin-left: -260px;;
   margin-top: -180px;
   background-color: #fff;
   border: 1px solid #d3d3d3;
   border-width: 0 1px;
}
.klgd button{
  margin-top: 20px;
  width: 100%;
}
.h2h2{
  width: 100%;
  height: 38px;
  line-height: 38px;
     font-weight: bold;
    font-size: 14px;
    color: #fff;
    padding-left: 10px;
    background: #2d2d2d;
    box-sizing: border-box;
}
.display1{
    width: 220px;
    height: 225px;
    margin: 0 auto;
    padding: 30px 0 0px;
}
.display1 .inputd{
  width: 100%;
  height: 32px;
}
.display1_bottom{
    width: 100%;
    height: 50px;
    background: #f7f7f7;
    line-height: 50px;
}
.display1_bottom a{
color: #0c72c3 !important;
font-size: 12px;
}
.lg {
  width: 536px;
  min-height: 313px;
  margin: auto;
  border: 1px solid #d8d8d8;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}
.hd {
  font-size: 22px;
  height: 66px;
  line-height: 66px;
  text-align: center;
}
.create-log {
  padding: 40px 0 39px;
}
.create-main {
  float: left;
  width: 224px;
  padding: 0 35px 3px 40px;
  border-right: 1px dotted #ccc;
}
.u-plt {
  height: 120px;
  background: url(../../static/img/platform.png) no-repeat 13px 0;
}
.f-mate10 {
  margin-top: 10px;
}
.u-btn2 {
  width: 219px;
  color: #fff;
  padding: 0 5px 0 0;
  white-space: nowrap;
  display: inline-block;
  height: 31px;
  line-height: 31px;
  overflow: hidden;
  vertical-align: top;
  text-align: center;
  cursor: pointer;
  background: url(../../static/img/button2.png) no-repeat 0 9999px;
  background-position: right -428px;
}
.u-btn2 i {
  width: 218px;
  color: #fff;
  white-space: nowrap;
  display: inline-block;
  height: 31px;
  line-height: 31px;
  overflow: hidden;
  vertical-align: top;
  text-align: center;
  cursor: pointer;
  font-style: normal;
  background: url(../../static/img/button2.png) no-repeat 0 9999px;

  background-position: 0 -387px;
}
.u-btn3 {
  color: #333;
  background-position: right -100px;
}
.u-btn3 i {
  color: #333;
  background-position: 0 -59px;
}
.create-alt {
  float: left;
  padding: 3px 0 3px 39px;
  margin-top: -15px;
}
.create-alt ul li {
  width: 154px;
  height: 36px;
  margin-top: 15px;
  line-height: 40px;
}
.u-mlg1 {
  vertical-align: middle;
  display: inline-block;
  width: 38px;
  height: 38px;
  margin-right: 14px;
  background: url(../../static/img/logo.png) no-repeat 0 9999px;
  background-position: -150px -670px;
}
.u-mlg2 {
  background-position: -190px -670px;
}
.u-mlg3 {
  background-position: -231px -670px;
}
.u-mlg4 {
  background-position: -271px -670px;
}
.create-u {
  white-space: nowrap;
  float: left;
  margin-left: 40px;
  margin-top: 30px;
  font-family: NotoSansHans-Regular;
  font-size: 10px;
  color: rgba(0, 0, 0, 0.4);
  line-height: 15px;
}
</style>
