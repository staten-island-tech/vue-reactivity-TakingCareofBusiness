<template>
  <div>
    <div>
      <TankImage>
        <TankedFish v-for="item in screenOccupants" :key="item.name" :item="item" />
      </TankImage>
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
import TankImage from '../components/TankImage.vue'
import { ref, reactive } from 'vue'
const screenOccupants = reactive([])
function addToTank(data) {
  screenOccupants.push(data)
  console.log(screenOccupants)
}
</script>

<style scoped></style>
