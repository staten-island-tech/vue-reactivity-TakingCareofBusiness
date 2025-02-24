<template>
  <div>
    <div>
      <TankImage>
        <TankedFish v-for="item in occupantList" :key="item.name" :item="item" />
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
import { occupantList } from '@/TankList.js'
import TankImage from '../components/TankImage.vue'
function addToTank(data) {
  occupantList.push(data)
  console.log(occupantList)
}
</script>

<style scoped></style>
