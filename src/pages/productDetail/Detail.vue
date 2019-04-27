<template>
 <detail-banner :imgs="imgs"> </detail-banner>
</template>

<script>
import DetailBanner from './components/Banner'
export default {
 name: 'Detail',
 components: {
     DetailBanner
 },
 data() {
     return {
         imgs:["/static/images/dd.jpg", 
               "/static/images/cc.jpg", 
               "/static/images/gg.jpg"]
     }
 }
}
</script>

<style lang="stylus" scoped>
</style>
