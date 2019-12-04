<template>
  <div>

    <toubu v-on:zjl="fnk"></toubu>

        <div v-show="shuju1">
            <two></two>
        </div>

      <div class="mc" v-show="!shuju1">
          <div class="mc1">
          <div class="mc2"></div>
          <div class="mc3"></div>
          </div>

        </div>
      <foot></foot>
  </div>
</template>
<script>


import two from "../page/mys"

import toubu from "../page/head"
import foot from "../page/foot"
export default {
components:{toubu,foot,two},
  data(){
    return{
      shuju1:true
    }
  },

  methods:{
     fnk(val) {
      this.shuju1 = val;
    },
  }



};
</script>

<style scoped>
.mc{
  width: 100%;
  height: 100%;
  background: rgb(245, 245, 245)
}
.mc1{
 width: 980px;
    min-height: 700px;
    margin: 0 auto;
    background-color: #fff;
    border: 1px solid #d3d3d3;
    border-width: 0 1px;
    position: relative;
}
.mc2{
  width: 807px;
    height: 268px;
    margin: 0 auto 0;
    padding-top: 104px;

    background: url(../../static/img/mymusic.png) no-repeat;
    background-position: 0px 94px;

}
.mc3{
  width: 167px;
    height: 45px;
    background: salmon;
    position: absolute;
    top: 296px;
    right: 245px;
    background: url(../../static/img/mymusic.png) no-repeat;
    background-position: 0 9999px;
}

</style>
