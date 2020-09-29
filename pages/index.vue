<template>  
        
       <section class="main_page twod_home">
        <!-- <Online></Online> -->
          <el-header class="header">
            <el-row>
              <el-col :span="12" class="logo_text">
                 <span> Seinlucky 2D</span>
              </el-col>
              <el-col :span="12">
                <ul class="main_header">
                  <li class="threed_text" @click="threedResult" >3D</li>
                  <li @click="twodResult">  <img src="~static/images/result_icon.svg" alt="" class="result_icon"></li>
                  <li  class="icon_more">
                     <el-popover 
                      placement="left-start"
                      v-on-click="privacy"
                      trigger="click">
                        <el-button size="mini" type="text" @click="privacy">Privacy Policy</el-button>
                      <el-button type="text"  style="color:#000;" slot="reference">  <i class="el-icon-more"></i></el-button>
                    </el-popover>
                    
                  </li>
                </ul>
              </el-col>
            </el-row>
          </el-header>
        <div class="longText" id="hidingScrollBar">
         <div class="hideScrollBar">
            <div v-if="!$store.state.isLoggedIn"  class="demo-type">
              <div  @click="dialogVisible = true">
                  <el-avatar :size="60"><img src="~static/images/me_img.svg" alt=""></el-avatar>
                  <span  class="avatar_text_logout">Please Login first</span>
              </div>  
            
                      <img @click="HomeRefresh"  v-loading.fullscreen.lock="fullscreenLoading" src="~static/images/dimond_t_icon.png" alt="" class="refresh_icon">
                   
            </div>
            <div v-else class="demo-type" >
                <div @click="dialogVisible_Edit = true">
                 <el-avatar :size="60"><img src="~static/images/me_img.svg" alt=""></el-avatar>
                  <span  class="avatar_text_logout">{{this.phone}}</span>
                </div>
                    <img @click="HomeRefresh"  v-loading.fullscreen.lock="fullscreenLoading" src="~static/images/dimond_t_icon.png" alt="" class="refresh_icon">
            </div>

<el-dialog
  :visible.sync="dialogVisible">
  <div style="text-align:center">
     <el-avatar :size="60"><img src="~static/images/me_img.svg" alt=""></el-avatar>
  </div>
  <p style="text-align:left;padding-top:10px;">Please enter your phone number to login</p>
  <el-form  @submit.native.prevent  :model="ruleForm" ref="ruleForm"  class="demo-ruleForm" >
      <el-form-item
      
      prop="phone"
      :rules="[
          { required: true, message: 'Enter Phone Number' },
          
      ]"
      
      >  
          <el-input  @keypress.enter.native="submitForm('ruleForm')"  type="number"  pattern="/^-?\d+\.?\d*$/" onKeyPress="if(this.value.length==11) return false;"  placeholder="09XXX" prefix-icon="el-icon-phone" v-model="ruleForm.phone"  ></el-input>
      
      </el-form-item>
  </el-form>

    <el-button class="login_btn" round type="text" @click="submitForm('ruleForm')">Login</el-button>
</el-dialog>


<el-dialog
  :visible.sync="dialogVisible_Edit">
  <div style="text-align:center">
     <el-avatar :size="60"><img src="~static/images/me_img.svg" alt=""></el-avatar>
  </div>
  <p style="text-align:left;padding-top:10px;">Edit Phone Number</p>
      <el-form  @submit.native.prevent :model="ruleForm" ref="ruleForm"  class="demo-ruleForm" >
                <el-form-item 
                  prop="phone"
                :rules="[
                    { required: true, message: 'Enter Phone Number' },
                    
                ]"
                  class="edit_name" >
                    <el-input  required type="text"  id="ok" pattern="/^-?\d+\.?\d*$/" onKeyPress="if(this.value.length==11) return false;"  placeholder="09XXX" prefix-icon="el-icon-phone" v-model="ruleForm.editPhone"  ></el-input>
                </el-form-item>
      </el-form>
        <el-button type="info" round @click="profileUpdate('ruleForm')">Update</el-button>
  
</el-dialog>

        <carousel  :autoplay="true" :nav="false" v-if="loaded" :items =1>
    
            <div class="item" v-for="(img_slide,  i) in slider_images" :key="i">
                 <a :href="img_slide.link" target="_blank">
                    <el-image :src="img_slide.slider_image" value="img_slide" style="width:100%;height:160px;">
                      <div slot="placeholder" class="image-slot">
                        Loading<span class="dot">...</span>
                      </div>
                    </el-image>
                  </a>
            </div>
        </carousel>
        <h3 class="run_bar"> 
          <div class="scroll-left">
            <p> 
                <img src="~static/images/slide_inner_icon.png" alt="" class="slide_inner_icon">
              {{this.slider_text.text}}</p>
          </div>
        </h3>
            <div class="number" style="margin-top:-43px">
               <h2 v-if="!this.info.live "    > 
              
                        <div class="loading_spinner_main_number">
                            <div class="ldio-ct1tsjzqdg5">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                      </h2>
                <h2 class="static"  v-bind:class="{ live_number: isActive, 'text-danger': hasError }"> 
                   
                  <span v-if="this.currentTime  > this.morningTime_9_30 && this.currentTime < this.time_12_00">{{this.info.live}}</span>
                  <span v-else-if ="this.currentTime > this.time_12_00 && this.currentTime <  this.time_01_00">{{this.info.result_1200}}</span>
                  <span v-else-if ="this.currentTime > this.time_01_00 && this.currentTime < this.time_04_30">{{this.info.live}}</span>
                  <span v-else-if ="this.currentTime > this.time_04_30 && this.currentTime < this.morningTime_9_30">{{this.info.result_430}}</span>
                  <span v-else>{{this.info.result_430}}</span>
              </h2>
                      
                </div>
         <div class="date_time">
                  <div class="d_t_item">
                      <span v-if="this.currentTime  > this.morningTime_9_30 && this.currentTime < this.time_12_00"><img src="~static/images/update-black-18dp.svg" style="width:25px;" alt=""></span>
                      <span v-else-if ="this.currentTime > this.time_12_00 && this.currentTime <  this.time_01_00"><i class="el-icon-check"></i></span>
                      <span v-else-if ="this.currentTime > this.time_01_00 && this.currentTime < this.time_04_30"><img src="~static/images/update-black-18dp.svg" style="width:25px;" alt=""></span>
                      <span v-else-if ="this.currentTime > this.time_04_30 && this.currentTime < this.morningTime_9_30"><i class="el-icon-check"></i></span>
                      <span v-else> <i class="el-icon-check"></i> </span>
                    
                      <span>Updated:</span>
                      <span v-if="this.currentTime  > this.morningTime_9_30 && this.currentTime < this.time_12_00" v-text="this.last_date"></span>
                      <span v-else-if ="this.currentTime > this.time_12_00 && this.currentTime <  this.time_01_00" v-text="this.last_date"></span>
                      <span v-else-if ="this.currentTime > this.time_01_00 && this.currentTime < this.time_04_30" v-text="this.last_date"></span>
                      <span v-else-if ="this.currentTime > this.time_04_30 && this.currentTime < this.morningTime_9_30" v-text="this.last_date"></span>
                      <span v-else v-text="this.last_date"></span>
                      <span v-text="this.breakTime"></span>
                  </div>

                  
                </div>
          
           <div class="card_one">
            <div class="card_item">
              <h5 class="time_number">12:00 PM</h5>
               <el-divider></el-divider>
                <div class="row">
                  
                  <div class="col">
                      <span>Set</span>
                       <h4  v-if="!this.info.set_1200"    class="card_loading">
                        <div class="loadingio-spinner-card_one_loading">
                            <div class="card_one_loading">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                      </h4>
                      <h4 v-else  class="static" > 
                          <h4 v-if="this.currentTime  > this.morningTime_9_30 && this.currentTime < this.time_12_00">{{this.info.set_1200}}</h4>
                          <h4 v-else-if ="this.currentTime > this.time_12_00 && this.currentTime <  this.time_01_00">{{this.info.set_1200}}</h4>
                          <h4 v-else-if ="this.currentTime > this.time_01_00 && this.currentTime < this.time_04_30">{{this.info.set_1200}}</h4>
                          <h4 v-else-if ="this.currentTime > this.time_04_30 && this.currentTime < this.morningTime_9_30">{{this.info.set_1200}}</h4>
                          <h4 v-else>{{this.info.set_1200}}</h4>
                      </h4>
                  </div>
                  <div class="col">
                      <span>Value</span>
                       <h4  v-if="!this.info.val_1200 && !this.info.val_1200"    class="card_loading">
                        <div class="loadingio-spinner-card_one_loading">
                            <div class="card_one_loading">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                      </h4>
                      <h4  v-else  class="static" > 
                        <h4 v-if="this.currentTime  > this.morningTime_9_30 && this.currentTime < this.time_12_00">{{this.info.val_1200}}</h4>
                          <h4 v-else-if="this.currentTime > this.time_12_00 && this.currentTime <  this.time_01_00">{{this.info.val_1200}}</h4>
                          <h4 v-else-if="this.currentTime > this.time_01_00 && this.currentTime < this.time_04_30">{{this.info.val_1200}}</h4>
                          <h4 v-else-if="this.currentTime > this.time_04_30 && this.currentTime < this.morningTime_9_30">{{this.info.val_1200}}</h4>
                          <h4 v-else>{{this.info.val_1200}}</h4>
                      </h4>
                  </div>
                  <div class="col">
                      <span>2D</span>
                     <h4 class="static" style="font-weight:bold;color:#FFEB3C;font-size:17pt;">
                         
                          {{this.info.result_1200}}
                      </h4>
                  </div>
                </div>
              </div>
            </div>
            <div class="card_two">
                <div class="card_item">
                  <h5 class="time_number">4:30 PM</h5>
                   <el-divider></el-divider>
                    <div class="row">
                      
                      <div class="col">
                          <span>Set</span>
                          <h4  v-if="!this.info.set_430"    class="card_loading">
                            <div class="loadingio-spinner-card_one_loading">
                                <div class="card_one_loading">
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                          </h4>
                          <h4 v-else   class="static" > 
                            <h4 v-if="this.currentTime  > this.morningTime_9_30 && this.currentTime < this.time_12_00">{{this.info.set_430}}</h4>
                            <h4 v-else-if ="this.currentTime > this.time_12_00 && this.currentTime <  this.time_01_00">{{this.info.set_430}}</h4>
                            <h4 v-else-if ="this.currentTime > this.time_01_00 && this.currentTime < this.time_04_30">{{this.info.set_430}}</h4>
                            <h4 v-else-if ="this.currentTime > this.time_04_30 && this.currentTime < this.morningTime_9_30">{{this.info.set_430}}</h4>
                            <h4 v-else>{{this.info.set_430}}</h4>
                          </h4>
                      </div>
                      <div class="col">
                          <span>Value</span>
                           <h4   v-if="!this.info.val_430 "    class="card_loading">
                            <div class="loadingio-spinner-card_one_loading">
                                <div class="card_one_loading">
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                          </h4>
                          <h4  v-else   class="static" >
                            <h4 v-if="this.currentTime  > this.morningTime_9_30 && this.currentTime < this.time_12_00">{{this.info.val_430}}</h4>
                            <h4 v-else-if="this.currentTime > this.time_12_00 && this.currentTime <  this.time_01_00">{{this.info.val_430}}</h4>
                            <h4 v-else-if="this.currentTime > this.time_01_00 && this.currentTime < this.time_04_30">{{this.info.val_430}}</h4>
                            <h4 v-else-if="this.currentTime > this.time_04_30 && this.currentTime < this.morningTime_9_30">{{this.info.val_430}}</h4>
                            <h4 v-else>{{this.info.val_430}}</h4>
                          </h4>
                        
                      </div>
                      <div class="col">
                          <span>2D</span>
                          <h4 class="static" style="font-weight:bold;color:#FFEB3C;font-size:17pt">
                       
                          {{this.info.result_430}}
                      </h4>
                          <!-- <h4 class="result_num">{{this.info.result_430}}</h4> -->
                      </div>
                    </div>
                </div>
            </div>
             <el-divider></el-divider>
            <div class="card_three">
                <div class="card_item">
                
                    <div class="row">
                      
                      <div class="col">
                          <h5 class="time_number">9:30 AM</h5>
                      </div>
                      <div class="col">
                          <span>Modern</span>
                          <h4 style="font-weight:bold;color:#FFEB3C;font-size:17pt">{{this.info.modern_930}}</h4>
                      </div>
                      <div class="col">
                          <span>Internet</span>
                          <h4 style="font-weight:bold;color:#FFEB3C;font-size:17pt">{{this.info.internet_930}}</h4>
                      </div>
                    </div>
                </div>
            </div>
            <div class="card_three " >
                <div class="card_item">
                
                    <div class="row">
                      
                      <div class="col">
                          <h5 class="time_number">2:00 PM</h5>
                      </div>
                      <div class="col">
                          <span>Modern</span>
                          <h4 style="font-weight:bold;color:#FFEB3C;font-size:17pt">{{this.info.modern_200}}</h4>
                      </div>
                      <div class="col">
                          <span>Internet</span>
                          <h4 style="font-weight:bold;color:#FFEB3C;font-size:17pt">{{this.info.internet_200}}</h4>
                      </div>
                    </div>
                </div>
            </div>

      </div>
    </div>

  </section>
       
</template>

<script>

import axios from 'axios'
import carousel from 'vue-owl-carousel'

export default {
 components: { carousel },
    getters: {},
  mutations: {},
  actions: {},
 // layout: 'homeLayout',


  mounted() {
   

      this.$axios.get('/luke/twod-result-live')
            .then(response => {
              this.info = response.data.data;
              this.close_day = response.data.data.is_close_day
               this.last_date = response.data.data.last_date
              console.log(response)

            })
 
        var  nowTimestamp =  Math.round(new Date().getTime()/1000) 
        var lastTimestamp = localStorage.getItem('slider_time')
        var diff = nowTimestamp - lastTimestamp;
        var self = this;
          
        if (diff < 7200 ) {
        
            this.slider_images = JSON.parse(localStorage.getItem('slider_images'))
            if (this.slider_images !== null) {
                this.loaded = true;
            }
        } else {
            // setTimeout(function(){
            self.$axios.get('/v2/v1/myanmar_slider')
                .then(response => {
                    if (self.slider_images !== null) {
                        this.loaded = true;
                    }
                    this.slider_images = response.data.data
                        // window.$nuxt.$store.commit('setSliderImage', this.slider_images);
                      self.$store.commit('setSliderImage', this.slider_images);

                       this.slider_time = Math.round(new Date().getTime()/1000);
                        self.$store.commit('setSliderTime', this.slider_time);
                })
        }
          if(diff < 7200) {
               
                this.slider_text = JSON.parse(localStorage.getItem('slider_text'))
                  console.log(this.slider_text)
            }else {
                 self.$axios.get('/v2/v1/slider_text')
                .then(response => {
                    self.slider_text = response.data.data[0];
                    self.$store.commit('setSliderText', this.slider_text);
                     
                })
            }

  

  var m = window.location.href.match(/device_id=([^&]+)/i);

    //  var isSeinluckyApp = navigator.userAgent.match(/seinlucky-app-2019/i);
    // if (m != null && isSeinluckyApp){
      var deviceId = m[1];
      localStorage.setItem("deviceId", deviceId);
    // }
    console.log(  localStorage.setItem("deviceId", deviceId))
    //console.dir(this.$store.state.webAppVersion.length);
    if (this.$store.state.webAppVersion.length == 0){
      this.$axios.get(`/web-app-version`)
        .then(response => {
          this.$store.commit('setWebAppVersion', response.data.version);
        });
    }

    

 

    
       this.itvKweeLiveData();
      //this.getDataresult();
      this.updateIsLoggedIn();
       

      let lang = localStorage.getItem('locale');
      this.$store.commit('SET_LANG', lang);

   },

  
  
  data() {
    
    return {
      fullscreenLoading: false,
      last_date:'',
      close_day:'',
      dialogVisible: false,
      dialogVisible_Edit: false,
      isActive : true,
      hasError: false,
      currentTime: '',
      serverDate:'',
      morningTime_9_30:'09:30:00',
      time_12_00:'12:01:00',
      time_01_00:'13:00:00',
      time_04_30:'16:30:00',


      currentDate: null,
      morningTime:null,
      
      slider_images:'',
      activeIndex: '1',
      
      info:'',

      kwee_cma:'',
      set_1200:'',
      profile:'',
      slider_text:'',
      breakTime:null,
      kweeliveItvId:0,
      serverCurTimeItvId:0,
      myWallet:'',
      blockUser:'',
      loaded:'',
       ruleForm: {
          phone:'',
          editPhone:localStorage.getItem('userInfo'),

      },
       phone:localStorage.getItem('userInfo'),
     
      visible: false

    }
    
  },
 
  destroyed () {
    clearInterval(this.kweeliveItvId);
    clearInterval(this.serverCurTimeItvId);
  },
  beforeDestroy () {
    clearInterval(this.kweeliveItvId);
    clearInterval(this.serverCurTimeItvId);
  },
   methods: {
     HomeRefresh() {
      this.fullscreenLoading = true;
        setTimeout(() => {
          
          this.fullscreenLoading = false;
          location.reload();
        }, 1000);
    },
    threedResult() {
       this.$router.push(`/threedResult?lang=${this.$store.state.locale}`);
    },
     twodResult() {
       this.$router.push(`/twodResult?lang=${this.$store.state.locale}`);
    },
    privacy() {
       this.$router.push(`/privacy?lang=${this.$store.state.locale}`);
      
    },
   

     //luke
        async getKweeLiveData(){
            this.$axios.get('/luke/twod-result-live')
            .then(response => {
              this.info = response.data.data;
              this.close_day = response.data.data.is_close_day
               this.last_date = response.data.data.last_date
              

            })
     },

     itvKweeLiveData(){
          this.kweeliveItvId = setInterval(function() {
            this.getKweeLiveData();
          }.bind(this), 3000)
     },
        //  async getDataKwee() {
        //    this.itvKweeLiveData();
        //   },
        //   async getDataresult() {
            
        //     this.$axios.get('/luke/twod-result-live')
        //       .then(response => {
        //          alert('oksdfdsf')
        //         this.info_api = response.data.data
               
        //       })
        //   },
      //  updateCurrentTime() {
      //    if (this.currentTime > this.time_12_00 && this.currentTime <  this.time_01_00 ) {
      //       this.isActive = false
      //       this.breakTime = '12:01 PM';
           
      //        this.getDataresult();
      //     } else if(this.currentTime > this.time_04_30){
      //       this.isActive = false
      //       this.breakTime = '4:30 PM'; 
      //        this.getDataKwee();
      //     }else if(this.currentTime < this.morningTime_9_30){
      //       this.isActive = false
  
      //       this.breakTime = '4:30 PM'; 
      //        this.getDataresult();
      //     }else{
           
      //        this.isActive = true
      //       this.breakTime = moment().format('h:mm A');
      //     }
      // // this.currentTime = moment().format('HH:mm:ss');
      //  this.currentDate = moment().format("YYYY D MMMM  dddd")
        
      //  },
       ServerCurrentTime() {
        //  console.log('ok')
         if (this.currentTime > this.time_12_00 && this.currentTime <  this.time_01_00 ) {
           this.isActive = false
          
            this.breakTime = '12:01 PM';
           
          } else if(this.currentTime > this.time_04_30){
            // this.isActive = false
            //alert('lll')
             if(this.close_day == 1) {
            
               this.isActive = false
            }else {
                
               this.isActive = true
            }
            this.isActive = false
            this.breakTime = '4:30 PM'; 
            
          }else if(this.currentTime < this.morningTime_9_30){
         
            this.isActive = false
            this.breakTime = '4:30 PM'; 
            
          }else{
            
            if(this.close_day == 1) {
            
               this.isActive = false
            }else {
                
               this.isActive = true
            }
          
            this.isActive = true
            
            this.breakTime = moment().format('h:mm A');
          }
      // this.currentTime = moment().format('HH:mm:ss');
       this.currentDate = moment().format("YYYY D MMMM  dddd")
        
       },
      updateIsLoggedIn() {
        this.$store.commit('updateIsLoggedIn', this.hasUserInfo());
      },
      hasUserInfo() {
        return Boolean(localStorage.getItem('userInfo'));
      },
      submitForm(formName) {
         this.$refs[formName].validate((valid) => {
          if (valid) {
              let phone = this.ruleForm.phone
                  this.$axios.post('/v2/v1/myanmar_phone', {
                    phone: this.ruleForm.phone,
                   
                    
                })
                    .then(response => {
                     
                       this.userInfo = response.data.phone
                      this.$store.commit('logIn', this.userInfo)
                      location.reload();
                      this.dialogVisible = false
                      
             
                }) 
                 .catch(error => {
                    console.log(error.response)
                });
                   
          } else {
            console.log('error submit!!');
            return false;
          }
         })
      },
         profileUpdate() {
              var data_phone = {
                    phone: $('#ok').val(),

                  }
                  var realPhone = parseInt(data_phone.phone)
                
               this.$axios.post('/v2/v1/myanmar_phone', {
                    phone:'0'+realPhone
                })
                    .then(response => {
               
                       this.userInfo = response.data.phone
                       this.full_limit = response.data.data_full
                       if(this.full_limit == 1) {
                           this.$message({
                            showClose: true,
                           message: 'Full Limit 3 Times',
                          type: 'warning',
                        });
                       }else {
                           this.$store.commit('logIn', this.userInfo)
                            location.reload();
                       }
                        this.dialogVisible = false
   
            })
              .catch(error => {
                    console.log(error.response)
                });
        }
     
    },
     created() {
          var stop_Interval =  setInterval(function() {
              
              this.hasPhone = localStorage.getItem('userInfo')
                      if(!this.hasPhone) {
                        this.dialogVisible = true
                      }else {
                        this.dialogVisible = false
                      }  
            
             }.bind(this), 120000)
  
      
      this.currentDate = moment().format("YYYY D MMMM  dddd")
     // this.currentTime = moment().format('HH:mm:ss ');
       this.breakTime = moment().format('h:mm:ss a')
     this.serverCurTimeItvId = setInterval(() => this.ServerCurrentTime(), 1 * 1000);
    
    
        
              
         let token = localStorage.getItem('token');
      if(token) {
         this.$axios.get("/v2/v1/profile",
                    {headers: {
                               "Authorization": "Bearer "+token
                         }
                        })
                    .then(response => {
                      this.blockUser = response.data.data.trash
                    //console.dir(response.data);
                     this.profile = response.data.data
                    this.myWallet = this.profile.wallet 
                    this.currentTime = response.data.data.time;
                    //console.dir(response.data.data.time);
                     if(this.blockUser == 0) {
                        console.log('blcok_user')
                      }else {
                        this.$store.commit('logOut');
                        this.$router.push(`/?lang=${this.$store.state.locale}`); 
                      }
                })
      }
        this.$axios.get('v2/v1/server_time')
              .then(response => {
               this.currentTime = response.data.time
               this.serverDate  = response.data.date
              })
            
    },
}

</script>

<style>

.twod_home .hideScrollBar {
  padding-top:66px;
}
.twod_home .logo {

  height: auto;
  position: relative;
  top:-31px;
}
.owl-theme .owl-nav.disabled + .owl-dots {
  position: absolute;
  right:0;
  left:0;
  top:97px;
}
.owl-carousel .owl-dots.disabled  {
  display: block !important;
  border:0;
}
.main_page .owl-carousel .owl-stage-outer {
  padding:0 !important;
}
.main_page .el-image {

  border-radius: 24px !important;
}
.main_page {
  background: #FAFAFA;
  text-align: center;
  font-family: 'Kanit', sans-serif;
}
@keyframes ldio-ct1tsjzqdg5-o {
    0%    { opacity: 1; transform: translate(0 0) }
   49.99% { opacity: 1; transform: translate(40px,0) }
   50%    { opacity: 0; transform: translate(40px,0) }
  100%    { opacity: 0; transform: translate(0,0) }
}
@keyframes ldio-ct1tsjzqdg5 {
    0% { transform: translate(0,0) }
   50% { transform: translate(40px,0) }
  100% { transform: translate(0,0) }
}

.loading_spinner_main_number {
 position: relative;
 left:60px;


}
.loadingio-spinner-card_one_loading {
  width: 100%;
  height: 100%;
 position: absolute;
 top:22px;
 right:32px;
  overflow: hidden;

}
.ldio-ct1tsjzqdg5 div {
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  top: 60px;
  left: 20px;
}
.ldio-ct1tsjzqdg5 div:nth-child(1) {
  background: #93dbe9;
  animation: ldio-ct1tsjzqdg5 1s linear infinite;
  animation-delay: -0.5s;
    width:30px;
  height:30px;

}
.ldio-ct1tsjzqdg5 div:nth-child(2) {
  background: #689cc5;
  animation: ldio-ct1tsjzqdg5 1s linear infinite;
  animation-delay: 0s;
  width:30px;
  height:30px;
}
.ldio-ct1tsjzqdg5 div:nth-child(3) {
  background: #93dbe9;
  animation: ldio-ct1tsjzqdg5-o 1s linear infinite;
  animation-delay: -0.5s;
    width:30px;
  height:30px;

}

.ldio-ct1tsjzqdg5 {
  width: 100%;
  height: 100%;
  position: relative;
  left:45px;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0; /* see note above */
}

.ldio-ct1tsjzqdg5 div { box-sizing: content-box; }
/* generated by https://loading.io/ */
.card_one_loading div {
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  top: 60px;
  left: 20px;
}
.card_one_loading div:nth-child(1) {
  background: #93dbe9;
  animation: ldio-ct1tsjzqdg5 1s linear infinite;
  animation-delay: -0.5s;
    width:15px;
  height:15px;

}
.card_one_loading div:nth-child(2) {
  background: #689cc5;
  animation: ldio-ct1tsjzqdg5 1s linear infinite;
  animation-delay: 0s;
  width:15px;
  height:15px;
}
.card_one_loading div:nth-child(3) {
  background: #93dbe9;
  animation: ldio-ct1tsjzqdg5-o 1s linear infinite;
  animation-delay: -0.5s;
    width:15px;
  height:15px;

}

.card_one_loading {
  width: 40px;
  height: 40px;
  position: relative;
  left:0;
  bottom:55px;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0; /* see note above */
}

.card_one_loading div { box-sizing: content-box; }

  .el-carousel {
    border-radius: 22px;
    -webkit-border-radius:22px;
    -moz-border-radius: 22px;
    -webkit-box-shadow: -1px 1px 16px -4px rgba(0,0,0,0.75);
    -moz-box-shadow: -1px 1px 16px -4px rgba(0,0,0,0.75);
    box-shadow: -1px 1px 16px -4px rgba(0,0,0,0.75);

  }
   
  .main_page {
   
   margin:0 auto;
  }
  .el-header {
    /* background-color: #14612D; */
    color: #333;
    /* text-align: center; */
    padding:10px 0;
    z-index: 5;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  /* .el-main {
    text-align: center;
    margin:0 auto;
    background-image:url(~static/images/main_bg.png); 
    background-size:cover;
    background-repeat: no-repeat;
    max-width: 480px;
    width:100%;
    height:100vh;
    padding:0;
    overflow: hidden;
 
    
  } */
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

/* slider text css */
/* CSS Document */
.scroll-left {
  overflow: hidden;
  height:31px;	
  position: relative;
  width:auto;
}
.scroll-left p {
  position: absolute;
  white-space:nowrap;
  height: 100%;
  margin: 0;
  line-height: 31px;
  text-align: left;
  /* Apply animation to this element */	
  -moz-animation: scroll-left 10s linear infinite;
  -webkit-animation: scroll-left 10s linear infinite;
  animation: scroll-left 10s linear infinite;
}
 /* change language css */
  .main_page .lang {
    text-align: center;
    margin:0 auto;
}
.main_page .el-dialog {
  border-radius: 21px !important;
}

.lang .el-dropdown {
    padding:27px;
    -webkit-box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.main_page .lang .el-dropdown-menu__item{
    margin:20px auto;
    background: #158220;
    color:#fff;
    border-radius: 21px;
    
}
.lang .el-dropdown-link {
    font-size: 18px;
    font-weight: bold;
}
.language_type .el-dropdown-menu__item:not(.is-disabled):hover {
    background: #158220;
    color:#fff;
    border-radius: 21px;
}
.lang .el-button.is-round {
    width: 100%;
    position: absolute;
    right: 0;
    left: 0;
    margin: 20px;
    bottom: 0;
}
.language_type {
    padding:20px;
}
.language_type .el-header {
   background-color :#fff;

}
.language_type ul {
    padding:0;
    margin:150px auto;
    list-style:none;
}
.language_type ul li {
    max-width: 480px;
    width:50%;
    padding:10px;
    text-align: center;
    border-radius: 23px;
    margin:20px auto;
    color:#000;
    text-transform:capitalize;
    
}
.language_type ul li a {
    text-decoration: none;
   
}
.language_type .active {
    background:#158220;
    color:#fff;
    display: block;
    font-weight: bold;
}
.el-page-header__left {
    margin:0;
}
.language_type .el-page-header {
    line-height: 43px;
    color:#000;
   
}
.language_type .el-page-header__content {
    color:#000;
    font-weight: bold;
}
.main_page .el-dialog {
  max-width: 480px;
  width:90%;
}
.main_page .el-dialog__wrapper {
  background: rgba(7, 14, 7, 0.8);
  
}
  /* change lang css end */
/* Move it (define the animation) */
@-moz-keyframes scroll-left {
  0%   { -moz-transform: translateX(100%); }
  100% { -moz-transform: translateX(-100%); }
}
@-webkit-keyframes scroll-left {
  0%   { -webkit-transform: translateX(100%); }
  100% { -webkit-transform: translateX(-100%); }
}
@keyframes scroll-left {
  0%   { 
  -moz-transform: translateX(100%); /* Browser bug fix */
  -webkit-transform: translateX(100%); /* Browser bug fix */
  transform: translateX(200px); 		
  }
  100% { 
  -moz-transform: translateX(-100%); /* Browser bug fix */
  -webkit-transform: translateX(-100%); /* Browser bug fix */
  transform: translateX(-100%); 
 }
}
</style>
