<template>
  <div ref="wrapper">
    <slot></slot>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'

  export default {
    props: { 
      probeType: {
        type: Number,
        default: 1
      },
      //是否手动开发点击事件
      click: {
        type: Boolean,
        default: true
      },
      listenScroll: {
        type: Boolean,
        default: false
      },
      // 数据可能动态变化
      data: {
        type: Array,
        default: null
      },
      //是否开启上拉刷新
      pullup: {
        type: Boolean,
        default: false
      },
      beforeScroll: {
        type: Boolean,
        default: false
      }
    },
    mounted() {
      // 确保dom渲染(定时器)
      setTimeout(() => {
        this._initScroll()
      }, 20)
    },
    methods: {
      //初始化方法
      _initScroll() {
        // 如果没有$refs.wrapper 就返回
        if (!this.$refs.wrapper) {
          return
        }
        this.scroll = new BScroll(this.$refs.wrapper, {
          probeType: this.probeType,
          click: this.click
        })

        if (this.listenScroll) {
          let me = this
          this.scroll.on('scroll', (pos) => {
            me.$emit('scroll', pos)
          })
        }

        if (this.pullup) {
          //监听scollend事件（滚动结束时会派发）
          this.scoll.on('scrollEnd', ()=>{
            if (this.scroll.y <= (this.scroll.maxScorllY + 50 )){
              //派发事件scrollToEnd
              this.$emit('scrollToEnd' )
            }
          })
        }

        if (this.beforeScroll) {
          this.scroll.on('beforeScrollStart', () => {
            this.$emit('beforeScroll')
          })
        }
      },
      disable() {
        this.scroll && this.scroll.disable()
      },
      enable() {
        this.scroll && this.scroll.enable()
      },
      //刷新scroll 重新计算高度
      refresh() {
        this.scroll && this.scroll.refresh()
      },
      scrollTo() {
        this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
      },
      scrollToElement() {
        this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
      },
      scrollToEnd() {
        console.log('没有啦')
      }
    },
    watch: {
      //观察data的变化
      data() {
        setTimeout(() => {
          this.refresh()
        }, 20)
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
