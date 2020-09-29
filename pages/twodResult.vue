<template>
   <div class="main_container result">
      <el-header class="header">
           <!-- <nuxt-link  :to="`${$t('/')}?lang=${$store.state.locale}`"> -->
               <el-page-header title="" @back="goBack"  content="2D results">
                </el-page-header>
           <!-- </nuxt-link> -->
      </el-header>
        <!-- <div class="date_picker_search">
             <el-date-picker
                v-model="value1"
                type="date"
                placeholder="Pick a day">
            </el-date-picker>
        </div> -->

             <div class="result_item">
        <div v-for="(result,t) in twod_result" :key="t">  
             <p>{{result.date}}</p>
            <el-card shadow="always">
                 <h6 class="result_time_number" style="color:#FEDC54">12:00 PM</h6>
               <div class="row">
                   <div class="col">
                      <span>Set</span>
                      <h4>{{result.set_1200}}</h4>
                   </div>
                   <div class="col">
                        <span>Value</span>
                        <h4>{{result.val_1200}}</h4>
                   </div>
                   <div class="col">
                        <span>2D</span>
                        <h4 style="color:#FEDC54;font-weight:bold;">{{result.result_1200}}</h4>
                   </div>
               </div>
            </el-card>
            <el-card shadow="always">
               
                <h6 class="result_time_number" style="color:#FEDC54">4:30 PM</h6>
                <div class="row">
                    <div class="col">
                        <span>Set</span>
                        <h4>{{result.set_430}}</h4>
                    </div>
                    <div class="col">
                            <span>Value</span>
                            <h4>{{result.val_430}}</h4>
                    </div>
                    <div class="col">
                            <span>2D</span>
                            <h4 style="color:#FEDC54;font-weight:bold;">{{result.result_430}}</h4>
                    </div>
                </div>
            </el-card>
            <el-card shadow="always">
                

                    <div class="row">
                      
                      <div class="col" style="padding-top:15px">
                          <h6 class="result_time_number" >9:30 AM</h6>
                      </div>
                      <div class="col">
                          <span>Modern</span>
                          <h4>{{result.modern_930}}</h4>
                      </div>
                        <div class="col">
                            <span>Internet</span>
                            <h4>{{result.internet_930}}</h4>
                        </div>
                    </div>
            </el-card>
              <el-card shadow="always">
                     <div class="row">
                      
                      <div class="col" style="padding-top:15px">
                          <h6 class="result_time_number">2:00 PM</h6>
                      </div>
                      <div class="col">
                          <span>Modern</span>
                          <h4>{{result.modern_200}}</h4>
                      </div>
                      <div class="col">
                          <span>Internet</span>
                          <h4>{{result.internet_200}}</h4>
                      </div>
                    </div>
            </el-card>
            <br>
        </div>
    </div>

     

   
</div>

</template>


<style>

    .el-page-header__left {
        margin:0;
    }
    .result .el-page-header {
        padding:0 24px;
        line-height:41px;
        color:#000;
    }
    .result .el-page-header__content {
        margin-left:50px;
        color:#000;
    }
    .result .result_item {
      text-align: center;
      padding: 80px 20px 20px 10px;
    }
    .result_item p {
        background-color: green;
        width:180px;
        border-radius: 21px;
        padding:5px;
        color:#fff;
        font-weight: bold;
    }
    .result_item h4 {
        font-size: 15px;
    }
    .result .el-card {
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
    .result .el-card__body {
        background:#F34636;
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
            twod_result:'',
            value1: '',
         
        }
    },
     methods: {
        goBack() {
             this.$router.push(`/?lang=${this.$store.state.locale}`); 
         },
     },
     created() {
            this.$axios.get("/v2/v1/twod-result")
      
                
                    .then(response => {
                        console.log(response.data.data)
                     this.twod_result = response.data.data
                     this.$nuxt.$loading.finish()
                })
        
     }
}
</script>