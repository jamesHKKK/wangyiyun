<template>
  <!-- 留言板 -->
  <div class="n-cmt">
    <div class="u-title u-title-1">
      <h3>
        <span class="f-ff2">评论</span>
      </h3>
      <span class="sub s-fc3">
        共
        <span class="j-flag">159417</span>
        条评论
      </span>
    </div>
    <div class="m-cmmt">
      <div class="iptarea">
        <div class="head">
          <img
            src="http://s4.music.126.net/style/web2/img/default/default_avatar.jpg?param=50y50"
            alt
          />
        </div>
        <div class="j-flag">
          <div>
            <div class="m-cmmtipt f-cb f-pr">
              <div class="u-txtwrap holder-parent f-pr">
                <textarea class="u-txt area j-flag" placeholder="评论" v-model="content"></textarea>
              </div>
              <div class="btns f-cb f-pr">
                <i class="icn u-icn u-icn-36 j-flag"></i>
                <i class="icn u-icn u-icn-41 j-flag"></i>
                <a href="javascript:;" class="btn u-btn u-btn-1 j-flag" @click="send">评论</a>
                <span class="zs s-fc4 j-flag">140</span>
              </div>
              <div class="corr u-arr">
                <em class="arrline">◆</em>
                <span class="arrclr">◆</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 评论 -->
      <div class="cmmts j-flag">
        <h3 class="u-hd4">最新评论(159417)</h3>
        <div>
          <div v-for="(item,index) in msg" :key="index" class="itm">
            <div class="head">
              <a href="Javascript:;">
                <img :src="images[index]"/>
              </a>
            </div>
            <div class="cntwrap">
              <div class="cnt f-brk">
                <a href class="s-fc7">{{msg[index]}}</a>
                {{txt[index]}}
              </div>
              <div class="rp">
                <div class="time s-fc4">{{time[index]}}</div>
                <a href="Javascript:;">
                  <i class="zan u-icn2 u-icn2-12"></i>
                  {{zan[index]}}
                </a>
                <span class="sep">|</span>
                <a href="Javascript:;" class="s-fc3">回复</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: "",
      // list: [],
      msg:[],
      images:[],
      time:[],
      txt:[],
      zan:[]
    };
  },
  mounted() {
    
  },
  methods: {
    send() {
      if(this.content!=""){
        this.txt.unshift(this.content)
      this.content=""
      this.$http({
      url: "http://localhost:3000/comment/music?id=186016&limit=1",
      method: "get",
      params: {}
    }).then(res => {
      let date=new Date()
      console.log(date.getHours()+":"+date.getMinutes())
      this.images.unshift(res.data.hotComments[parseInt(Math.random()*15)].user.avatarUrl)
      this.msg.unshift(res.data.hotComments[parseInt(Math.random()*15)].user.nickname)
       this.time.unshift(date.getHours()+":"+date.getMinutes())
       this.zan.unshift(res.data.hotComments[parseInt(Math.random()*15)].user.vipType)
    });
      }else{
        alert("不写评论你点啥呢")
      }
    }
  }
};
</script>

<style scoped>
@import "../../static/css/liuyanban";
</style>