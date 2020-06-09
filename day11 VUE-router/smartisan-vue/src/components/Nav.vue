
<template>
  <div class="nav">
        顶部导航栏
        <ul>
            <li>
                <router-link to="/">
                    首页
                </router-link>
            </li>
            <li>
                <router-link to="/prod">
                    产品 
                </router-link>
            </li>
            <li>
                <router-link to="/contact">
                    联系 
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.nav{
    height: 100px;
    background: #6677cc;
}
.aside{
    height:500px;
    width: 30%;
    background: #88dd99;
    float: left;
}
.main{
    height:500px;
    width: 70%;
    background: #ff9999;
    float: left;
}
li{
    width: 100px;
    height:40px;
    line-height: 40px;
    background: #d8d8d8;
    display: inline-block;
    text-align: center;
}

</style>