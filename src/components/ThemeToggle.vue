<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { SunIcon, MoonIcon } from '@heroicons/vue/24/outline'

const isDark = ref(false)

// Initialize dark mode from localStorage or system preference
onMounted(() => {
  const savedTheme = localStorage.getItem('dark-mode')
  if (savedTheme !== null) {
    isDark.value = savedTheme === 'true'
  } else {
    isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  updateTheme()
})

// Watch for changes and update theme
watch(isDark, updateTheme)

function updateTheme() {
  if (isDark.value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
  localStorage.setItem('dark-mode', isDark.value.toString())
}

function toggleDark() {
  isDark.value = !isDark.value
}
</script>

<template>
  <button
    @click="toggleDark"
    class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
    :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
  >
    <SunIcon v-if="!isDark" class="h-5 w-5 text-gray-600" />
    <MoonIcon v-else class="h-5 w-5 text-gray-400" />
  </button>
</template>