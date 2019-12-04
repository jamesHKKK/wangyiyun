<template>
  <div>
    <toubu></toubu>
    <div class="discover">
      <div class="bd">
        <div class="g-wrap">
          <div class="u-title">
            <h3 class="h3">全部</h3>
          </div>
          <ul class="ul">
            <li class="li" v-for="(item,index) in arr" :key="index" v-show="index>=j&&index<i">
              <div class="tupian">
                <img :src="item.coverImgUrl" alt />
                <div class="button">
                  <div class="bofang"></div>
                  <div class="erji"></div>
                  <div class="nb">{{item.trackCount}}万</div>
                </div>
              </div>
              <div class="dec">
                <a href>{{item.name}}</a>
              </div>
              <p>
                <span class="s">
                  by
                  <a href>{{item.creator.nickname}}</a>
                </span>
              </p>
            </li>
            <el-pagination background layout="prev, pager, next" :total="380" @current-change="change" ></el-pagination>
          </ul>
        </div>
      </div>
    </div>
    <foot></foot>
  </div>
</template>
<script>
import toubu from "../page/head";
import foot from "../page/foot";
import css from "../../static/css/playlist.css";
export default {
  components: { toubu, foot },
  data() {
    return {
      arr: [],
      j:0,
      i:35
    };
  },
  mounted() {
    this.$http.get("../../static/json/playlist.json").then(res => {
      console.log(arguments)
      this.arr = res.data.playlists;
    });
  },
  methods: {
    change(index){
      if(index!=1){
        this.j=(index-1)*35
        this.i=index*35
      }else{
        this.j=0
        this.i=35
      }
    }
  },
};
</script>

<style scoped>
/* .discover{
  font-size: 30px;
  text-align: center
} */
</style>
