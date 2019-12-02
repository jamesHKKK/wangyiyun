<template>
  <div>
    <router-view/>
    <div class="m-back" v-if="btnBack" @click="backTop"></div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
        return {
            btnBack:false
        }
  },
  mounted() {
    window.addEventListener('scroll',this.scrollToTop)
  },
  methods: {     
    // 点击图片回到顶部方法，加计时器是为了过渡顺滑
    // window对象，所有浏览器都支持window对象。它表示浏览器窗口，监听滚动事件
        backTop(){
            const that=this
            let timer=setInterval(()=>{
                let ispeed= Math.floor(-that.scrollTop/5)
                document.documentElement.scrollTop=document.body.scrollTop=that.scrollTop+ispeed
                if(that.scrollTop==0){
                    clearInterval(timer)
                }
            },0)
        },
  // 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
        scrollToTop(){
            const that=this
            let scrollTop=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop
            that.scrollTop=scrollTop
            if (that.scrollTop>0) {
                this.btnBack=true
            }else{
                that.btnBack=false
            }
        }  
    },
    destroyed() {
        window.removeEventListener('scroll',this.scrollToTop)
    },
}
</script>

<style scope>
.m-back{
    display: block;
    position: fixed;
    left: 50%;
    margin-left: 500px;
    bottom: 160px;
    width: 49px;
    height: 44px;
    background: url(https://s2.music.126.net/style/web2/img/sprite.png?67293f4531068f58d347b7bb15dda8ea) no-repeat;
    background-position: -265px -47px;
}
</style>
