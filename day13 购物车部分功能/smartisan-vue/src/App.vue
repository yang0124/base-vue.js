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

.animated{
  animation-duration: 0.3;
  animation-delay: 0;
}
</style>
