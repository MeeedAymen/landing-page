<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { createScrollObserver } from '@/utils/animations'

const props = defineProps<{
  class?: string
}>()

const sectionRef = ref(null)

onMounted(() => {
  const observer = createScrollObserver((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-scroll')
    }
  })

  if (sectionRef.value) observer.observe(sectionRef.value)
})
</script>

<template>
  <section 
    ref="sectionRef" 
    :class="['overflow-hidden transition-all duration-500 ease-out', props.class]"
  >
    <slot></slot>
  </section>
</template>

<style scoped>
.animate-scroll {
  animation: slideIn 1s ease-out forwards;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>