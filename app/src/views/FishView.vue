<template>
  <div>
    <div
      class="relative bg-[url('/tank.png')] w-1/2 h-1/4 bg-no-repeat bg-cover"
      :style="{
        backgroundImage: 'url(/tank.png)', // Dynamically set the background image
        backgroundSize: 'cover', // Ensure the background image covers the entire div
        backgroundPosition: 'center', // Center the background image
      }"
    >
      <TankedFish
        v-for="(item, index) in screenOccupants"
        :key="index"
        :item="item"
        :style="getPositionStyle(item)"
      />
    </div>
    <div>
      <FishCards v-for="item in fishList" :key="item.name" :item="item">
        <button @click="addToTank(item)">Click Me!</button>
      </FishCards>
    </div>
  </div>
</template>

<script setup>
import { fishList } from '@/fish.js'
import FishCards from '../components/FishCards.vue'
import { ref, reactive } from 'vue'
import TankedFish from '../components/TankedFish.vue'

const screenOccupants = reactive([])

function addToTank(data) {
  const newFish = {
    ...data,
    position: {
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
    },
    size: Math.floor(Math.random() * 50) + 30,
  }
  screenOccupants.push(newFish)
  console.log(screenOccupants)
}
function getPositionStyle(item) {
  return {
    position: 'absolute',
    top: item.position.top,
    left: item.position.left,
    width: `${item.size}px`,
    height: `${item.size}px`,
  }
}
</script>

<style>
div {
  display: block;
}
</style>
