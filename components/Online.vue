<template>
    <div>
         <el-alert style="z-index:99999"
                title="info alert"
                type="info">
                  onLine: {{ onLine }}
        <br>
        showBackOnline: {{ showBackOnline }}
            </el-alert>
       
    </div>
</template>


<script>
export default {
    data() {
        return {
            onLine: navigator.onLine,
            showBackOnline: false
        }
    },
    methods: {
        updateOnlineStatus(e) {
            const { type } = e;
            this.onLine = type === 'online';
        }
    },
    watch: {
        onLine(v) {
            if(v) {
                this.showBackOnline = true;
                setTimeout(()=>{ this.showBackOnline = false; }, 1000);
            }
        }
    },
     mounted() {
        window.addEventListener('online',  this.updateOnlineStatus);
        window.addEventListener('offline', this.updateOnlineStatus);
    },
    beforeDestroy() {
        window.removeEventListener('online',  this.updateOnlineStatus);
        window.removeEventListener('offline', this.updateOnlineStatus);
    }

}
</script>