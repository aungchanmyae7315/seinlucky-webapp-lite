<template>
        <div class="music_icon">
        
                      <div id="player-container">
                        <div id="play-pause" class="play" v-on:click="music"  v-bind:class="{ pause: pause }">Play</div>
                         <audio ref="audioElm" src="https://www.dropbox.com/s/t32waag3ib20b28/OneDance-Drake.mp3?raw=1"></audio>
                      </div>
                     
        </div>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    hasError: false,
    pause:false,
  }),
  methods: {
       music: function(event) {
      var a = this.$refs.audioElm;
      if (a.paused) {
        a.play();
      } else {
        a.pause();
      }
    }
  }
}
</script>

<style scoped>
  .pause {
    
    -webkit-animation:spin 4s linear infinite;
    -moz-animation:spin 4s linear infinite;
    animation:spin 4s linear infinite;
}
@-moz-keyframes spin { 100% { -moz-transform: rotate(360deg); } }
@-webkit-keyframes spin { 100% { -webkit-transform: rotate(360deg); } }
@keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }




</style>
