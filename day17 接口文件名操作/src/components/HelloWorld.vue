<template>
  <div class="hello">
    <img src="https://sr.aihuishou.com/cms/image/636977764477777910675720537.png" alt="">
    <ul>
      <li v-for="(item,index) in list" :key="index">
          <img :src="item.img | filterImg" alt="">
          {{item.nm}}
      </li>
    </ul>
    
  </div>
</template>

<script>
import Vue from 'vue'
Vue.filter('filterImg',(str)=>{
  return str.replace('w.h','180.128')
})
export default {
  data() {
    return {
      list: []
    }
  },
  created() {
    let url = '/ajax/movieOnInfoList?token=&optimus_uuid=CA8FA28025E911EA97B5594F39CC17B42A2673EF479D4B61A0C765F6E4FD8E68&optimus_risk_level=71&optimus_code=10'
    this.$axios.get(url).then((res)=>{
      console.log(res)
      this.list = res.data.movieList
    })  
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
a {
  color: #42b983;
}
</style>
