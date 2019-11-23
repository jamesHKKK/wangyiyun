<template>

  <div>

      <toubu></toubu>

      <!-- index -->
      <div v-if="fatherComponent=='home'">
          999999
      </div>




      
      <!-- my -->
      <div v-if="fatherComponent=='mymusic'">

            <div class="mc">
          <div class="mc1">
            <div class="mc2"></div>

          <div class="mc3"></div>

          </div>
          
        </div>



      </div>
      <!-- friend -->
       <div v-if="fatherComponent=='friend'">

        <div class="mcc">
          <div class="mc11">
            <div class="mc22"></div>


          <div class="mc33"></div>

          </div>
          
        </div>
      </div>
      <!-- download -->

      <div v-if="fatherComponent=='download'"></div>


      


     
  </div>

</template>

<script>

import toubu from "../page/head"


export default {
components:{toubu},

props:["fatherComponent"]

}
</script>

<style>

</style>