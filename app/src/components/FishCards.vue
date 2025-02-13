<template>
  <div class="w-1/4 h-1/5 bg-white">
    <h1>{{ item.name }}</h1>
    <img class="w-2/3 h-1/2" :src="item.image" alt="Fish image" />
    <slot></slot>
  </div>
</template>

<script setup>
defineProps({ item: Object })
</script>
