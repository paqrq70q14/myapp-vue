<template>
  <ul class="item-list" >
    <li class="item"
        v-for="(item,key) of cities" 
        :key="key" 
    >
      {{key}}
    </li>
  </ul>
</template>

<script>
export default {
  name: "CityAlphabet",
  props: {
    cities: Object
  }
};
</script>

<style lang="stylus" scoped>
.item-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  line-height: 0.44rem;
  position: absolute;
  right: 0;
  top: 2.08rem;
  bottom: 0;
  width: 0.4rem;
}
</style>
