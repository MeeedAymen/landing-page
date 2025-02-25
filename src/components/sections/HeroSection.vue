<script setup lang="ts">
import { useMotion } from '@vueuse/motion'
import { fadeInUp } from '@/utils/animations'

defineProps<{
  title: string
  subtitle: string
  background?: 'gradient' | 'video'
  gradientColors?: {
    from: string
    to: string
  }
}>()
</script>

<template>
  <section 
    :class="[
      'relative min-h-[60vh] flex items-center justify-center',
      background === 'gradient' ? 'bg-gradient-to-r from-primary to-secondary' : 'bg-primary'
    ]"
  >
    <template v-if="background === 'video'">
      <video
        class="absolute inset-0 w-full h-full object-cover"
        autoplay
        loop
        muted
        playsinline
      >
        <source src="/videos/hero-background.mp4" type="video/mp4">
      </video>
      <div class="absolute inset-0 bg-black bg-opacity-60"></div>
    </template>
    
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
      <h1
        v-motion
        v-bind="fadeInUp"
        class="text-4xl md:text-6xl font-bold text-white mb-6"
      >
        {{ title }}
      </h1>
      <p
        v-motion
        v-bind="{
          ...fadeInUp,
          enter: { ...fadeInUp.enter, transition: { delay: 200 } }
        }"
        class="text-xl text-white/90 max-w-3xl mx-auto mb-8"
      >
        {{ subtitle }}
      </p>
      <slot></slot>
    </div>
  </section>
</template>