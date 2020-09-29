import Vue from 'vue';
import Vuex from 'vuex';
export default function ({ $axios, redirect }) {
  $axios.onRequest(config => {
    console.dir(config.url);
    config.headers.common['device-id'] = localStorage.getItem("deviceId")
    console.log('Making request to ' + config.url)
    console.log('deviceId' + localStorage.getItem("deviceId") )



    
  if (config.url.match(/luke/)){
      console.log('go to luke.2dboss.com');
      config.baseURL = "https://luke.2dboss.com/api/";
    };
  if (config.url.match(/web-app-version/)){
      console.log('---go to version.seinlucky123.com');
      config.baseURL = "https://version.seinlucky123.com";    
    };  
  });



 
            // $axios.onError(error => {
            //   console.log('axiosOnError')
            //     var data = {
            //         user_id:localStorage.getItem('UserID'),
            //         request_url:error.response.config.url,
            //         user_agent:navigator.userAgent,
            //         page_url: window.location.href,
            //         err:error.response.data.message,
            //         info: "hello",
            //         trace:"hello",
            //         msg: error.response.data.message,
            //     }
            //   $axios.post("/v2/v1/error_log",
            //                data)
            //         .then(response => {
            //              console.log(response)
            //         })
            //         const code = parseInt(error.response && error.response.status)
            //         if (code === 400) {
            //               redirect('/400')
            //             }
            //            // window.$nuxt.$store.commit('axiosError', error.response);
            //     })
       
  
Vue.config.warnHandler = function(msg, vm, trace) {
  //vm.$store.commit('axiosError', trace);
  // console.dir("+++ warnHandler");
  // console.dir(trace);
  // console.dir(msg);
  // console.dir("++++++");
  // console.dir(vm.$axios);
  // console.dir(navigator.userAgent);
  //user id
  
}
Vue.config.errorHandler = (err, vm, info) => {
  //vm.$store.commit('axiosError', err);
  // err: error trace
  // vm: component in which error occured
  // info: Vue specific error information such as lifecycle hooks, events etc.
  
  // TODO: Perform any custom logic or log to server
  // console.dir("+++ errorHandler");
  // console.dir(err);
   
};
}




