<template>
   <div class="main_container privacy">
      <el-header class="header">
           <!-- <nuxt-link  :to="`${$t('/')}?lang=${$store.state.locale}`"> -->
               <el-page-header title="" @back="goBack"  content="Privacy Policy">
                </el-page-header>
           <!-- </nuxt-link> -->
      </el-header>
      <section>
        <div class="longText" id="hidingScrollBar">
         <div class="hideScrollBar">
             <br>
          <h6>
              Privacy Policy
          </h6>
          <p > Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus alias optio, eos nisi facere numquam vel quaerat nemo fugiat omnis saepe dolor eius 
            ratione repellendus libero architecto fugit corrupti aut?</p>
         </div>
        </div>
      </section>
       

    
   
</div>

</template>


<style>

    .el-page-header__left {
        margin:0;
    }
    .privacy .el-page-header {
        padding:0 24px;
        line-height:41px;
        color:#000;
    }
    .privacy .el-page-header__content {
        margin-left:50px;
        color:#000;
    }
  

</style>


<script>
import axios from 'axios'
export default {
    mounted() {
      this.$nextTick(() => {
      this.$nuxt.$loading.start()
      })
       
    },
    data() {
        
        return {

         
        }
    },
     methods: {
        goBack() {
             this.$router.push(`/?lang=${this.$store.state.locale}`); 
         },
     },
     created() {
          
        
     }
}
</script>