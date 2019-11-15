<template>
<div>
   <toubu></toubu>
   <div class="discover">
      <!-- 侧边栏 -->
      <div class="g-wrap4 n-sgernav">
        <h2 class="tit">推荐</h2>
        <ul class="nav f-cb">
          <li>
            <router-link :to="{ path: 'discover/artist' }">
              推荐歌手
            </router-link>
          </li>
          <li>
            <router-link :to="{ path: '/signed' }">
              入住歌手
            </router-link>
          </li>
        </ul>
        <div class="blk">
          <h2 class="tit">华语</h2>
          <ul class="nav f-cb">
            <li>
              <router-link :to="{ path: '/cat' }">
              华语男歌手
              </router-link>
            </li>
            <li>
             <router-link :to="{ path: '/hv' }">华语女歌手</router-link>
                
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
              <router-link :to="{ path: '/ounan' }">欧美男歌手</router-link>
            </li>
            <li>
              <router-link :to="{ path: '/ounv' }">欧美女歌手</router-link>
            </li>
            <li>
              <router-link :to="{ path: '/omzh' }">欧美组合/乐队</router-link>
            </li>
          </ul>
        </div>
        <div class="blk">
          <h2 class="tit">日本</h2>
          <ul class="nav f-cb">
            <li>
              <router-link :to="{ path: '/rbnan' }">日本男歌手</router-link>
            </li>
            <li>
              <router-link :to="{ path: '/rbnv' }">日本女歌手</router-link>
            </li>
            <li    id="duli">
            <a href="">日本组合/乐队</a>
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
      <!-- 华语男歌手 -->
      <div class="g-mn2c">
        <div class="g-wrap">
          <div v-for="(item, index) in msg" :key="index">
            <div class="u-title f-cb">
              <h3 class="f-ff2">{{ item.name }}</h3>
            </div>
            <ul class="n-ltlst f-cb">
              <li class="chf-fs0 z-slt">热门</li>
              <li>A</li>
              <li>B</li>
              <li>C</li>
              <li>D</li>
              <li>E</li>
              <li>F</li>
              <li>G</li>
              <li>H</li>
              <li>I</li>
              <li>J</li>
              <li>K</li>
              <li>L</li>
              <li>M</li>
              <li>N</li>
              <li>O</li>
              <li>P</li>
              <li>Q</li>
              <li>R</li>
              <li>S</li>
              <li>T</li>
              <li>U</li>
              <li>V</li>
              <li>W</li>
              <li>X</li>
              <li>Y</li>
              <li>Z</li>
              <li class="ch">其他</li>
            </ul>
            <div class="m-sgerlist">
              <ul class="clearfix">
                <li v-for="(item, index) in item.list" :key="index">
                  <div class="u-cover">
                    <img :src="item.img" alt />
                    <p class="content">
                      <a href class="mingzi">{{ item.text }}</a>
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
              <li v-for="(item, index) in songer" :key="index">
                <a href>{{ item.text }}</a>
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
import cat from "../../static/css/cat1001.css";
import toubu from "../page/head";
import foot from "../page/foot";
export default {
    components: { toubu, foot },
  data() {
    return {
      msg: "",
      songer: ""
    };
  },
  mounted() {
    this.$http({
      url: "../../static/json/rbzh.json",
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
}
</script>

<style>

</style>