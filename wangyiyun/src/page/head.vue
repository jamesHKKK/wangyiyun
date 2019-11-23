<template>
  <div>

    <div class="head1">
  
    <div class="head_01">
      <div class="a1">  
        <h1 class="logo"><a href=""></a></h1>
        <ul class="head_03">

          <li @click="toggle(index)"  v-for="(item,index) in arr" :key="index">{{item}}  </li>

          <div class="head03_02"></div>
        </ul>

        <div class="head03_03"><a>登录</a></div>
        <div class="head03_04">创造者中心</div>
        <div class="head03_05">
          <div class="a3"> </div>
          <input type="text" name="" id="a4" placeholder="音乐/视频/电台/用户" >
        </div>



      </div>
    </div>

    <div class="head_02">
      <div class="a2">
        <ul class="a5">
          <li><span class="a6">推荐</span></li>
           <li><span class="a6">排行榜</span></li>
           <li><span class="a6">歌单</span></li>
            <li><span class="a6">主播电台</span></li>
             <li><span class="a6">歌手</span></li>
             <li><span class="a6">新碟上架</span></li>
        </ul>


      </div>
      </div>   
      
    </div> 


  </div>
</template>

<script>
import "../../static/css/01.css"
export default {
    data(){
      return{
        arr:["发现音乐","我的音乐","朋友","商城","音乐人","下载客户端"],
        arr1:[{path:"/"},{path:"/my"},{path:"/friend"},{path:"/"},{path:"/"},{path:"/download"}]
      }
    },
    methods:{
      toggle(index){

      console.log(index)
      this.$router.push(this.arr1[index])
      
      }
    }


}
</script>

<style>

</style>