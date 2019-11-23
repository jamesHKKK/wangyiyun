<template>
  <div>


        <item fatherComponent="friend"></item>

        

  </div>

   
</template>

<script>

import item from "../components/item"

export default {
components:{item}
}
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