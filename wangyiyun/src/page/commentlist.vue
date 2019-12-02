<template>
    <div>
        <toubu></toubu>

        <div>
            <div class="commentlist-white">
                <div class="white-left">
                    <div class="commentlist-head">
                        <div class="commentlist-head-img">
                            <img src="http://p3.music.126.net/APoF1BwcdX8OBhx63l10nA==/109951164500152271.jpg?param=200y200" alt="">
                            <span class="msk"></span>
                        </div>
                        <div class="commentlist-head-imgr">
                            <div class="commentlist-head-imgr-hd">
                                <i>
                                    <span></span>
                                </i>
                                <div class="title">2019年十一月最热新歌TOP50</div>
                            </div>
                            <div class="commentlist-head-imgr-yi">
                                <a href="/user/home?id=1">
                                    <img src="http://p1.music.126.net/QWMV-Ru_6149AKe0mCBXKg==/1420569024374784.jpg?param=40y40" alt="">
                                </a>
                                <span class="name">
                                    <a href="/user/home?id=1">网易云音乐</a>
                                </span>
                                <sub></sub>
                                <span class="time">2019-12-01&nbsp;创建</span>
                            </div>
                        </div>
                    </div>

                </div>



                <!-- 侧边 -->
                <div class="white-right">
                    <div>

                    </div>
                </div>
            </div>
        </div>
        <foot></foot>
    </div>
</template>
<script >
import toubu from '../page/head'
import foot from '../page/foot'
export default ({
    components:{toubu,foot}
})
</script>
<style scoped>
@import "../../static/css/commentlist.css";
.commentlist-head-imgr-yi{
    height:35pxp;
    width:410px;
    margin:0 0 20px;
    line-height:35px;
}
.commentlist-head-imgr-yi>a{
        float: left;
    width: 35px;
    height: 35px;
        margin-right: 10px;
}
.commentlist-head-imgr-yi>a>img{
    width: 100%;
    height: 100%;
}
.commentlist-head-imgr-yi>.name{
    float: left;
}
.commentlist-head-imgr-yi>.name>a{
    color: #0c73c2;
}
.commentlist-head-imgr-yi>sub{
    width: 11px;
    height: 13px;
    background: url(https://s2.music.126.net/style/web2/img/icon.png?a293dc35a8c900a5cc4e5c28d3eae9a7) no-repeat;
    background-position: 0 1px;
        float: left;
    margin: 9px 0 0 3px;
}
.commentlist-head-imgr-yi .time{
    margin-left: 15px;
    color: #999;
}
</style>
