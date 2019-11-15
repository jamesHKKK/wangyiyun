<template>
  <div>
    <toubu></toubu>
       <div class="mcc">
          <div class="mc11">
            <div class="mc22"></div>
          <div class="mc33"></div>

          </div>

        </div>
       <foot></foot>
  </div>


</template>

<script>
import toubu from "../page/head"
import foot from "../page/foot"
export default {
components:{toubu,foot},
};
</script>

<style>
.mcc{
  width: 100%;
  height: 100%;
  background: rgb(245, 245, 245)
}
.mc11{
 width: 980px;
    min-height: 700px;
    margin: 0 auto;
    background-color: #fff;
    border: 1px solid #d3d3d3;
    border-width: 0 1px;
    position: relative;
}
.mc22{
    width: 902px;
    height: 414px;
    margin: 0 auto 0;
    padding-top: 70px;
    background: url(../../static/img/notlogin.jpg) no-repeat;
    background-position: 0px 94px;

}
.mc33{
    width: 157px;
    height: 48px;
    position: absolute;
    background: seagreen;
    top: 354px;
    left: 574px;
    background: url(../../static/img/notlogin.jpg);
    background-position: 0px 59px;

}

</style>
