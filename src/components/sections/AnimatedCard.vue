<script setup lang="ts">
import { useMotion } from '@vueuse/motion'

defineProps<{
  delay?: number
  direction?: 'left' | 'right' | 'up'
  class?: string
}>()

const getInitialAnimation = (direction: string = 'up') => {
  switch (direction) {
    case 'left':
      return { opacity: 0, x: -100 }
    case 'right':
      return { opacity: 0, x: 100 }
    default:
      return { opacity: 0, y: 50 }
  }
}

const getFinalAnimation = (direction: string = 'up') => {
  switch (direction) {
    case 'left':
    case 'right':
      return { opacity: 1, x: 0 }
    default:
      return { opacity: 1, y: 0 }
  }
}
</script>

<template>
  <div
    v-motion
    :initial="getInitialAnimation(direction)"
    :enter="{
      ...getFinalAnimation(direction),
      transition: { delay: delay || 0 }
    }"
    :class="['transition-all duration-300', class]"
  >
    <slot></slot>
  </div>
</template>