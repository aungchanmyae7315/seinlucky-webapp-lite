<template>
   <div class="main_container result_threed">
      <el-header class="header">
           <!-- <nuxt-link  :to="`${$t('/')}?lang=${$store.state.locale}`"> -->
               <el-page-header title="" @back="goBack"  content="3D results">
                </el-page-header>
           <!-- </nuxt-link> -->
      </el-header>
        <div style="padding-top:70px">
            <div class="threed_result" style="padding:0 20px;" v-for="(result,t) in threed_result" :key="t" data-aos="fade-up" data-aos-easing="linear">
                 <el-card shadow="always" >
                 <el-row>
                     <el-col :span="16">
                            <span>Date</span>
                           <h4 >{{result.datetime}}</h4>
                     </el-col>
                     <el-col style="text-align:right" :span="8">
                           <span style="padding-right:9px;">3D</span>
                         <h4 style="text-align:right;color:#FFEB3C;font-weight:bold">{{result.result}}</h4>
                     </el-col>
                 </el-row>
                </el-card>
                </div>
            </div>
        </div>

</template>

<style>

    .el-page-header__left {
        margin:0;
    }
    .result_threed .el-page-header {
        padding:0 25px;
        line-height: 43px;
        color:#000;
    }
    .result_threed .el-page-header__content {
        margin-left:50px;
        color:#000;
    }
    .result_item {
       
        padding:20px;
    }
    .result_item h4 {
        font-size: 15px;
    }
    .result_threed .el-card {
        
        color:#fff;
        margin:5px auto;
        border-radius: 10px;
        text-align: center;
    }
    .result_item .el-col .result_number {
        width:52px;
        
       background: #222C36;
        float: right;
        font-weight: bold;
        color: #fff;
        font-size: 32px;
        padding: 5px 10px;
        border-radius: 13px;
        margin-right:3px;
    }
    .result_threed .el-card__body {
        background:#54B24F;
        padding:10px 20px;
        border-radius: 10px;
    }
    
    .result_time , .result_date {
       margin:17px 10px;
       padding-left:12px;
       font-size: 11px;
    }
    .result_item .el-divider {
        background: #696767;
        margin:12px auto;
    }
    .result_item span {
        font-size: 13px;
    }

    .result .table th {
        border:0;
    }
    .threed_result h4 {
        font-size: 20px;
        font-weight: bold;
    }
    .threed_result span {
        font-size: 11px;
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
           threed_result:'',
        }
    },
     methods: {
        goBack() {
             this.$router.push(`/?lang=${this.$store.state.locale}`); 
         },
     },
     created() {
           
         this.$axios.get("/v2/v1/threed-result")
      
                
                    .then(response => {
                        console.log(response.data.data)
                     this.threed_result = response.data.data
                     this.$nuxt.$loading.finish()
                })
     }
}
</script>