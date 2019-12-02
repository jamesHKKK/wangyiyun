<template>
  <div>
    <toubu></toubu>
    <div class="discover">
      <div class="bd">
        <div class="g-wrap">
          <div class="u-title">
            <h3>{{name}}</h3>
          </div>
        </div>
        <ul class="ul">
          <li v-for="(item,index) in data" :key="index">
            <div class="cover">
              <img style="width:130px;height:130px;" :src="item.img" alt />
              <div class="bofang"></div>
              <div class="msk"></div>
              <p class="dec">
                <a>{{item.a}}</a>
              </p>
              <p class="f-thide">
                <span>
                  <a>{{item.a1}}</a>
                </span>
              </p>
            </div>
          </li>
        </ul>
        <!-- =================================== -->
        <div class="g-wrap">
          <div class="u-title">
            <h3>{{name1}}</h3>
            <div id="tab">
              <a href="/discover/album/#/?area=ALL">全部</a>
              <span>|</span>
              <a href="/discover/album/#/?area=ZH">华语</a>
              <span>|</span>
              <a href="/discover/album/#/?area=EA">欧美</a>
              <span>|</span>
              <a href="/discover/album/#/?area=KR">韩国</a>
              <span>|</span>
              <a href="/discover/album/#/?area=JP">日本</a>
            </div>
          </div>
        </div>
        <ul class="ul">
          <li v-for="(item,index) in images" :key="index">
            <div class="cover">
              <img style="width:130px;height:130px;" :src="item" alt />
              <div class="bofang"></div>
              <div class="msk"></div>
              <p class="dec">
                <a href>{{newname[index]}}</a>
              </p>
              <p class="f-thide">
                <span>
                  <a href>{{title[index]}}</a>
                </span>
              </p>
            </div>
          </li>
        </ul>
        <!-- =============================== -->
        <el-pagination
          background
          layout="prev, pager, next"
          :total="150"
          @current-change="handleSizeChange"
        ></el-pagination>
      </div>
    </div>
    <foot></foot>
  </div>
</template>
<script>
import album from "../../static/css/album.css";
import toubu from "../page/head";
import foot from "../page/foot";
export default {
  components: { toubu, foot },
  data() {
    return {
      arr: [],
      data: [],
      data1: [],
      name: "",
      name1: "",
      images: [],
      newname: [],
      title: []
    };
  },
  mounted() {
    this.$http.get("../../static/json/xindie.json").then(res => {
      this.arr = res.data;
      this.data = this.arr[0].list;
      this.name = this.arr[0].name;
      this.name1 = this.arr[1].name;
      this.data1 = this.arr[1].list;
    });
    this.$http.get("../../static/json/album1.json").then(res => {
      for (let i = 0; i < res.data.albums.length; i++) {
        this.images.push(res.data.albums[i].blurPicUrl);
        this.newname.push(res.data.albums[i].name);
        this.title.push(res.data.albums[i].artist.name);
      }
    });
  },
  methods: {
    handleSizeChange(index) {
      this.images = [];
      this.newname = [];
      this.title = [];
      this.$http.get("../../static/json/album" + index + ".json").then(res => {
        for (let i = 0; i < res.data.albums.length; i++) {
          this.images.push(res.data.albums[i].blurPicUrl);
          this.newname.push(res.data.albums[i].name);
          this.title.push(res.data.albums[i].artist.name);
        }
      });
    }
  }
};
</script>

<style scope>
</style>
