<template>
<div class="download">
     <toubu fatherComponent="download"></toubu>

       <div  class="down_01">

        <div class="down_02">

          <div class="down_03">
          </div>

        </div>
        <ul class="down_06">


        </ul>
      </div>
    <foot></foot>
</div>

</template>
<script>


import '../../static/css/download.css'

import toubu from "../page/head"
import foot from "../page/foot"

export default {
components:{toubu,foot},
mounted(){

  this.$http({
    url:"../../static/json/1.json",
    method:"get",
    params:{},
  }).then((res)=>{

    var arr=res.data[0].list;
    $.each(arr,function(i){
        $(`
              <div class="down_04">
              <p class="d1">${arr[i].p}</p>
              <img  src="${arr[i].img}" alt="">
              <div class="d2">
                <span>
                  <i class="d3"></i>
                  macOS
                </span>

                <span style="padding-left: 30px;">
                  <i class="d3" style="background:url(../../static/img/下载1.png);background-size: contain;"></i>
                  Windows
                </span>

                <span></span>
              </div>
              <div class="d4">${arr[i].p1}</div>
            </div>
        `).appendTo($(".down_03"))
    })


    var arr1=res.data[1].list;

    $.each(arr1,function(i){
      $(`
       <li>
            <div class="d6" style="padding-top: 53px;">
            <div class="d7">
              <h3>${arr1[i].p}</h3>
              <p>${arr1[i].p1}</p>

              <p>${arr1[i].p2}</p>

            </div>

            <div class="d9">  <img src="${arr1[i].img}" alt=""></div>
            </div>
          </li>
      `).appendTo($(".down_06"))

    })






  }).catch((err)=>{

  })

}




};
</script>

<style>

</style>
