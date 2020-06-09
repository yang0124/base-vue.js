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
                <router-link to="/detail">查看详情</router-link>
            </span>
                <span class="item-blue-btn">加入购物车
                </span>
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
    props:['gitem'],
    data() {
        return {
            num: 0
        }
    },
}
</script>

<style>

</style>