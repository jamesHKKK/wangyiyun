<template>
<div>
    <toubu></toubu>
    <div id="toplist" class="g-bd3 g-bd3-1 f-cb">
    <div class="g-sd3 g-sd3-1 clear">
      <div v-for="(tit,indexa) in msg" :key="indexa" class="n-minelst n-minelst-2">
        <h2 class="f-ff1">{{tit.title}}</h2>
        <ul class="f-cb">
          <li
            @click="selec(index,indexa)"
            v-for="(item,index) in msg[indexa].list "
            :key="index"
            :class="(index==selected&&indexa==indexA)?'mine z-selected':'mine'"
          >
            <div class="item f-cb">
              <div class="left">
                <a href="Javascript:;" class="avatar">
                  <img :src="item.image" alt="云音乐飙升榜" />
                  <span class="msk"></span>
                </a>
              </div>
              <p class="name">
                <a href="Javascript:;" class="s-fc0">{{item.name}}</a>
              </p>
              <p class="s-fc4">{{item.time}}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 歌曲列表 -->
    <div class="g-mn3">
      <div class="g-mn3c">
        <div class="g-wrap">
          <div class="m-info m-info-rank f-cb">
            <div class="cover u-cover u-cover-rank">
              <img
                src="http://p2.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=150y150"
                alt
              />
              <span class="msk"></span>
            </div>
            <div class="cnt">
              <div class="cntc m-info">
                <div class="hd f-cb">
                  <h2 class="f-ff2">云音乐飙升榜</h2>
                </div>
                <div class="user f-cb">
                  <i class="u-icn u-icn-57"></i>
                  <span class="sep s-fc3">最近更新：11月23日</span>
                  <span class="s-fc4">（每天更新）</span>
                </div>
                <div class="btns f-cb">
                  <a href="Javascript:;" class="u-btn2 u-btn2-2 u-btni-addply f-fl">
                    <i>
                      <em class="ply"></em>
                      播放
                    </i>
                  </a>
                  <a href="Javascript:;" class="u-btni u-btni-add"></a>
                  <a href="Javascript:;" class="u-btni u-btni-fav">
                    <i>(2518002)</i>
                  </a>
                  <a href="Javascript:;" class="u-btni u-btni-share">
                    <i>(7240)</i>
                  </a>
                  <a href="Javascript:;" class="u-btni u-btni-dl">
                    <i>下载</i>
                  </a>
                  <a href="Javascript:;" class="u-btni u-btni-cmmt j-cmt">
                    <i>
                      (
                      <span id="comment-count">159377</span>
                      )
                    </i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="g-wrap12">
          <div class="u-title u-title-1 f-cb">
            <h3>
              <span class="f-ff2">歌曲列表</span>
            </h3>
            <span class="sub s-fc3">
              <span>100</span>
              首歌
            </span>
            <div class="more s-fc3">
              播放：
              <strong class="s-fc6">2573575168</strong>
              次
            </div>
          </div>
          <table class="m-table m-table-rank">
            <thead>
              <tr>
                <th class="first w1"></th>
                <th>
                  <div class="wp">标题</div>
                </th>
                <th class="w2-1">
                  <div class="wp">时长</div>
                </th>
                <th class="w3-1">
                  <div class="wp">歌手</div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item,index) in msg1.hd1" :key="index" :class="item.bc">
                <td>
                  <div class="hd">
                    <span class="num1">{{item.number}}</span>
                    <div class="rk">
                      <span class="ico u-icn s-fc9" :class="item.img">{{item.number1}}</span>
                    </div>
                  </div>
                </td>
                <td :class="item.rank">
                  <div class="f-cb">
                    <div class="tt">
                      <a href="Javascript:;" :class="item.dis">
                        <img :src="item.img1" alt class="rpic" />
                      </a>
                      <span class="ply">&nbsp;</span>
                      <div class="ttc">
                        <span class="txt">
                          <a href="Javascript:;">
                            <b title>
                              {{item.txt}}
                              <div class="soil"></div>
                            </b>
                          </a>
                          <span :class="item.img2" title="播放mv"></span>
                        </span>
                      </div>
                    </div>
                  </div>
                </td>
                <td class="s-fc3">
                  <span class="u-dur">{{item.time}}</span>
                  <div class="opt hshow">
                    <a href="Javascript:;" class="u-icn u-icn-81 icn-add"></a>
                    <span class="icn icn-fav" title="收藏"></span>
                    <span class="icn icn-share" title="分享"></span>
                    <span class="icn icn-dl" title="下载"></span>
                  </div>
                </td>
                <td>
                  <div class="text" title>
                    <span title>
                      <a href="Javascript:;">{{item.size}}</a>
                    </span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <!-- 留言板 -->
          <liyanban></liyanban>
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
import liyanban from "../page/liyanban"
export default {
components:{toubu,foot,liyanban},
 data() {
    return {
      arr: [],
      msg: "",
      msg1: "",
      selected: 0,
      indexA: 0
    };
  },
  mounted() {
    this.$http({
      url: "../../static/json/toplist.json",
      method: "get",
      params: {}
    }).then(res => {
      this.msg = res.data;
    });

    this.$http({
      url: "../../static/json/toplist1.json",
      method: "get",
      params: {}
    }).then(res => {
      this.msg1 = res.data;
    });
  },
  methods: {
    selec(index, indexa) {
      (this.selected = index), (this.indexA = indexa);
    }
  }
};
</script>

<style scoped>
  @import "../../static/css/toplist.css";
</style>
