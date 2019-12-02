var i=0;
 //向右切换
 var play = function () {
   i++;
   i = i > 1 ? 0 : i;
   $(".dian span").eq(i).addClass('red').siblings().removeClass("red");
   $(".box ul").eq(i).fadeIn(500).siblings().fadeOut(500);
 }
 //向左切换
 var playLeft = function () {
   i--;
   i = i < 0 ? 1 : i;
   $(".dian span").eq(i).addClass('red').siblings().removeClass("red");
   $(".box ul").eq(i).fadeIn(500).siblings().fadeOut(500);
 }
 //左右点击切换
 console.log($(""))
 $(".lf").click(function () {
   playLeft();
 })
 $(".rg").click(function () {
   play();
 })
