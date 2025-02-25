<script setup lang="ts">
import { defineProps } from 'vue'
import { fadeInUp } from '@/utils/animations'

interface Requirement {
  text: string
}

interface JobPosition {
  title: string
  department: string
  location: string
  type: string
  description: string
  requirements: string[]
}

defineProps<{
  position: JobPosition
  index: number
}>()
</script>

<template>
  <div
      v-motion
      :initial="{ opacity: 0, y: 50 }"
      :enter="{ opacity: 1, y: 0, transition: { delay: index * 200 } }"
      class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl"
  >
    <div class="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
      <div>
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {{ position.title }}
        </h3>
        <div class="space-y-2">
          <p class="text-gray-600 dark:text-gray-300">{{ position.department }}</p>
          <p class="text-gray-600 dark:text-gray-300">{{ position.location }}</p>
          <span class="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
            {{ position.type }}
          </span>
        </div>
      </div>
      <button
          class="bg-primary text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-colors w-full md:w-auto"
      >
        Postuler
      </button>
    </div>
    <p class="text-gray-600 dark:text-gray-300 mb-4">
      {{ position.description }}
    </p>
    <div>
      <h4 class="font-medium text-gray-900 dark:text-white mb-2">Prérequis:</h4>
      <ul class="list-disc list-inside space-y-2">
        <li
            v-for="(req, reqIndex) in position.requirements"
            :key="reqIndex"
            class="text-gray-600 dark:text-gray-300"
        >
          {{ req }}
        </li>
      </ul>
    </div>
  </div>
</template>