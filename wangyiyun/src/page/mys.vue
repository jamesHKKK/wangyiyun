<template>
  <div>

    <div class="contain">
      <div class="contain1">

        <div class="left">
         <ul>

           <li class="zz" v-for="(item,index) in gs" :key="index">

             <div  class="i3"><i class="i"></i>{{item.p}}</div>

             <div class="i1" >
               <div class="kuai" v-for="(items,indexs) in item.list1" :key="indexs" @click="succeed(index,indexs)">
                 <div class="kuai1">

                   <div class="kuai2">
                     <img :src="items.img">
                   </div>
                  <p class="kuai3">{{items.p1}}</p>
                  <p class="kuai4">{{items.p2}}</p>
                 </div>
               </div>
             </div>

           </li>
           <!--
           <li @click="zjl" class="i3"><i :class="z==true?i:sos"  class="i"></i>创建的歌单</li>
           <div class="i1" v-show="z"></div>

           <li class="i3" @click="zhl"><i :class="zz==true?i:sos"></i>收藏的歌单</li>
            <div class="i1" v-show="zz"></div> -->
         </ul>
        </div>

        <!--  -->

        <div class="right">
          <div class="right1">

            <div class="right2"><img :src="tu"></div>


              <div class="right3">
                <i class="right4"></i>
                <h2>{{like}}</h2>
                <div class="right5">
                  <img :src="img">

                  <span>{{name}}</span>
                   <span>{{time}}创建</span>
                </div>

                <div class="right6">
                  <div class="right7">
                    <i class="right8"><em class="right9"></em>播放</i>
                  </div>
                  <div class="right10"></div>

                  <div class="right11">
                    <i class="q1">收藏</i>
                   <div class="q" ></div>
                  </div>

                  <div class="right11" style="    background-position: 0 -1225px;">
                    <i class="q1">分享</i>
                   <div class="q"></div>
                  </div>


                  <div class="right11" style="background-position: 0 -2761px;">
                    <i class="q1">下载</i>
                   <div class="q"></div>
                  </div>

                  <div class="right11" style="background-position: 0 -1465px;">
                    <i class="q1">评论</i>
                   <div class="q"></div>
                  </div>


                </div>

              </div>
          </div>
        <!--  -->
        <div class="q2">
          <span>歌曲列表</span>
          <span>81首歌</span>
          <span>播放：<i class="q3">1061</i>次</span>
          <span></span>
        </div>

        <!--  -->
        <div class="box">
          <div class="box1">
            <div v-for="(item,index) in arr"  :key="index">
            <span class="box2"></span> {{item}}
            </div>

          </div>


        <div class="box3">
          <div class="box4" v-for="(item,index) in shuju" :key="index" >
          <div>
            <span class="q4">{{item.id}}</span>
            <i class="q5"></i>
          </div>
          <div>
            <span class="q7">{{item.p}}</span>
            <span class="q8">{{item.p3}}</span>
            <i class="q6"></i>
          </div>
          <div>{{item.time}}</div>
          <div><a>{{item.p1}}</a></div>
          <div><a>{{item.p2}}</a></div>
        </div>


        </div>

        </div>
        <!--  -->
        <div class="end">
           <div class="q2">
          <span>评论</span>
          <span>共0条评论</span>

        </div>
          <!--  -->

            <div class="end5">
              <img :src="img">

            </div>
            <div class="end6">
              <div class="end7"></div>

              <div class="end8">
                <div class="end9"></div>
                 <div class="end9" style="background-position: -60px -490px;"></div>
                  <div class="end11">评论</div>
                 <div class="end10">140</div>

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
  data(){
    return{
        i:"i",
        sos:"sos",
        z:true,
        zz:true,
        arr:["","歌曲标题","歌手","时长","专辑"],
        shuju:null,
        gs:null,
        wyz:null,
        like:null,
        time:null,
        name:null,
        img:null,
        tu:null
    }
  },


    mounted(){
      // console.log(this.$route.push)
      var a=true;
      $(".left").delegate(".i3","click",function(){

        if(a){
            $(this).children(".i").addClass("sos")
            $(this).next().css("display","none")
            a=false;
        }else{
          $(this).children(".i").removeClass("sos")
          $(this).next().css("display","block")
          a=true;
        }
      })

    // $(".left").delegate(".zz","click",function(){
    //     var index=$(this).index()
    //     if(index==0){
    //       $.get("../../static/json/1.json",function(res){
    //             console.log(res)
    //           $(".right1").css("display","none")
    //           $(".box").html("")

    //           var geshou=res[4].list
    //           console.log(geshou)
    //           $.each(geshou,function(i){

    //           $(`


    //             <div class="xx">

    //             <div class="oo">
    //               <img src="${geshou[i].img}">
    //             </div>

    //             <div class="xxoo">
    //               <div class="zmx">${geshou[i].p1}</div>
    //               <div class="zhl">${geshou[i].p2}&nbsp${geshou[i].p3}</div>
    //             </div>

    //             </div>

    //           `).appendTo($(".box"))

    //           })


    //       })

    //     }

    // })






      this.$http({
        url:"../../static/json/1.json",
        method:"get",
        params:{}
      }).then((res)=>{
        // console.log(res)
        var tupian=res.data[2].big[0].img

        var sp=res.data[2].big[0].list
        this.shuju=sp
        this.tu=tupian

         var likes=res.data[2].big[0].p4
          this.like=likes

          var times=res.data[2].big[0].p5
          this.time=times

           var imgs=res.data[2].big[0].img1
          this.img=imgs

           var names=res.data[2].big[0].p6
          this.name=names

        var  geshou=res.data[3].list
        this.gs=geshou


      }).catch((err)=>{

      })

    },

  methods:{
    succeed(index,indexs){
      if(index==1&&indexs==0){
            // console.log(this.$router)
          this.$router.push({path:'/my?'+0})
      }else if(index==1&&indexs==1){
         this.$router.push({path:'/my?'+1})
      }else if(index==1&&indexs==2){
         this.$router.push({path:'/my?'+2})
      }else if(index==2&&indexs==0){
          this.$router.push({path:'/my?'+3})
      }
      this.$http({
        url:"../../static/json/1.json",
        method:"get",
        params:{},
      }).then((res)=>{
        console.log(res)
         var a=window.location.search.substring(1);
         console.log(a)
         var datas=res.data[2].big;
         console.log(datas)

        for(var x=0;x<datas.length;x++){

              if(datas[x].name==a){
                // this.gs=big[x].list
                var tupian=datas[x].img
                this.tu=tupian

                this.shuju=datas[x].list

                var likes=datas[x].p4
                this.like=likes
                var times=datas[x].p5
                this.time=times
                var names=datas[x].p6
                this.name=names
                var imgs=datas[x].img1
                this.img=imgs

              }
        }


      })





    }

  }

}
</script>

<style scoped>
@import '../../static/css/mys.css';
</style>
