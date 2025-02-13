<template>
  <div>
    <FishCards v-for="item in fishList" :key="item.name" :item="item><button @click="addToTank(item)">Click Me!</button>
      </FishCards>
  </div>
</template>

<script setup>
import { fishList } from '@/fish.js'
import FishCards from '../components/FishCards.vue'
const occupantList = reactive({})
function addToTank(data) {
  console.log(data)
}
</script>

<style scoped></style>
