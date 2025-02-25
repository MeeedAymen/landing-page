<script setup lang="ts">
defineProps<{
  title: string
  description: string
  icon: string
  delay: number
}>()
</script>

<template>
  <div
    class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
    v-motion
    :initial="{
      opacity: 0,
      y: 50
    }"
    :enter="{
      opacity: 1,
      y: 0,
      transition: {
        delay,
        duration: 500
      }
    }"
  >
    <div class="p-6">
      <img :src="icon" :alt="title" class="w-16 h-16 mb-4">
      <h3 class="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{{ title }}</h3>
      <p class="text-gray-600 dark:text-gray-300">{{ description }}</p>
    </div>
  </div>
</template>