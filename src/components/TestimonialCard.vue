<script setup lang="ts">
defineProps<{
  name: string
  role: string
  content: string
  image: string
  delay: number
}>()
</script>

<template>
  <div
    class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
    v-motion
    :initial="{
      opacity: 0,
      scale: 0.8
    }"
    :enter="{
      opacity: 1,
      scale: 1,
      transition: {
        delay,
        duration: 500
      }
    }"
  >
    <div class="flex items-center mb-4">
      <img :src="image" :alt="name" class="w-12 h-12 rounded-full object-cover">
      <div class="ml-4">
        <h4 class="font-semibold text-gray-900 dark:text-white">{{ name }}</h4>
        <p class="text-sm text-gray-600 dark:text-gray-400">{{ role }}</p>
      </div>
    </div>
    <p class="text-gray-600 dark:text-gray-300 italic">{{ content }}</p>
  </div>
</template>