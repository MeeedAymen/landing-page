<script setup lang="ts">
import { useMotion } from '@vueuse/motion'
import HeroSection from '@/components/sections/HeroSection.vue'
import StatsSection from '@/components/sections/StatsSection.vue'
import { fadeInLeft, fadeInRight } from '@/utils/animations'

const stats = [
  { number: '15+', label: "Années d'expérience" },
  { number: '500+', label: 'Clients satisfaits' },
  { number: '50+', label: 'Experts' },
  { number: '1000+', label: 'Projets réussis' }
]
</script>

<template>
  <div class="pt-16">
    <HeroSection
      title="À Propos d'IBK Consulting"
      subtitle="Leader dans le conseil et l'audit, nous accompagnons nos clients vers l'excellence depuis plus de 15 ans."
      background="gradient"
    />

    <StatsSection :stats="stats" />

    <!-- Mission Section -->
    <section class="py-20 bg-gray-50 dark:bg-gray-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div
            v-motion
            v-bind="fadeInLeft"
          >
            <h2 class="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Notre Mission</h2>
            <p class="text-gray-600 dark:text-gray-300 mb-6">
              Notre mission est d'accompagner nos clients dans leur développement en leur fournissant des solutions sur mesure et innovantes. Nous nous engageons à maintenir les plus hauts standards de qualité et d'éthique professionnelle.
            </p>
            <ul class="space-y-4">
              <li class="flex items-center text-gray-600 dark:text-gray-300">
                <span class="h-2 w-2 bg-primary rounded-full mr-3"></span>
                Excellence professionnelle
              </li>
              <li class="flex items-center text-gray-600 dark:text-gray-300">
                <span class="h-2 w-2 bg-primary rounded-full mr-3"></span>
                Innovation continue
              </li>
              <li class="flex items-center text-gray-600 dark:text-gray-300">
                <span class="h-2 w-2 bg-primary rounded-full mr-3"></span>
                Engagement client
              </li>
            </ul>
          </div>
          <div
            v-motion
            v-bind="fadeInRight"
            class="relative h-96"
          >
            <img
              src="/images/mission.jpg"
              alt="Notre mission"
              class="absolute inset-0 w-full h-full object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>