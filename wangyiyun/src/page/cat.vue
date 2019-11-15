<template>
<div>
 <toubu></toubu>
 <div class="discover">
      <!-- 侧边栏 -->
      <div class="g-wrap4 n-sgernav">
        <h2 class="tit">推荐</h2>
        <ul class="nav f-cb">
          <li>
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
            <li   id="duli">
            <a href="">华语男歌手</a>
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
 </div>
 <foot></foot>
</div>
</template>

<script>
import cat from "../../static/css/cat.css"
import toubu from "../page/head";
import foot from "../page/foot";
export default {
components: { toubu, foot },
}
</script>

<style>

</style>