import Vuex from 'vuex'


const createStore = () => {
    return new Vuex.Store({
        
        state: {
            isLoggedIn: false,
            check_btn:false,
            Otp: '',
            phoneResponse:'',
            getBet:'',
            updateLang:true,
            locales: ['en', 'uni','zg','zh'],
            locale: 'uni',
            token:'',
            file:'',
            webAppVersion:'',
            sliderImage:[],
            sliderText:''
        
        },
        getters: {
          
        },
        mutations: {
            setWebAppVersion(state, version) {
                state.webAppVersion = version;
            },
            setSliderImage(state, slider_images) {
                localStorage.setItem('slider_images',JSON.stringify(slider_images));
                state.slider_images = slider_images;

            },
            setSliderText(state, slider_text) {
                localStorage.setItem('slider_text',JSON.stringify(slider_text));
                state.slider_text = slider_text;
            },
            setSliderTime(state, slider_time) {
                localStorage.setItem('slider_time',JSON.stringify(slider_time));
                state.slider_time = slider_time;
            },
            bank_card_grouping(state, bank_account) {
                localStorage.setItem('bank_account',JSON.stringify(bank_account));
                state.bank_account = bank_account;
            },
            bankgroupTime(state, bank_group_time) {
                localStorage.setItem('bank_group_time',JSON.stringify(bank_group_time));
                state.bank_group_time = bank_group_time;
            },
            SET_LANG(state, locale) {
                if (state.locales.indexOf(locale) !== -1) {
                  state.locale = locale
                  localStorage.setItem('locale', locale);
                }
              },

            logIn(state, userInfo) {
                //console.log("UserInfo", userInfo);
                // state.userInfo = userInfo;
                localStorage.setItem('userInfo',userInfo);
                state.isLoggedIn = true;
                
            },
           
         
           
            updateIsLoggedIn(state, isLoggedIn) {
                state.isLoggedIn = isLoggedIn;
            },
            updateLang(state, updateLang) {
                state.updateLang = updateLang;
            },
           
            
           
         
          
           
        }
    })
}

export default createStore;










