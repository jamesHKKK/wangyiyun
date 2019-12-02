<template>
<div>
     <toubu></toubu>
        <div class="g-bd" style="padding-top:56px; background-color:#fafafa;">
            <h1 class="hd f-ff2">请用你的云音乐帐号登录</h1>
            <div class="lg">
                  <div class="create-log">
                        <div class="create-main">
                            <div class="u-plt"></div>
                            <div class="f-mate10">
                                <div class="u-btn2">
                                  <i>手机号登录</i>
                                </div>
                            </div>
                            <div class="f-mate10">
                                 <div class="u-btn2 u-btn3">
                                  <i>注册</i>
                                </div>
                            </div>
                        </div>
                        <div class="create-alt">
                            <ul>
                              <li>
                                    <i class="u-mlg1"></i>  微信登录
                              </li>
                              <li>
                                    <i class="u-mlg1 u-mlg2"></i>   QQ登录
                              </li>
                              <li>
                                    <i class="u-mlg1 u-mlg3"></i>   微博登录
                              </li>
                              <li>
                                    <i class="u-mlg1 u-mlg4"></i>   网易邮箱账号登录
                               </li>
                            </ul>

                        </div>
                         <div class="create-u">

                           <input type="checkbox" id="j-official-terms">
                           <label for="j-official-terms" style="margin-left: 2px;">同意</label>
                            <a href="http://st.music.163.com/official-terms/service" target="_blank" style="color:#507DAF">《服务条款》</a>
                            <a href="http://st.music.163.com/official-terms/privacy" target="_blank" style="color:#507DAF">《隐私政策》</a>
                            <a href="https://st.music.163.com/official-terms/children" target="_blank" style="color:#507DAF">《儿童隐私政策》</a>
                         </div>
                  </div>
            </div>
        </div>
     <foot></foot>

</div>
</template>
<script>
import toubu from "../page/head"
import foot from "../page/foot"
export default {
components:{toubu,foot},
};
</script>

<style scoped>
.head_02{
display: none
}
.g-bd{
    width: 980px;
    min-height: 700px;
    _height: 700px;
    margin: 0 auto;
    background-color: #fff;
    border: 1px solid #d3d3d3;
    border-width: 0 1px;
}
.lg {
    width: 536px;
    min-height: 313px;
    margin: auto;
    border: 1px solid #d8d8d8;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    background-color: #fff;
}
.hd {
    font-size: 22px;
    height: 66px;
    line-height: 66px;
    text-align: center;
}
.create-log{
padding: 40px 0 39px;
}
.create-main{
    float: left;
    width: 224px;
    padding: 0 35px 3px 40px;
    border-right: 1px dotted #ccc;
}
.u-plt{
  height: 120px;
  background: url(../../static/img/platform.png) no-repeat 13px 0;
}
.f-mate10{
  margin-top:10px;
}
.u-btn2{
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
.u-btn2 i{
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
.u-btn3{
      color: #333;
    background-position: right -100px;
}
.u-btn3 i{
   color: #333;
      background-position: 0 -59px;
}
.create-alt{
    float: left;
    padding: 3px 0 3px 39px;
    margin-top: -15px;
}
.create-alt ul li{
    width: 154px;
    height: 36px;
    margin-top: 15px;
    line-height: 40px;
}
.u-mlg1{
  vertical-align: middle;
  display: inline-block;
     width: 38px;
    height: 38px;
    margin-right: 14px;
     background: url(../../static/img/logo.png) no-repeat 0 9999px;
    background-position: -150px -670px;
}
.u-mlg2{
    background-position: -190px -670px;
}
.u-mlg3{
background-position: -231px -670px;
}
.u-mlg4{
background-position: -271px -670px;
}
.create-u{
    white-space: nowrap;
    float: left;
    margin-left: 40px;
    margin-top: 30px;
    font-family: NotoSansHans-Regular;
    font-size: 10px;
    color: rgba(0,0,0,0.40);
    line-height: 15px;
}


</style>
