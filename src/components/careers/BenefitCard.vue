<script setup lang="ts">
import { defineProps } from 'vue'
import { fadeInUp } from '@/utils/animations'

interface Benefit {
  title: string
  description: string
  icon: string
}

defineProps<{
  benefit: Benefit
  index: number
}>()
</script>

<template>
  <div
      v-motion
      v-bind="{
      ...fadeInUp,
      enter: { ...fadeInUp.enter, transition: { delay: index * 200 } }
    }"
      class="text-center p-6 bg-gray-50 dark:bg-gray-900 rounded-lg transition-all duration-300 hover:shadow-lg"
  >
    <div class="text-4xl mb-4">{{ benefit.icon }}</div>
    <h3 class="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
      {{ benefit.title }}
    </h3>
    <p class="text-gray-600 dark:text-gray-300">
      {{ benefit.description }}
    </p>
  </div>
</template>