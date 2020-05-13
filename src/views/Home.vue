<template>
  <div class="home">
    <navBar/>
    <div>
        <!-- <div v-for="(item,index) in imgList" :key="index">
            <img v-lazy="item" style="width:100%">
        </div> -->
        <van-swipe :autoplay="3000" :show-indicators="false">
          <van-swipe-item v-for="(image, index) in imgList" :key="index">
            <img v-lazy="image" class="swiperImg"/>
          </van-swipe-item>
        </van-swipe>
    </div>
    <div>
        <van-cell-group>
          <van-field
            error
            required
            label="用户名"
            placeholder="请输入用户名"
          />
          <van-field
            required
            label="手机号"
            placeholder="请输入手机号"
            error-message="手机号格式错误"
          />
        </van-cell-group>
    </div>
    <div>
      <van-area title="选择省市区" :area-list="areaList" value="110101" />
    </div>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import navBar from "@/components/navBar.vue";
import '../assets/common/vant-ui'
import araeList from '@/assets/common/areaList'
export default {
  name: "Home",
  components: {
    HelloWorld,
    navBar
  },
  data(){
    return{
        imgList:[require('../assets/img/1.jpg'),require('../assets/img/2.jpg'),require('../assets/img/3.jpg')
        ,require('../assets/img/4.jpg'),require('../assets/img/5.jpg'),require('../assets/img/6.jpg')
        ],
        areaList:araeList
    }
  },
  methods:{
      changeType(){
        // this.$store.commit('edit') //触发mutation改变状态，只能同步
        // this.$store.dispatch('change')  //用actions触发mutation，可以支持异步
        this.$store.dispatch('change',{//带参数控制
            name:'要大海',
            sex:'男'
        })
      }
  }
};
</script>
<style lang="less">
      .atl{
        font-size: 16px;
      }
      .home{
        padding:4px
      }
      .swiperImg{
        height:200px;width:100%
      }
</style>
