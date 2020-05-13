<template>
  <div class="navBar">
      <div>
        <div class="dingwei"><van-icon name="location-o" />{{address}}</div>
        <div>
            <van-search placeholder="奶粉" />
        </div>
        <div>操作</div>
      </div>
  </div>  
</template>

<script>
import '../assets/common/vant-ui'//把所有用到的UI组件放到一个文件夹里
export default {
  name: "navBar",
  data(){
    return{
        address:'长沙省妇幼店',
        searchValue:''
    }
  },
  watch:{//watch监听数据变化
    '$store.state.satus':function(newFlag, oldFlag){
        console.log('新值',newFlag)
        console.log('旧值',oldFlag)
        this.static=newFlag
    }
  },
  mounted(){
  
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .navBar{
        font-size: 12px;
        // position: fixed;
        top:0;
        left:0;
        height: 40px;
        width:100%;
        // line-height: 40px;
        div{
            display: flex;
            .dingwei{
              padding-top: 8px;
            }
            div:nth-of-type(1){
                flex-grow: 2;
                width:35%;
            }
            div:nth-of-type(2){
                flex-grow: 1;
                width: 45%;
            }
            div:nth-of-type(3){
                flex-grow: 1;
                 width: 20%;
                 padding-top: 8px;
            }
        }
    }
</style>
