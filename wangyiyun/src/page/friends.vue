<template>
  <div>

   <div class="friend">

       <div class="friend1">
           <div class="lefts">
               <div class="wyz1">
                   <h3>动态</h3>
                   <span></span>
                   <span></span>
               </div>
               <!--  -->
            <div class="wyz2">
                <ul>
                    <li class="wyz3" v-for="(item,index) in zjl" :key="index" >
                        <div class="wyz4">
                            <img :src="item.img" alt="">
                        </div>
                        <div class="wyz5">
                            <div class="wyz6">
                                <a>{{item.p}}</a>
                                <i></i>
                                <span>{{item.p1}}</span>
                                <div class="gq"><span class="gq1"></span>关注</div>
                                <div class="gq2"></div>
                            </div>

                            <div class="wyz7">
                                   {{item.p2}}
                            </div>
                            <div class="wyz8">{{item.p3}}</div>
                            <div class="yinyue">
                                <div class="yy1">
                                     <div class="lnk">
                                    <img src="../../static/img/109951164513748783.jpg" alt="">
                                </div>
                                </div>

                                <div class="yy2">
                                    <p><span class="yy3">专辑<i class="yy4"></i></span>{{item.p4}}</p>
                                    <p><a>{{item.p5}}</a>/<a>{{item.p6}}</a></p>
                                </div>

                            </div>


                            <div class="wyz9">

                                <div v-for="(items,indexs) in item.list2 " :key="indexs"  class="wyz10"><img :src="items.img3" alt=""></div>


                            </div>
                            <div class="wyz11">
                                    <a>
                                        <i class="wyz12"></i>
                                        <span>(149)</span>
                                    </a>

                                    <span class="dj">|</span>

                                    <a>转发
                                        <span>{{item.p7}}</span>
                                    </a>
                                    <span class="dj">|</span>
                                    <a>评论
                                        <span>{{item.p8}}</span>
                                    </a>





                            </div>


                        </div>
                    </li>
                </ul>

            </div>


           </div>
            <div class="rights">

                <div class="rights1">
                    <div class="rights2">
                        <img :src="kaixin.img6" alt="">
                    </div>

                    <div class="rights3">{{kaixin.name1}}</div>
                    <p class="rights4"></p>
                    <div class="rights5">

                        <div class="rights6" v-for="(itemss,indexss) in zmx " :key="indexss">
                            <div class="rights7">
                                <p>{{itemss.txt1}}</p>
                                <i>{{itemss.txt2}}</i>
                            </div>
                        </div>
                    </div>
                </div>
                <!--  -->

                <div class="ws">
                    <div class="ws1">
                        <div class="ws2">
                            <h4>明星用户</h4>
                            <a>换一批</a>
                        </div>

                    <ul class="ws3">
                        <li  v-for="(itemsss,indexsss) in zhl" :key="indexsss">
                            <img :src="itemsss.img" alt="">
                            <div class="ws4">
                                <p>{{itemsss.p}}<i class="ws6"></i><p>
                                <p>{{itemsss.p1}} </p>
                            </div>

                            <div class="ws5">关注</div>
                        </li>
                    </ul>

                    </div>

                <div class="ws7">
                    <p>添加微博好友，和他们分享音乐</p>
                    <div class="ws8"></div>
                    <i class="ws9">
                        <i class="ws11"></i>
                        绑定新浪微博
                    </i>
                    <div class="ws10"></div>

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
            zjl:null,
            zmx:null,
            zhl:null,
            kaixin:{img6:""}
        }
    },
    mounted(){

        this.$http({
            url:"../../static/json/1.json",
            method:"get",
            params:{},
        }).then((res)=>{

            this.zjl=res.data[5].list
            this.zmx=res.data[5].list6

            this.zhl=res.data[5].list8

            this.kaixin=res.data[5]


        })

    }



}
</script>

<style scoped>
@import '../../static/css/friend.css';
</style>
