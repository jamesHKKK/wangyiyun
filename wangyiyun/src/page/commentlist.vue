<template>
    <div>
        <toubu></toubu>

        <div>
            <div class="commentlist-white">
                <div class="white-left">
                    <div class="commentlist-head">
                        <div class="commentlist-head-img">
                            <img :src=list.coverImgUrl alt="">
                            <span class="msk"></span>
                        </div>
                        <div class="commentlist-head-imgr">
                            <div class="commentlist-head-imgr-hd">
                                <i>
                                    <span></span>
                                </i>
                                <div class="title">{{list.name}}</div>
                            </div>
                            <div class="commentlist-head-imgr-yi">
                                <a href="/user/home?id=1">
                                    <img :src=list.creator.avatarUrl alt="">
                                </a>
                                <span class="name">
                                    <a href="/user/home?id=1">{{list.creator.nickname}}</a>
                                </span>
                                <sub></sub>
                                <span class="time">2019-12-01&nbsp;创建</span>
                            </div>
                            <div class="commentlist-head-imgr-btn">
                                <a href="javascript:;" class="play" title="播放">
                                    <i>
                                        <em></em>
                                        播放
                                    </i>
                                </a>
                                <a href="javascript:;" class="add"></a>
                                <a href="javascript:;" class="fav"><i>({{list.creator.city}})</i></a>
                                <a href="javascript:;" class="fav share"><i>({{list.creator.userType}})</i></a>
                                <a href="javascript:;" class="fav down"><i>下载</i></a>
                                <a href="javascript:;" class="fav say"><i>({{list.creator.userType}})</i></a>
                            </div>
                            <div class="commentlist-head-imgr-tags">
                                <b>标签:</b>
                                <a v-for="(item,index) in list.tags" :key="index" class="tag" href="/discover/playlist/"><i>{{item}}</i></a>
                            </div>
                            <p class="more">
                                <b>介绍:</b>
                                2019年十一月全站热度最高的50首新歌，歌单数据综合参考了2019年11月云音乐所有最新上架歌曲在全站的平均播放及收藏排行。（注：曲目均为11月第一次上架新歌，已排除新发行正式专辑中收录的部分11月前已上...
                            </p>
                        </div>
                        
                    </div>
                    <!-- 歌曲列表 -->
                    <div class="commentlist-songlist">
                        <div class="title">
                            <h3>歌曲列表</h3>
                            <span>
                                <span>50</span>
                                首歌
                            </span>
                            <div class="more">播放:<strong>7074906</strong>次</div>
                            <div class="out">
                                <i></i>
                                <a href="">生成外链播放器</a>
                            </div>
                        </div>
                        <div class="cache">
                            <table class="cache-table">
                                <thead>
                                    <tr>
                                        <th class="first">&nbsp;</th>
                                        <th class="second">歌曲标题</th>
                                        <th class="third">时长</th>
                                        <th class="forth">歌手</th>
                                        <th class="fifth">专辑</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="even">
                                        <td>
                                            <div>
                                                <span class="play"></span>
                                                <span class="num">1</span>
                                            </div>
                                        </td>
                                        <td>
                                            <div>
                                                <span ><a href="/song?id=1400256289" title="你的答案">你的答案</a></span>
                                                <span class="play1" title="播放MV"></span>
                                            </div>
                                        </td>
                                        <td>
                                            <div>
                                                <span class="commentlist-songlist-even-span">03:39</span>
                                                <div class="commentlist-songlist-even-show">
                                                    <a class="add" href="javascript:;" title="添加到播放列表"></a>
                                                    <span class="fav" title="收藏"></span>
                                                    <span class="fav show" title="分享"></span>
                                                    <span class="fav down" title="下载"></span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div>
                                                <span ><a href="/song?id=1400256289" title="阿冗">阿冗</a></span>
                                            </div>
                                        </td>
                                        <td>
                                            <div>
                                                <span ><a href="/song?id=1400256289" title="你的答案">你的答案</a></span>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <!-- 评论 -->
                    <div class="commentlist-saylist"> 
                        <div class="commentlist-saylist-title">
                            <h3>歌曲列表</h3>
                            <span>
                                共
                                <span>187</span>
                                条评论
                            </span>
                        </div>
                        <div class="commentlist-saylist-ping">
                            <div class="are">
                                <div class="commentlist-saylist-head">
                                    <img src="http://s4.music.126.net/style/web2/img/default/default_avatar.jpg?param=50y50" alt="">
                                </div>
                                <div class="commentlist-saylist-aret">
                                    <div class="commentlist-saylist-aret1">
                                        <textarea placeholder="评论" cols="30" rows="10"></textarea>
                                    </div>
                                    <div class="commentlist-saylist-btns">
                                        <i></i>
                                        <i></i>
                                        <a href="javascript:void(0)">评论</a>
                                        <span>140</span>
                                    </div>
                                    <div class="commentlist-saylist-corr">
                                        <span>&#9204;</span>
                                        <span>&#9204;</span>
                                    </div>
                                </div>
                            </div>
                            <!-- 精彩评论 -->
                            <div class="jcpl" v-for="(item,index) in say" :key="index">
                                <h3>{{item.title}}</h3>
                                <div class="item" v-for="(item,index) in say[0].todisww" :key="index" v-show="index>=j&&index<i">
                                    <div class="item-head">
                                        <a href="/user/home?id=1730850987"><img :src=item.img alt=""></a>
                                    </div>
                                    <div class="item-wrap">
                                        <div class="item-wrap1">
                                            <a href="/user/home?id=1730850987">{{item.name}}</a>
                                            {{item.text}}
                                        </div>
                                        <div class="item-wrap2">
                                            <div class="time">昨天13:27</div>
                                            <a href="javascript:void(0)">
                                                <i></i>
                                                ({{item.num}})
                                            </a>
                                            <span>|</span>
                                            <a href="javascript:void(0)">回复</a>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            <el-pagination background layout="prev, pager, next" :total="50" @current-change="change" ></el-pagination>
                            <!-- 最新评论 -->
                            <!-- <div class="jcpl">
                                <h3>最新评论</h3>
                                <div class="item" v-for="(item,index) in say" :key="index">
                                    <div class="item-head">
                                        <a href="/user/home?id=1730850987"><img :src=item.img alt=""></a>
                                    </div>
                                    <div class="item-wrap">
                                        <div class="item-wrap1">
                                            <a href="/user/home?id=1730850987">{{item.name}}</a>
                                            {{item.text}}
                                        </div>
                                        <div class="item-wrap2">
                                            <div class="time">昨天13:27</div>
                                            <a href="javascript:void(0)">
                                                <i></i>
                                                ({{item.num}})
                                            </a>
                                            <span>|</span>
                                            <a href="javascript:void(0)">回复</a>
                                        </div>
                                    </div>
                                </div>
                            </div> -->
                        </div>
                    </div>
                </div>


                <!-- 侧边 -->
                <div class="white-right">
                    <div class="white-right-like">
                        <h3>
                            <span>{{say[2].title1}}</span>
                        </h3>
                        <ul>
                            <li v-for="(item,index) in say[2].img" :key="index">
                                <a href="/user/home?id=1887083289" title="沙雕陶">
                                    <img  :src=item alt="">
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="white-right-hot">
                        <h3>
                            <span>热门歌单</span>
                        </h3>
                        <ul>
                            <li>
                                <div>
                                    <a href="/playlist?id=3060697165" title="小众精选 | 冷门红心歌曲捕捞计划">
                                        <img src="http://p1.music.126.net/pBtnczOEqJgYSd4MyKpvYQ==/109951164526267810.jpg?param=50y50" alt="">
                                    </a>
                                </div>
                                <div class="list">
                                    <p class="listp">
                                        <a href="/playlist?id=3060697165" title="小众精选 | 冷门红心歌曲捕捞计划">小众精选 | 冷门红心歌曲捕捞计划</a>
                                    </p>
                                    <p>
                                        <span>by</span>
                                        <a class="listby" href="/playlist?id=3060697165" title="小众精选 | 冷门红心歌曲捕捞计划">鱼骨与飞鸟集</a>
                                        <sub></sub>
                                    </p>
                                </div>
                            </li>
                        </ul>
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
    components:{toubu,foot},
    data(){
        return{
            list:"",
            say:"",
            j:0,
            i:9
        }
    },
    mounted() {
        
        this.$http.get("../../static/json/playlist.json").then((res)=>{
            // console.log(res.data.playlists)
            let num=this.$route.query.song   //获取地址栏参数
            
            this.list=res.data.playlists[num]
        }),
        this.$http.get("../../static/json/playlistSay.json").then((res)=>{
            console.log(res.data[0].todisww[0].img)
            this.say=res.data
        })
    },
    handleSizeChange(val){
    console.log(`每页${val}条`)
    },
    handleSizeChange(val){
        // console.log(val);
        this.skip=val-1
        this.$http({
            url:"page",
            methods: "post",
            data:{
            skip:this.skip
            }
        }).then(res=>{
            console.log(res.data.data)
            this.list=res.data.data
        }).catch(err=>{})
    },
    methods: {
        change(index){
            if(index!=1){
                this.j=(index-1)*9
                this.i=index*9
            }else{
                this.j=0
                this.i=9
            }
        }
    },
}) 
</script>
<style scoped>
@import "../../static/css/commentlist.css";

</style>
