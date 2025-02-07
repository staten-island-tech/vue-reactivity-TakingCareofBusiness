<template>
  <div class="wrapper">
    <HeaderTitle />
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">about</RouterLink>
    </nav>
    <TankImage />
    <RouterView />
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderTitle from './components/HeaderTitle.vue'
import TankImage from './components/TankImage.vue'
</script>

<style scoped></style>
