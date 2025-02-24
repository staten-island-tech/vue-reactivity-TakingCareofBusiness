<template>
  <div>
    <img class="w-1/10 h-1/10" :src="item.image" alt="Fish image" />
    <slot></slot>
  </div>
</template>

<script setup>
defineProps({ item: Object })
</script>

<style></style>
