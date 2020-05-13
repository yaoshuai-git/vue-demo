<template>
  <div class="hello">
      <van-button type="warning" size="small">{{static}}</van-button>
  </div>  
</template>

<script>
import '../assets/common/vant-ui'
export default {
  name: "HelloWorld",
  props: {

  },
  data(){
    return{
        static:this.$store.state.satus
    }
  },
  watch:{//watch监听数据变化
    '$store.state.satus':function(newFlag, oldFlag){
        console.log('新值',newFlag)
        console.log('旧值',oldFlag)
        this.static=newFlag
    }
  },
  // computed:{//computed监听数据变化
  //     static(){
  //       console.log(this.$store.state)
  //       return this.$store.state.satus
  //     }
  // },
  mounted(){
     console.log(this.$store.state.satus)
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
