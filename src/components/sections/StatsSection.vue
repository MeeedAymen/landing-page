  <script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useMotion } from '@vueuse/motion'
import { createScrollObserver } from '@/utils/animations'

const props = defineProps<{
  stats: Array<{
    number: string
    label: string
  }>
}>()

const statsRef = ref(null)

onMounted(() => {
  const observer = createScrollObserver((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-count')
    }
  })

  if (statsRef.value) observer.observe(statsRef.value)
})
</script>

<template>
  <section ref="statsRef" class="py-20 bg-white dark:bg-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div
          v-for="(stat, index) in stats"
          :key="index"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: index * 200 } }"
          class="text-center"
        >
          <div class="text-4xl font-bold text-primary dark:text-white mb-2">
            {{ stat.number }}
          </div>
          <div class="text-gray-600 dark:text-gray-300">{{ stat.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.animate-count {
  animation: countUp 2s ease-out forwards;
}

@keyframes countUp {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>