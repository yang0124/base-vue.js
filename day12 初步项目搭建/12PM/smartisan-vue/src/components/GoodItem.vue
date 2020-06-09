   <template>
  <div class="item">
    <div>
        <div class="item-img">
            <img alt="Smartisan 快充移动电源 10000mAh" :src="gitem.stock_info[num].image" style="opacity: 1;">
        </div>
        <h6>{{gitem.stock_info[num].title}}</h6>
        <h3 >{{gitem.stock_info[num].sub_title}}</h3>
        <div class="params-colors">
            <ul class="colors-list">
                <li v-for="(item,index) in gitem.stock_info" :key="index" @click="num=index">
                    <a 
                    href="javascript:;"  
                    :class="index==num?'active':''"
                    :style="'background:'+item.detail.color+';'">
                    
                    </a>
                </li>
            </ul>
        </div>
        <div class="item-btns clearfix">
            <span class="item-gray-btn">
                <!-- <a href="javascript:;" target="_blank"></a>  -->
                <!-- 【day02-三-2】在router-link的to属性上绑定路由实参 -->
                <router-link :to="'/detail/'+gidx">查看详情</router-link>
            </span>
            <span class="item-blue-btn" @click="handlePlus">加入购物车 {{vnum}}</span>
        </div>
        <div class="item-price clearfix">
            <i>¥</i><span>{{gitem.stock_info[num].price}}</span>
        </div>
        <div class="discount-icon">false</div>
        <div class="item-cover">
            <a href="javascript:;" target="_blank"></a>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props:['gitem','gidx'],
    data() {
        return {
            num: 0
        }
    },
    computed: {
        vnum(){
            return this.$store.state.num //在组件内部提取vuex提供的数据
        }
    },
    methods: {
        handlePlus(){
            this.$store.commit('plusNumMut')
        }
    },
}
</script>

<style>

</style>