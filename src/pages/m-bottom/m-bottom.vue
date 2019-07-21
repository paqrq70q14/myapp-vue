<template>
    <div class="bottom">
        <div class="wrapper">
            <div class="item">
                首页
            </div>
            <div class="item">消息</div>
            <router-link to="/user" tag="div" class="item">我</router-link>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
.bottom
 position: absolute
 bottom: 0
 left: 0
 width: 100%
 height: 1rem
 .wrapper
  padding: .1rem .3rem
  display: flex
  justify-content: space-between
  align-items:center
  .item 
   line-height:.9rem
</style>
