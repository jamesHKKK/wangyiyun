import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
  itemDetail: [{
    "topic_answer": [{
      "a": "http://p4.music.126.net/bjuML9O6zMvw22miFq3sUg==/109951164202388691.jpg?param=244y244",
      "tj": "特价",
      "js": "伯朗 i12触控真无线蓝牙耳机蓝牙5.0苹果安卓通用",
      "sj": 129,
      "xj": 129,
      "yj": 199,
      "dz":"/a"
    }, {
      "a": "http://p3.music.126.net/beiczpZk_x4tNqK2RNqoEg==/109951164389371286.jpg?param=244y244",
      "tj": "包邮",
      "js": "kinbor 音乐的力量套装 DTB6550",
      "sj": 138,
      "xj": "",
      "yj": "",
      "yc":"display: none"
    }, {
      "a": "http://p3.music.126.net/lmfGbwn-QLVfLCvLabmJwQ==/109951164495968246.jpg?param=244y244",
      "tj": "特价",
      "js": "网易云音乐潮流系列保温杯",
      "sj": 49,
      "xj": 49,
      "yj": 89
    }, {
      "a": "http://p3.music.126.net/SuPD2sAWzilVM2OpcwYr6A==/109951164310449986.jpg?param=244y244",
      "tj": "特价",
      "js": "网易云音乐联名款真无线蓝牙耳机TWS1",
      "sj": 298,
      "xj": "",
      "yj": "",
      "yc":"display: none"
    }, {
      "a": "http://p4.music.126.net/iAtOinbR5941-TRgtoCpyQ==/109951164511924786.jpg?param=244y244",
      "tj": "特价",
      "js": "初学入门古筝成人檀木实木骨粉高档演奏级古筝儿童教学培训筝",
      "sj": 880,
      "xj": 880,
      "yj": 1080
    }, {
      "a": "http://p4.music.126.net/eZO47Pir75pgd1eQbY4OVA==/109951164094159737.jpg?param=244y244",
      "tj": "特价",
      "js": "伯朗 i9S蓝牙5.0真无线耳机双耳通话苹果安卓通用",
      "sj": 89,
      "xj": 89,
      "yj": 169
    }, {
      "a": "http://p4.music.126.net/BWZCBNkmsGHepFgXbz_LGw==/109951164205753600.jpg?param=244y244",
      "tj": "特价",
      "js": "兰士顿 D4线控重低音炮四核双动圈耳机 苹果安卓通用 带麦",
      "sj": 99,
      "xj": 99,
      "yj": 159
    }, {
      "a": "http://p4.music.126.net/IXmNI3O-HBhIQytCo9_X3Q==/109951163679756618.jpg?param=244y244",
      "tj": "特价",
      "js": "网易云音乐 运动斜挎包",
      "sj": 56,
      "xj": 56,
      "yj": 99
    }, ]
  }, {
    "rmsp": [{
      "a": "http://p3.music.126.net/amHv4RfrvGUX-5k3dpHzeQ==/109951163689849242.jpg?param=263x9999&quality=75",
      "tj": "特价",
      "js": "伯朗 E43真无线蓝牙耳机蓝牙5.0超长待机安卓苹果通用双耳通话",
      "sj": 299,
      "xj": 299,
      "yj": 399
    }, {
      "a": "http://p4.music.126.net/R_r4pT1Gh874yl_G8kGhtg==/18905002928382973.jpg?param=263x9999&quality=75",
      "tj": "特价",
      "js": "网易云音乐&本来设计 原木创意手机支架手机座扩音器",
      "sj": 149,
      "xj": 149,
      "yj": 179
    }, {
      "a": "http://p3.music.126.net/517Cf4Nuebgpn476tMbXyQ==/109951164017036341.jpg?param=263x9999&quality=75",
      "tj": "",
      "js": "击音【触控级】降噪防水手势识别蓝牙运动耳机",
      "sj": 149,
      "xj": "",
      "yj": "",
      "yc":"display: none",
      "yc1":"display: none"
    }, {
      "a": "http://p4.music.126.net/CuFi30UFj9utZXs6mTpNPA==/18984167765584687.jpg?param=263x9999&quality=75",
      "tj": "包邮",
      "js": "本来设计 原创木质冰箱磁贴 创意礼品生日礼物",
      "sj": 59,
      "xj": "",
      "yj": "",
      "yc":"display: none",
      "yc1":"display: none"
    }, {
      "a": "http://p3.music.126.net/GFl96omijnkthA9BJmR6YA==/109951164389493621.jpg?param=263x9999&quality=75",
      "tj": "",
      "js": "网易云音乐联名款W800X头戴式蓝牙耳机",
      "sj": 199,
      "xj": "",
      "yj": "",
      "yc":"display: none",
      "yc1":"display: none"
    }, {
      "a": "http://p3.music.126.net/AJROyT-mKFn8sQhl5Z-QEg==/109951164111206325.jpg?param=263x9999&quality=75",
      "tj": "",
      "js": "JBL C200SI立体声入耳式耳机  手机音乐耳机 运动游戏耳机 耳机耳麦 带麦可通话",
      "sj": 138,
      "xj": "",
      "yj": "",
      "yc":"display: none",
      "yc1":"display: none"
    }, {
      "a": "http://p3.music.126.net/8kcx8B6BGwcqcWN2EbFIXg==/109951163679752096.jpg?param=263x9999&quality=75",
      "tj": "用劵减100",
      "js": "网易云音乐氧气蓝牙耳机Pro版",
      "sj": 399,
      "xj": "",
      "yj": "",
      "yc":"display: none",
      
    }, {
      "a": "http://p4.music.126.net/6qF9znLn2yfBgBjunZx9bg==/109951163725394326.jpg?param=263x9999&quality=75",
      "tj": "",
      "js": "漫步者（EDIFIER）W2 真无线 入耳式立体声蓝牙耳机 蓝牙5.0 左右可独立使用",
      "sj": 299,
      "xj": "",
      "yj": "",
      "yc":"display: none",
      "yc1":"display: none"
    },{
      "a": "http://p4.music.126.net/F4Gxsbn06a6KK7aW2Na_0w==/109951164064517915.jpg?param=263x9999&quality=75",
      "tj": "",
      "js": "网易云音乐氧气蓝牙耳机青春版",
      "sj": 299,
      "xj": "",
      "yj": "",
      "yc":"display: none",
      "yc1":"display: none"
    }, {
      "a": "http://p3.music.126.net/UNcGM3Ivrjxs1UbSzkiiGQ==/18903903416702874.jpg?param=263x9999&quality=75",
      "tj": "",
      "js": "漫步者（EDIFIER） H230P 入耳式立体声线控耳机",
      "sj": 69,
      "xj": "",
      "yj": "",
      "yc":"display: none",
      "yc1":"display: none"
    }, {
      "a": "http://p3.music.126.net/QsOy8EsttZhmUEO1we3gJw==/109951164119373335.jpg?param=263x9999&quality=75",
      "tj": "用劵减100",
      "js": "云音乐联名款JBL W30BT蓝牙耳机",
      "sj": 399,
      "xj": "",
      "yj": "",
      "yc":"display: none",
      "yc1":"display: none"
    }, {
      "a": "http://p4.music.126.net/yWwHtMgKqA7iSR-91USAZg==/109951163618674656.jpg?param=263x9999&quality=75",
      "tj": "特价",
      "js": "弯头数据线快充2.4A苹果安卓Type-C 玩游戏充电线",
      "sj": 29,
      "xj": "",
      "yj": "",
      "yc":"display: none",
      "yc1":"display: none"
    }, {
      "a": "http://p4.music.126.net/LJDWRjKZKP1MVzxIN3LN_A==/19100715998038101.jpg?param=263x9999&quality=75",
      "tj": "",
      "js": "击音听键A1 蓝牙音频接收器 4+种佩戴 苹果安卓必备新配件",
      "sj": 69,
      "xj": "",
      "yj": "",
      "yc":"display: none",
      "yc1":"display: none"
    }, {
      "a": "http://p3.music.126.net/P2-eK8NGq2mCyS9zbpFpHg==/109951164111215163.jpg?param=263x9999&quality=75",
      "tj": "特价",
      "js": "JBL T120A 立体声入耳式耳机  手机音乐耳机 游戏耳机 耳机耳麦 带麦可通话",
      "sj": 118,
      "xj": 118,
      "yj": 128
    }, {
      "a": "http://p4.music.126.net/ejECowAfp--X_zV-hWsSDQ==/109951164459382843.jpg?param=263x9999&quality=75",
      "tj": "特价",
      "js": "Beats X 颈挂式无线蓝牙手机音乐入耳耳机 带麦可通话耳塞",
      "sj": 799,
      "xj": 799,
      "yj": 1188
    }, {
      "a": "http://p3.music.126.net/ZooFI1T-MK7DWEXR4rUNoQ==/109951163003565895.jpg?param=263x9999&quality=75",
      "tj": "特价",
      "js": "本来设计 原木质音乐盒八音盒",
      "sj": 178,
      "xj": 178,
      "yj": 199
    },{
      "a": "http://p4.music.126.net/7a5pkO6sD1sdkkddWcTpuQ==/109951164333090682.jpg?param=263x9999&quality=75",
      "tj": "用劵减100",
      "js": "K5 旗舰主动降噪HIFI金属蓝牙头戴耳机 影音娱乐游戏安卓ios全兼容",
      "sj": 499,
      "xj": "",
      "yj": "",
      "yc":"display: none",
    }, {
      "a": "http://p4.music.126.net/0bSOycBysXFViicWN3B28Q==/109951162986578319.jpg?param=263x9999&quality=75",
      "tj": "特价",
      "js": "击音(iGene)Super HDⅡ【全触摸】进口HIFI降噪无线有线双模蓝牙头戴",
      "sj": 249,
      "xj": 249,
      "yj": 299,
      
      
    }, {
      "a": "http://p4.music.126.net/bN1fhwCDi24n2NOyDHIFYw==/109951163378352915.jpg?param=263x9999&quality=75",
      "tj": "热门",
      "js": "华为/荣耀honor AM115 高保真 原装半入耳式  带麦可通话 手机通用有线耳机",
      "sj": 49,
      "xj": "",
      "yj": "",
      "yc":"display: none",
    }, {
      "a": "http://p4.music.126.net/pNxPodPSMPVkyL91gJl7RA==/109951163290388638.jpg?param=263x9999&quality=75",
      "tj": "特价",
      "js": "听键 让耳机秒变无线 五种音效+功放芯片 有线耳机必备配件 网易专享苹果安卓通用",
      "sj": 89,
      "xj": 89,
      "yj": 109
    }, {
      "a": "http://p3.music.126.net/e6AUCVDrhm-2Kdb87s5FmA==/109951164432055726.jpg?param=263x9999&quality=75",
      "tj": "热门",
      "js": "Beats Solo3 Wireless 无线蓝牙头戴式耳机 带麦可通话 内置Apple W1 芯片",
      "sj": 2209,
      "xj": "",
      "yj": "",
      "yc":"display: none",
    }, {
      "a": "http://p3.music.126.net/PFoJn5axOMOBkvN6q3N24Q==/109951164325533696.jpg?param=263x9999&quality=75",
      "tj": "热门",
      "js": "击音 小静T3 年轻人的降噪耳机[轻至180g/40小时降噪] 寝室/自习/游戏静享",
      "sj": 399,
      "xj": '',
      "yj": "",
      "yc":"display: none",
    }, {
      "a": "http://p4.music.126.net/2qmDxHyqgFQqNa2j2cnhPA==/19124905253840538.jpg?param=263x9999&quality=75",
      "tj": "特价",
      "js": "本来设计 原木质笔实木头签字笔鱼笔",
      "sj": 149,
      "xj": 149,
      "yj": 159
    }, {
      "a": "http://p4.music.126.net/bD8apHVXxEFtW0FkT2sXhA==/109951164238225398.jpg?param=263x9999&quality=75",
      "tj": "热门",
      "js": "漫步者（EDIFIER）W800BT 立体声头戴式蓝牙耳机",
      "sj": 199,
      "xj": "",
      "yj": "",
      "yc":"display: none",
    },{
      "a": "http://p4.music.126.net/lSYWC3JXtMQrERR4U-Ss5Q==/109951163069162738.jpg?param=263x9999&quality=75",
      "tj": "",
      "js": "爱国者（aigo） A691动铁圈铁手机耳机入耳式高清降噪带麦线控耳塞式",
      "sj": 299,
      "xj": "",
      "yj": "",
      "yc":"display: none",
      "yc1":"display: none",
    }, {
      "a": "http://p4.music.126.net/_EZwCjIdqayAxXCdtVWI-A==/109951162978724678.jpg?param=263x9999&quality=75",
      "tj": "热门",
      "js": "铁三角 CLR100is 入耳式线控带麦手机耳机",
      "sj": 148,
      "xj": "",
      "yj": "",
      "yc":"display: none",
    }, {
      "a": "http://p4.music.126.net/IDJ1QzqRQ8TM4wsuoRHRXQ==/109951163209910078.jpg?param=263x9999&quality=75",
      "tj": "特价",
      "js": "漫步者（EDIFIER）BIG BUN 立体声蓝牙便携音箱",
      "sj": 369,
      "xj": 49,
      "yj": 89,
      "yc":"display: none",
      "yc1":"display: none",
    }, {
      "a": "http://p4.music.126.net/9U3P2tSOdORzheuigzBF1Q==/109951162978711071.jpg?param=263x9999&quality=75",
      "tj": "热门",
      "js": "铁三角 CK330IS 手机专用带麦通话入耳式耳机",
      "sj": 189,
      "xj": "",
      "yj": "",
      "yc":"display: none",
      
    }, {
      "a": "http://p4.music.126.net/Y4NT3sjKHtpxoW2O5v-Yrg==/109951163677001816.jpg?param=263x9999&quality=75",
      "tj": "热门",
      "js": "网易云音乐无线蓝牙音箱MB1",
      "sj": 399,
      "xj": "",
      "yj": "",
      "yc":"display: none",
    }, {
      "a": "http://p3.music.126.net/dRsAEXq-Px0fFQY31zD2jA==/109951164111216127.jpg?param=263x9999&quality=75",
      "tj": "特价",
      "js": "JBL T120 BT 入耳式耳机 无线蓝牙耳机 运动耳机 音乐耳机 苹果安卓通用",
      "sj": 399,
      "xj": 89,
      "yj": 169,
      "yc":"display: none",
      "yc1":"display: none",
    }, {
      "a": "http://p3.music.126.net/M-0_KjrZg4sUFZTFPdkj0w==/109951163693470454.jpg?param=263x9999&quality=75",
      "tj": "特价",
      "js": "爱国者（aigo）播放器M1无损hifi音乐播放器触屏mp3学生随身听便携播放器",
      "sj": 269,
      "xj": 99,
      "yj": 159,
      "yc":"display: none",
      "yc1":"display: none",
    }, {
      "a": "http://p3.music.126.net/1d_Ocm0DxTjV7l4kF9lp2g==/109951164287010250.jpg?param=263x9999&quality=75",
      "tj": "特价",
      "js": "网易云音乐联名款漫步者W280X蓝牙耳机",
      "sj": 169,
      "xj": 56,
      "yj": 99,
      "yc":"display: none",
      "yc1":"display: none",
    },{
      "a": "http://p4.music.126.net/as_vu-rXe3I2w3WqJ5he-A==/109951163378350986.jpg?param=263x9999&quality=75",
      "tj": "特价",
      "js": "华为/荣耀honor AM116 金属 高保真 原装半入耳式  三键线控可通话 手机通用有线耳机",
      "sj": 69,
      "xj": 129,
      "yj": 199,
      "yc":"display: none",
      "yc1":"display: none",
    }, {
      "a": "http://p3.music.126.net/lIYB3y91w6qgX8E3fm8LGg==/109951164315558229.jpg?param=263x9999&quality=75",
      "tj": "特价",
      "js": "漫步者（EDIFIER）W280BT 无线蓝牙入耳式运动耳机磁吸耳塞",
      "sj": 119,
      "xj": 119,
      "yj": 169,
      
    }, {
      "a": "http://p3.music.126.net/UkCZR-XDfdOqPrJ5PhKXog==/18568552372067744.jpg?param=263x9999&quality=75",
      "tj": "特价",
      "js": "skullcandy Smokin Buds 2骷髅头入耳式重低音耳机塞线控男女通用",
      "sj": 229,
      "xj": 49,
      "yj": 89,
      "yc":"display: none",
      "yc1":"display: none",
    }, {
      "a": "http://p4.music.126.net/xmrJf18xji6aTPZsv_ygbg==/109951162978746847.jpg?param=263x9999&quality=75",
      "tj": "特价",
      "js": "铁三角 IM70 双动圈入耳式耳机",
      "sj": 649,
      "xj": "",
      "yj": "",
      "yc":"display: none",
      "yc1":"display: none",
    }, {
      "a": "http://p3.music.126.net/b-2OwtfOM1poQo_rAHOi9w==/109951163400481501.jpg?param=263x9999&quality=75",
      "tj": "特价",
      "js": "JBL GO 2  音乐金砖二代 便携蓝牙音箱",
      "sj": 299,
      "xj": 880,
      "yj": 1080,
      "yc":"display: none",
      "yc1":"display: none",
    }, {
      "a": "http://p4.music.126.net/WHNe_tZw5ERD4RyaMi0hng==/19027048719243386.jpg?param=263x9999&quality=75",
      "tj": "特价",
      "js": "漫步者（EDIFIER）H270P 高保真入耳式手机耳机 带麦克风",
      "sj": 99,
      "xj": 99,
      "yj": 109,
      
    }, {
      "a": "http://p4.music.126.net/gHi5XY8qiHAneIpxF3TJlg==/18527870441687791.jpg?param=263x9999&quality=75",
      "tj": "特价",
      "js": "漫步者（EDIFIER）H841P 高性能立体声头戴式线控手机耳机",
      "sj": 179,
      "xj": 99,
      "yj": 159,
      "yc":"display: none",
      "yc1":"display: none",
    }, {
      "a": "http://p4.music.126.net/Ge1G-m8VngLjrTXjBSyjfw==/109951163678579000.jpg?param=263x9999&quality=75",
      "tj": "特价",
      "js": "网易云音乐氧气有线入耳式耳机",
      "sj": 129,
      "xj": 56,
      "yj": 99,
      "yc":"display: none",
      "yc1":"display: none",
    },{
      "a": "http://p4.music.126.net/41DBNC3IR8CIECnWtjIXSA==/109951163335643980.jpg?param=263x9999&quality=75",
      "tj": "特价",
      "js": "漫步者（EDIFIER）TWS3 真无线 入耳式蓝牙带麦耳机",
      "sj": 399,
      "xj": 129,
      "yj": 199,
      "yc":"display: none",
      "yc1":"display: none",
    }, {
      "a": "http://p4.music.126.net/z7UDVCjBER1ApIFMSMHj3Q==/109951163094564294.jpg?param=263x9999&quality=75",
      "tj": "包邮",
      "js": "漫步者（EDIFIER）H185 高性能立体声耳塞式耳机",
      "sj": 59,
      "xj": "",
      "yj": "",
      "yc":"display: none",
      "yc1":"display: none",
    }, {
      "a": "http://p3.music.126.net/dSiA8EDzDbJPZS-C7L_E6w==/109951164432055780.jpg?param=263x9999&quality=75",
      "tj": "特价",
      "js": "漫步者（EDIFIER）K800 头戴式电脑语音通讯游戏耳机耳麦",
      "sj": 79,
      "xj": 49,
      "yj": 89,
      "yc":"display: none",
      "yc1":"display: none",
    }, {
      "a": "http://p3.music.126.net/7WbulVxFlwGnJDH8NtvOWA==/109951163209880908.jpg?param=263x9999&quality=75",
      "tj": "特价",
      "js": "铁三角 ATH-S200BT 头戴式无线蓝牙耳机耳麦",
      "sj": 578,
      "xj": "",
      "yj": "",
      "yc":"display: none",
      "yc1":"display: none",
    }, {
      "a": "http://p4.music.126.net/EdLEen3OmEyaefC6grY6Iw==/109951163031969484.jpg?param=263x9999&quality=75",
      "tj": "特价",
      "js": "铁三角 ATH-C555 通用耳塞式耳机 ",
      "sj": 109,
      "xj": 880,
      "yj": 1080,
      "yc":"display: none",
      "yc1":"display: none",
    }, {
      "a": "http://p4.music.126.net/lyZlVnMcT2PlSxo0SrKkVg==/109951163089147168.jpg?param=263x9999&quality=75",
      "tj": "特价",
      "js": "1MORE/万魔 E1009入耳式耳机电脑手机通用带线控重低音耳塞式耳麦低音炮",
      "sj": 59,
      "xj": 89,
      "yj": 169,
      "yc":"display: none",
      "yc1":"display: none",
    }, {
      "a": "http://p3.music.126.net/smR3Sa3Z0gzYZkdOb_rs_A==/109951162978712622.jpg?param=263x9999&quality=75",
      "tj": "特价",
      "js": "铁三角 CKR50iS 线控带麦入耳式HIFI耳机",
      "sj": 498,
      "xj": 99,
      "yj": 159,
      "yc":"display: none",
      "yc1":"display: none",
    }, {
      "a": "http://p4.music.126.net/_QBhdDDxSP9-bvxfiCtpZg==/109951163251550089.jpg?param=263x9999&quality=75",
      "tj": "特价",
      "js": "漫步者（EDIFIER）H295P 高保真入耳式手机耳机",
      "sj": 169,
      "xj": 56,
      "yj": 99,
      "yc":"display: none",
      "yc1":"display: none",
    },{
      "a": "http://p4.music.126.net/AiYQlBZuqzcZndj7h-w95w==/18558656767255221.jpg?param=263x9999&quality=75",
      "tj": "特价",
      "js": "漫步者（EDIFIER）H850 高性能立体声头戴式耳机 重低音包耳式",
      "sj": 249,
      "xj": 99,
      "yj": 159,
      "yc":"display: none",
      "yc1":"display: none",
    }, {
      "a": "http://p3.music.126.net/k8F8_Ny4JeQBnb4avm-jpQ==/109951163059662588.jpg?param=263x9999&quality=75",
      "tj": "特价",
      "js": "铁三角 ATH-AR3iS 线控带麦 可折叠 时尚头戴式耳机",
      "sj": 449,
      "xj": 56,
      "yj": 99,
      "yc":"display: none",
      "yc1":"display: none",
    } ]
  }]
}
export default new Vuex.Store({
  state

})
