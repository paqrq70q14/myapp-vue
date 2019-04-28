<template>
  <div>
    <detail-banner :imgs="imgs"></detail-banner>
    <detail-header></detail-header>
    <div class="content"></div>
  </div>
</template>

<script>
import DetailBanner from "./components/Banner";
import DetailHeader from "./components/Header";
export default {
  name: "Detail",
  components: {
    DetailBanner,
    DetailHeader
  },
  data() {
    return {
      imgs: [
        "/static/images/dd.jpg",
        "/static/images/cc.jpg",
        "/static/images/gg.jpg"
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
.content {
  height: 50rem;
}
</style>
