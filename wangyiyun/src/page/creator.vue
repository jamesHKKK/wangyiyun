<template>
  <div>
    <toubu v-show="!show" v-on:zjl="fnk"></toubu>
    <div v-show="!show" class="g-bd" style="padding-top:56px; background-color:#fafafa;">
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
            <a
              href="http://st.music.163.com/official-terms/service"
              target="_blank"
              style="color:#507DAF"
            >《服务条款》</a>
            <a
              href="http://st.music.163.com/official-terms/privacy"
              target="_blank"
              style="color:#507DAF"
            >《隐私政策》</a>
            <a
              href="https://st.music.163.com/official-terms/children"
              target="_blank"
              style="color:#507DAF"
            >《儿童隐私政策》</a>
          </div>
        </div>
      </div>
    </div>

    <div v-show="show">
      <!-- 头部 -->
      <div>
        <div class="top">
          <div class="left">
            <img src="../../static/img/20190.png" width="117px" height="30px" alt />
            <span class="seq"></span>
            <span>创作者中心</span>
          </div>
          <div class="righter">
            <div class="user">
              <span class="icn"></span>
              <div class="picture">
                <img src="../../static/img/touxi.png" alt />
              </div>
              <span class="name">钱家寄</span>
              <span class="red-btn">公司入驻 &nbsp;&nbsp;></span>
              <span class="seq"></span>
              <span class="quit">退出</span>
            </div>
          </div>
        </div>
      </div>
      <!-- content -->
      <div class="creator-center">
        <div class="creator-left">
          <div class="productup">
            <div class="productsend">发布作品</div>
          </div>
          <div class="totile">
            <div class="totile-centent">
              <ul>
                <li class="totile-a">
                  <div class="title-b">
                    <img
                      src="https://p1.music.126.net/h51h-XL8qnyQ_B-PWJ9Nmg==/109951163719775651.png"
                      alt
                    />
                    <h2>综合</h2>
                  </div>
                  <ul v-if="product!='product'">
                    <li
                      @click="act1(index)"
                      class="title-c"
                      :class="activeIndex1 == index?'btnAtive':''"
                      v-for="(item,index) in product[0].list"
                      :key="index"
                    >
                      <div class="bac" :class="activeIndex1 == index?'':'actived'"></div>
                      {{item.listdata}}
                    </li>
                  </ul>
                  <div class="index__line___zj3O9"></div>
                </li>
                <li class="totile-a">
                  <div class="title-b">
                    <img
                      src="https://p1.music.126.net/ATRQbj64I4UfxH_3qD2xqA==/109951163719777590.png"
                      alt
                    />
                    <h2>音乐</h2>
                  </div>
                  <ul v-if="product!='product'">
                    <li
                      @click="act2(index)"
                      class="title-c"
                      :class="activeIndex2 == index?'btnAtive':''"
                      v-for="(item,index) in product[1].list"
                      :key="index"
                      v-cloak
                    >
                      <div class="bac" :class="activeIndex2 == index?'':'actived'"></div>
                      {{item.listdata}}
                    </li>
                  </ul>
                  <div class="index__line___zj3O9"></div>
                </li>

                <li class="totile-a">
                  <div class="title-b">
                    <img
                      src="https://p1.music.126.net/-rKKE5an6HthPoGOms7p7A==/109951163719776122.png"
                      alt
                    />
                    <h2>视频</h2>
                  </div>
                  <ul v-if="product!='product'">
                    <li
                      @click="act3(index)"
                      class="title-c"
                      :class="activeIndex3 == index?'btnAtive':''"
                      v-for="(item,index) in product[2].list"
                      :key="index"
                      v-cloak
                    >
                      <div class="bac" :class="activeIndex3 == index?'':'actived'"></div>
                      {{item.listdata}}
                    </li>
                  </ul>
                  <div class="index__line___zj3O9"></div>
                </li>

                <li class="totile-a">
                  <div class="title-b">
                    <img
                      src="https://p1.music.126.net/dZqzFohKvjOULUDSyfQiKg==/109951163719775652.png"
                      alt
                    />
                    <h2>电台</h2>
                  </div>
                  <ul v-if="product!='product'">
                    <li
                      @click="act4(index)"
                      class="title-c"
                      :class="activeIndex4 == index?'btnAtive':''"
                      v-for="(item,index) in product[3].list"
                      :key="index"
                      v-cloak
                    >
                      <div class="bac" :class="activeIndex4 == index?'':'actived'"></div>
                      {{item.listdata}}
                    </li>
                  </ul>
                  <div class="index__line___zj3O9 index10"></div>
                </li>
              </ul>
            </div>
            <div class="index_cp">
              <p>网易公司版权所有©1997-2019</p>
              <p>杭州乐读科技有限公司运营</p>
              <p>浙网文[2018]3506-263号</p>
            </div>
          </div>
        </div>

        <div class="creator-right">
          <!-- 首页 -->
          <div v-if="activeIndex1==0" class="first_page">
            <div class="index-scoll">
              <div class="index_ul">
                <div class="index-li">
                  <span class="index_icon"></span>
                  <span
                    class="sistem"
                  >【系统】#520我想跟你表白# 我的眼里都是你，甜甜蜜蜜 You Know What I Mean，表白你的男神女神，有机会赢取“云音乐周边、云豆奖励、黑胶VIP”~</span>
                  <span class="index-time">2019-05-17</span>
                </div>
                <div class="index-li">
                  <span class="index_icon"></span>
                  <span
                    class="sistem"
                  >麻辣小龙虾 or 椒盐皮皮虾，你将如何抉择！参与话题#夏天的夜晚，你最想吃什么#，分享自己的吃货作品&吃货翻唱；以及喜欢的夏夜美食，就有机会获得“黑胶会员、云豆奖励、云音乐周边”哦！</span>
                  <span class="index-time">2019-06-17</span>
                </div>
                <div class="index-li">
                  <span class="index_icon"></span>
                  <span
                    class="sistem"
                  >你包容我的坏脾气，我也不介意你大大的啤酒肚。参与话题，分享自己的作品，留下您最想对父亲说的话，就有机会获得“黑胶会员、云豆奖励、云音乐周边”哦！</span>
                  <span class="index-time">2019-09-17</span>
                </div>
                <div class="index-li">
                  <span class="index_icon"></span>
                  <span class="sistem">#唤醒你的少女心#，甜甜的春天，甜甜的你，分享你的少女心，有机会赢取“云音乐周边、云豆奖励、黑胶VIP”哈~</span>
                  <span class="index-time">2019-10-17</span>
                </div>
                <div class="index-li">
                  <span class="index_icon"></span>
                  <span class="sistem">#唤醒你的少女心#，甜甜的春天，甜甜的你，分享你的少女心，有机会赢取“云音乐周边、云豆奖励、黑胶VIP”哈~</span>
                  <span class="index-time">2019-11-17</span>
                </div>
              </div>
              <div class="more">查看更多</div>
            </div>

            <div class="index-eq">
              <div class="index-user">
                <div class="index-img">
                  <img
                    src="http://p1.music.126.net/7wXQD31gh3vOB8A4GLIt3A==/109951164464577558.jpg"
                    alt
                  />
                </div>
                <div class="span">钱家寄</div>
              </div>
              <div class="index-tab">
                <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
                  <el-tab-pane label="音乐创作" name="first">用户管理</el-tab-pane>
                  <el-tab-pane label="视频创作" name="second">
                        <div class="style-detail">
                              <div class="style-nottitle">
                                      暂未开通原创视频达人
                              </div>
                              <div class="style-not-des">
                                成为达人可获得官方流量推荐，现金奖励，达人标志，粉丝私信推送等多项专属权益
                              </div>
                              <div class="style-wrap">
                                   <div class="style-charts">
                                    <div class="style-vid">
                                          <div class="style-min">
                                              <p>视频投稿数</p>
                                              <p>0/5</p>
                                          </div>
                                    </div>
                                   </div>
                                  <div class="style-charts">
                                    <div class="style-vid style-right">
                                          <div class="style-min">
                                              <p>粉丝量</p>
                                              <p>1/500</p>
                                          </div>
                                    </div>
                                   </div>
                              </div>
                              <div class="sty_c">
                                  <el-button type="info" round>去发视频涨粉丝</el-button>
                                  <br><br><br>
                                  <el-link type="primary">查看全部权益&nbsp;&nbsp;></el-link>
                              </div>


                        </div>
                  </el-tab-pane>
                  <el-tab-pane label="电台创作" name="third">角色管理</el-tab-pane>
                </el-tabs>
              </div>
              <div class="button-c">
                <div class="button-left">

                </div>
                <div class="button-right"></div>
              </div>

            </div>
          </div>

          <!-- 作品数据 -->
          <div v-if="activeIndex1==1" class="pro_data">
            <el-tabs v-model="activeName1" @tab-click="handleClick1">
              <el-tab-pane label="音乐" name="first">用户管理</el-tab-pane>
              <el-tab-pane label="视频" name="second">配置管理</el-tab-pane>
              <el-tab-pane label="电台" name="third">角色管理</el-tab-pane>

            </el-tabs>
          </div>

          <!--粉丝中心 -->
          <div v-if="activeIndex1==2" class="fs_center">

              <div class="g-centent">
                    <div class="style-i">
                        <div class="style__img___2I7bp"></div>
                        <p>
                          为了更好地提供服务，需要满足以下条件之一才可开启这项服务
                        </p>
                        <ul class="style_ul">
                              <li>1.入驻成为音乐人</li>
                              <li>2.申请成为电台主播</li>
                              <li>3.认证成为明星用户或达人</li>
                              <li>4.拥有1000以上的粉丝</li>
                        </ul>
                    </div>
              </div>
          </div>

          <!-- 我的钱包 -->
          <div v-if="activeIndex1==3" class="wallter">我的钱包</div>

          <!-- 评论管理 -->
          <div v-if="activeIndex1==4" class="comment">评论管理</div>

          <!-- 入驻音乐人 -->
          <div v-if="activeIndex2==0" class="musicial">入驻音乐人</div>

          <!-- 视频管理 -->
          <div v-if="activeIndex3==0" class="video_man">
              <div class="g-border">
                <el-tabs type="border-card">
                  <el-tab-pane label="已发布（0）">
                      <div class="m-empty">
                        <div class="fs-enpty">
                            <i class="pic icon_pub"></i>
                            <p>你还没有已发布作品，赶快上传吧！</p>
                            <div class="center-but">
                              <el-button type="primary" round>上传视频</el-button>
                            </div>

                        </div>

                      </div>
                  </el-tab-pane>
                  <el-tab-pane label="发布中（0）">
                     <div class="m-empty">
                        <div class="fs-enpty">
                            <i class="pic icon_pub"></i>
                        </div>
                      </div>
                  </el-tab-pane>
                  <el-tab-pane label="已锁定（0）">
                     <div class="m-empty">
                        <div class="fs-enpty">
                            <i class="pic icon_pub"></i>
                        </div>
                      </div>
                  </el-tab-pane>
                  <el-tab-pane label="草稿箱（0）">
                     <div class="m-empty">
                        <div class="fs-enpty">
                            <i class="pic icon_pub"></i>
                        </div>
                      </div>
                  </el-tab-pane>
               </el-tabs>
               </div>
          </div>

          <!-- 达人计划 -->
          <div v-if="activeIndex3==1" class="plan_people">达人计划</div>

          <!-- 视频收益 -->
          <div v-if="activeIndex3==2" class="video_get">视频收益</div>

          <!-- 视频水印 -->
          <div v-if="activeIndex3==3" class="video_walter">视频水印</div>

          <!-- 入驻电台主播 -->
          <div v-if="activeIndex4==0" class="radio_all">入驻电台主播</div>
        </div>
      </div>
    </div>
    <foot v-show="!show"></foot>
  </div>
</template>
<script>
import toubu from "../page/head";
import foot from "../page/foot";
export default {
  components: { toubu, foot },
  data() {
    return {
      activeName: "second",
      activeName1:"second",
      show: true,
      product: "product",
      activeIndex1: 0,
      activeIndex2: -1,
      activeIndex3: -1,
      activeIndex4: -1
    };
  },
  methods: {
    fnk(val) {
      this.show = val;
    },
    act1(index) {
      (this.activeIndex1 = index),
        (this.activeIndex2 = null),
        (this.activeIndex3 = null),
        (this.activeIndex4 = null);
    },
    act2(index) {
      this.activeIndex2 = index;
      (this.activeIndex1 = null),
        (this.activeIndex3 = null),
        (this.activeIndex4 = null);
    },
    act3(index) {
      (this.activeIndex3 = index),
        (this.activeIndex2 = null),
        (this.activeIndex1 = null),
        (this.activeIndex4 = null);
    },
    act4(index) {
      (this.activeIndex4 = index),
        (this.activeIndex2 = null),
        (this.activeIndex3 = null),
        (this.activeIndex1 = null);
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
     handleClick1(tab, event) {
      console.log(tab, event);
    }
  },
  mounted() {
    var cHeight = $(window).height() - 70;
    $(".creator-left").css("height", cHeight);
    $(".totile").css("height", cHeight - 69);
    $(window).resize(function() {
      cHeight = $(window).height() - 70;
      $(".creator-left").css("height", cHeight);
      $(".totile").css("height", cHeight - 69);
    });
    var num = 0;
    setInterval(function() {
      if (num == 4) {
        num = 0;
        $(".index_ul").css("top", 0);
      } else {
        num++;
        $(".index_ul").animate({ top: -num * 80 });
      }
    }, 5000);
  },

  beforeCreate: function() {
    $.ajax({
      url: "../../static/json/product.json",
      data: "",
      async: true,
      typedata: "json",
      type: "get"
    }).done(res => {
      this.product = res;
    });
  }
};
</script>

<style scoped>
.g-bd {
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

/* 第二版 */

.top {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  background: #ffffff;
}
.left {
  float: left;
  width: 300px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.seq {
  display: inline-block;
  width: 1px;
  height: 14px;
  background: #eee;
  margin: 0 10px;
}
.left span {
  color: #999999;
  font-size: 16px;
}

.righter {
  float: right;
  width: 338px;
  height: 70px;
  margin-right: 30px;
}
.user {
  width: 338px;
  height: 70px;
  display: flex;
  align-items: center;
}
.name {
  font-size: 14px;
  color: #666666;
}
.quit {
  font-size: 12px;
  color: #999999;
}
.red-btn {
  background: #ff3a3a;
  border-radius: 16px;
  width: 130px;
  height: 32px;
  line-height: 32px;
  text-align: center;
  font-size: 14px;
  margin-left: 10px;
  color: #fff;
  cursor: pointer;
}
.icn {
  display: inline-block;
  width: 21px;
  height: 16px;
  margin: 0 10px;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAgCAYAAAETX9qrAAAAAXNSR0IArs4c6QAAA8RJREFUWAnVmM9LVFEUx+e9GTPGRYtKy2YcB/pBUCS56Actwk0R0U6oFtnClkkQ5Kpa6B+g22ohESYIRQSRm6idEKJJCwnBccaRyczCilDnR58zeR9v3puZ92aaUbvwPPfcc873fs+5P94bNQ9tZmYmI1K1cDisadZBZdRVR7zkUXrBCDFcxuup8kS+yOttYGua1ojXgkT45I+0TCYz/7fn8Wizs7Md6XR6QA0Uk7py9Pl8J82UJUh081heYoXQdRD9hYyW8Wi2UpFIJE4ikp2tkXUqFAptc03BqJcNyjJgOEqmXq/3vLIz5bQ5e6PYsvyU7bQywlk3b4kqclTcCklVx0U47SzkVMo4i3hQ8kkQ1FBKoJOvlD0HkHK/aW5u3o5cdAzW9T6Wap/Vz1giZaAMbRyHIYB3qzGymaR/lIkwZxpZRsnOE4/HD62ursaVn5JulvMLIPUqgH08CPAVpeeTbkDzxRUd00lptKhHGUad2p1iGxwrI9YWAsEpOTbZfUqNdGr1jMGL9L02b4cB4uaJuw3gkLhqsVjsQDKZ/OQQ58oM+Fcy31XxhdJ1/XrFQUnps3GRucrPnVODDVQuBFK45hRP/ZL4hJHPrb629GVLKCeOZ4R+SOlKMukl3gAvRcenBTGubCJtTHHKcKaDYmSCZpifkL40wAZkUgXINnzFcA6g+NmYyuB6mwTAOBTsQzLVst8KgHWiP1SOVlkMNOsLuw6YPRZlbm4usLa2FrOCWHVHUGuAG91WUzdBTj7/ByiLOSpMo07plGLnndWms21CoE+VEljIV+7lYDD42zg9XIH7U6nUMPtPTsimNxKdIOt2SE4LGXnlenkjTyCPbDq7PAQg/JGz1yLn6TX2c3l8ttLQiMZ1k6KaVTlWlcqUqqb1rU5SkhWOjpWUT09Osaae2tra3WT45B+qNULsYYUn0u/373HCc3PnL/Ay6VSvOTNgIpGoW1lZ6SXjriIr84P43qampj4SXDXHS5+tdwHxgHjbt7jZ1w1Rw5+JfqHch3Q/ffmKMBoT1XB73EHexTYOuS7IvTcc1jtLS0s7lpeX7+F3k6Eaq72QXhJRMwhk5N3/CNkN8W9mm7VPAmcg1s9z3Gpzq5dN1DoBhN/yFrkVCAQ+sJx70W9ArJvH7a93K2SOXjGiOahVUBxPfRXmLAtSfuV9LytyA4OEo1S0ZwPnLHeqnuzXE6eylU3/jqeuXKRqxFHJnzxnuVXGjM88mQiivmg0ehXZjtrKU0+/5J/RglVqg1CKGPkn5Bj9Ye7gQaRxV/8BB0CJl3rq290AAAAASUVORK5CYII=);
  background-size: contain;
}
.picture {
  display: inline-block;
}
.creator-center {
  margin-top: 70px;
  overflow: hidden;
  background-color: #fafafa;
}
.creator-left {
  position: fixed;
  left: 0;
  top: 70px;
  width: 270px;
  height: 600px;
}
selector::-webkit-scrollbar {
  width: 0;
  background: #e7eaf3;
}
.creator-right {
  margin: 30px 60px 100px 330px;
  width: calc(100%-270px);
  /* height: 600px; */
  background-color: #fafafa;
}
.productup {
  width: 270px;
  height: 69px;
  background-color: #fafafa;
  overflow: hidden;
}
.totile {
  width: 270px;
  overflow: auto;
  overflow-x: hidden;
}
.totile-centent {
  width: 270px;
  height: 732px;
  background: #fafafa;
}
.productsend {
  border-radius: 50px;
  background: red;
  width: 200px;
  height: 40px;
  margin: 0 auto;
  color: #fff;
  font-size: 16px;
  line-height: 40px;
  text-align: center;
  margin-top: 20px;
}
.totile-a {
  width: 270px;
  height: auto;
  color: #333333;
}
.title-b {
  width: 270px;
  height: 49.8px;
  padding-left: 71px;
  padding-bottom: 7px;
  position: relative;
  box-sizing: border-box;
}
.title-b h2 {
  font-weight: 400;
  display: inline-block;
  line-height: 25px;
  margin-top: 18px;
  font-size: 18px;
}
.title-b img {
  position: absolute;
  left: 44px;
  top: 22px;
}
.title-c {
  padding: 9px 0 9px 71px;
  font-size: 14px;
  position: relative;
}
.bac {
  content: "";
  position: absolute;
  top: 10px;
  left: 1px;
  width: 4px;
  height: 18px;
  background: red;
}
.btnAtive {
  color: #ff3a3a;
}
.actived {
  display: none;
}
.totile-a li:hover {
  background-color: #eee;
}
.index__line___zj3O9 {
  display: inline-block;
  width: 122px;
  height: 1px;
  margin: 18px 0 0 71px;
  text-align: center;
  background-color: #eee;
}
.index10 {
  width: 270px;
  margin-left: 0;
  margin-top: 60px;
}
.index_cp {
  color: #999999;
  margin: 19px 0 0 30px;
  font-size: 12px;
  margin-bottom: 80px;
}
.index_cp p {
  margin: 10px 0;
  letter-spacing: 2px;
}

/* 首页 */
.index-scoll {
  width: 1128px;
  height: 80px;
  padding: 0 30px;
  background: #fff;
  box-sizing: border-box;
  display: flex;
  justify-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}
.index_ul {
  width: 100%;
  height: 400px;

  position: absolute;
  top: 0;
  left: -30px;
}
.index-li {
  color: #333333;
  font-size: 14px;
  line-height: 80px;
  text-align: center;
}
.sistem {
  width: 891px;
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: middle;
  text-align: left;
}
.index-time {
  display: inline-block;
  color: #999;
  margin: 0 10px;
}
.index_icon {
  display: inline-block;
  width: 13px;
  height: 16px;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAgCAYAAAF7rFiTAAAABGdBTUEAALGPC/xhBQAAAtFJREFUSA3dVz2IE0EUvl0FE6MWdwpX2ahoTGUSsDnk8AQb0V5EBAvP3sZG0f4KLcRCLA7vWlErURBExCI/VYxctBc8RaIxKTTr9w37HrO7s3vJGS0c2Lx5P9978968mbmbmnKNWq0W8KPOdxkkZTD/SKlXr9efBUFwgowvEzKR4QknYchXq1UjNz+2Qoxp4EHxBoKjIrSpQbZarR39fv+bpVgD8qDy7XZ7Bl7uicCgGo3G6eFw+CgU9oHYbnK3hNTl+ZNaFKei2WzOc9mmnoSPNJxVMBVwwWPuizB8Z9sZbxQ4qmPbcb4O8B5ONJvBYNClIGPsFp2CsPkaVZRp1IOxj9b5lWYQl3ue9yQuG4nXJSFaB1H3Z6FYbuo1p0qlciCfz88g/HcHcEkA1Gkk2zDsu1OFQqFULBY/2zrOt8YFAByC7CLlvV5vHSThOCIA4AeMTJ8SJMP3/TPlcvmx8AoC4BOEuoFiIBT57iyVSiZfLUQWgEB0zENxYINElkYXRDEyyG6zkUEShdSA0A3HbeFGc57nFzCa38hQ9OyMsS8BtNlrcfD3qd0RmXcVlvWeJ4FLsku+lrXGXC53RPQKQlV4Ly+JQijPF8+Z9B3lujwxclF2A/byJXRzMf0rLPkYHGemRkxmINyfs3hdzsGOZ5JnMzEQpI2F3EcGD5CBeRgTRhA4A6GxzkK3jG+LC5Qh4+15HiVdjdtovUWBIFcxX8E3bhC6IGYl9EFeRyIQNIuq3fwk4cMVaO/m/Ssy4cMVSK0nOflngUzXdTqdbd1u9xba9NKksgjP1m28Mlcw/8nr7jKc35lUgBQ/FxiID+Ou0CB+riI8VhbhgYnw9ntCf2FWEAdfQ///EYmkzrxQymsgN/4wx+u4hm7aPhKBqESwfSBP8ZGOMz7A+CSCkEaGM5BtgRt8Gn+eLGJD+V/KYXzTof4L6Fts+HM8Vndxc5NPHb8BU9bzgtsF7fQAAAAASUVORK5CYII=)
    no-repeat;
  background-size: contain;
  position: relative;
  top: 2px;
}
.more {
  position: absolute;
  right: 10px;
  color: #999999;
  font-size: 14px;
  line-height: 80px;
  text-align: center;
  width: 60px;
}
.index-eq {
  margin: 30px 0;
  padding: 40px 30px 0;
  background: #fff;
}
.index-user {
  width: 100%;
  height: 90px;
  line-height: 90px;

  vertical-align: middle;
}
.index-user .index-img {
  float: left;
  width: 90px;
  height: 90px;
  margin-left: 10px;
}
.index-img img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.index-user .span {
  float: left;
  line-height: 90px;
  font-size: 20px;
  color: #333333;
  margin-left: 40px;
}

.user-manage {
  height: 80px;
}
.index-tab {
  margin-top: 40px;
}
.g-centent{
margin-top: 150px;
width: 100%;
height: 400px;
}
.style-i{
width: 504px;
height: 350px;
margin: 0 auto;
}
.style__img___2I7bp {
    width: 120px;
    height: 102px;
    margin-left: 212px;
    background: url(//s5.music.126.net/static_public/5bf7ee027078250d9983623d_5bfe8b0d7078250d99836257/no_access.41669ea119fb5c44d877574d95d6db7c.svg) no-repeat;
    background-size: contain;
}
.style-i p{
  font-size: 18px;
  color: #333333;
  text-align: center;
  margin-top: 60px;
}
.style_ul{
  width: 400px;
margin-top: 30px;
margin-left: 75px;

}
.style_ul li{
  width: 200px;
  list-style: none;
  float: left;
  color: #666666;
  font-size: 14px;
  margin: 5px 0;
}
.g-border{
    width: 100%;
    height: 500px;
}
.m-empty{
width: 100%;
height: 322px;
background: #fff;
}
.m-empty .pic {
    display: block;
    margin: 0 auto;

    width: 103px;
    height: 104px;
    background: url(//s5.music.126.net/static_public/5ca310452c846cda4efefe83_5ca310452c846cda4efefe85/9ca5226121c06fbf0fe49dd9f5a44bc9.png) no-repeat -9999px -9999px;
    background-position: -150px 0;
}
.fs-enpty{
margin-top: 200px;
}
.fs-enpty p{
  font-size: 16px;
  color: #666666;
  text-align: center;
  margin: 10px 0;
}
.center-but{
  text-align: center;
}
.style-detail{
margin-bottom: 20px;
padding: 20px 0 30px;
background: #fff;
}
.style-nottitle{
  width: 180px;
  margin: 0 auto;
  margin-top: 20px;
  font-size: 18px;
  color: #333;
}
.style-not-des{
  width: 518px;
color: #666666;
font-size: 14px;
margin-top: 14px;
margin: 0 auto;
margin-top: 20px;
}
.style-charts{
    margin: 30px 0 25px;
}
.style-vid{
    width: 170px;
    height: 170px;
    border-radius: 50%;
    background: #eee;
    overflow: hidden;
float: left;
}
.style-right{
  float: right;
}
.style-min{
  width: 150px;
  height: 150px;
  margin: 0 auto;
  margin-top: 10px;
  background: #fff;
  border-radius: 50%;
  display: flex;
    justify-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;

}
.style-wrap{
  width: 490px;
  margin: 0 auto;
  overflow: hidden;
}
.sty_c{
  margin-top:20px;
  text-align: center
}
.el-button--info{
  background: #333333;
  color: #fff;
}
.button-c{
margin-top: 30px;
background: #F7F7F7;
height: 140px;
}
.button-left{
width: 300px;
height: 80px;
}




/* 作品数据 */

/* 粉丝中心 */

/* 我的钱包 */

/* 评论管理 */
</style>
