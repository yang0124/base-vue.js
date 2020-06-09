<template>
  <div id="app">
    <router-view name="nav"></router-view>
    <transition 
      mode="out-in" 
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
    >
        <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
