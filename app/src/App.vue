<template>
  <div class="wrapper">
    <HeaderTitle />
    <RouterView />
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderTitle from './components/HeaderTitle.vue'
</script>

<style scoped></style>
