<template>
  <div>
    <div class="bg-[url('/tank.png')] w-1/3 h-1/5">
      <TankedFish v-for="item in screenOccupants" :key="item.name" :item="item" />
    </div>
    <div>
      <FishCards v-for="item in fishList" :key="item.name" :item="item"
        ><button @click="addToTank(item)">Click Me!</button>
      </FishCards>
    </div>
  </div>
</template>

<script setup>
import { fishList } from '@/fish.js'
import FishCards from '../components/FishCards.vue'
import { ref, reactive } from 'vue'
const screenOccupants = reactive([])
function addToTank(data) {
  screenOccupants.push(data)
  console.log(screenOccupants)
}
</script>

<style scoped></style>
