<template>
  <div class="wrapper">
    <RouterView />
    <HeaderTitle />
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import StartView from './views/StartView.vue'
import HeaderTitle from './components/HeaderTitle.vue'
</script>

<style scoped></style>
