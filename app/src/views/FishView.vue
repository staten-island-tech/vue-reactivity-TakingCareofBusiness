<template>
  <div>
    <div class="relative">
      <img class="relative w-full h-1/4" src="/tank.png" alt="Fish Tank" />
      <TankedFish
        v-for="(item, index) in screenOccupants"
        :key="index"
        :item="item"
        :style="getPositionStyle(item)"
      />
    </div>
    <div class="flex flex-wrap gap-4 mt-4 justify-center">
      <FishCards v-for="item in fishList" :key="item.name" :item="item" class="flex-none w-1/5">
        <button @click="addToTank(item)">Add To Bowl</button>
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
      top: `${Math.random() * (65 - 40) + 40}%`,
      left: `${Math.random() * (80 - 15) + 15}%`,
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
