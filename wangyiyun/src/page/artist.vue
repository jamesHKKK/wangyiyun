<template>
  <div>
    <toubu></toubu>
    <div class="discover">
      <!-- 侧边栏 -->
      <div class="g-wrap4 n-sgernav">
        <h2 class="tit">推荐</h2>
        <ul class="nav f-cb">
          <li  id="duli">
           <a href="">推荐歌手</a>
          </li>
          <li>
             <router-link :to="{path:'/signed'}">
                  入住歌手
               </router-link>
          </li>
        </ul>
        <div class="blk">
          <h2 class="tit">华语</h2>
          <ul class="nav f-cb">
            <li>
            <router-link :to="{path:'/cat'}">
                  华语男歌手
               </router-link>
            </li>
            <li>
              <a href>华语女歌手</a>
            </li>
            <li>
              <a href>华语组合/乐队</a>
            </li>
          </ul>
        </div>
        <div class="blk">
          <h2 class="tit">欧美</h2>
          <ul class="nav f-cb">
            <li>
              <a href>欧美男歌手</a>
            </li>
            <li>
              <a href>欧美女歌手</a>
            </li>
            <li>
              <a href>欧美组合/乐队</a>
            </li>
          </ul>
        </div>
        <div class="blk">
          <h2 class="tit">日本</h2>
          <ul class="nav f-cb">
            <li>
              <a href>日本男歌手</a>
            </li>
            <li>
              <a href>日本女歌手</a>
            </li>
            <li>
              <a href>日本组合/乐队</a>
            </li>
          </ul>
        </div>
        <div class="blk">
          <h2 class="tit">韩语</h2>
          <ul class="nav f-cb">
            <li>
              <a href>韩语男歌手</a>
            </li>
            <li>
              <a href>韩语女歌手</a>
            </li>
            <li>
              <a href>韩语组合/乐队</a>
            </li>
          </ul>
        </div>
        <div class="blk">
          <h2 class="tit">其他</h2>
          <ul class="nav f-cb">
            <li>
              <a href>其他男歌手</a>
            </li>
            <li>
              <a href>其他女歌手</a>
            </li>
            <li>
              <a href>其他组合/乐队</a>
            </li>
          </ul>
        </div>
      </div>
      <!-- 入住歌手 -->
      <div class="g-mn2c">
        <div class="g-wrap">
          <div v-for="(item,index) in msg" :key="index">
            <div class="u-title f-cb">
              <h3 class="f-ff2">{{item.name}}</h3>
              <a href class="f-ff3">更多 ></a>
            </div>
            <div class="m-sgerlist" >
              <ul class="clearfix">
                <li v-for="(item,index) in item.list" :key="index">
                  <div class="u-cover">
                    <img :src="item.img" alt />
                    <p class="content">
                      <a href class="mingzi">{{item.text}}</a>
                      <i class="tu"></i>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <!-- 歌手 -->
          <div class="songername">
            <ul>
              <li v-for="(item,index) in songer" :key="index">
                <a href>{{item.text}}</a>
                <span class="tu1"></span>
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
import artist from "../../static/css/artist.css";
import toubu from "../page/head";
import foot from "../page/foot";
export default {
  components: { toubu, foot },
  data() {
    return {
      msg: "",
      songer:""
    };
  },
  mounted() {
    this.$http({
      url: "../../static/json/artist.json",
      method: "get",
      params: {}
    }).then(res => {
      this.msg = res.data;
    });
    this.$http({
      url: "../../static/json/songer.json",
      method: "get",
      params: {}
    }).then(res => {
      this.songer = res.data[0].list;
    });
  }
};
</script>

<style  scoped>
</style>
