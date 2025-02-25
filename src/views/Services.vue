<script setup lang="ts">
import { useMotion } from '@vueuse/motion'
</script>

<template>
  <div class="pt-16">
    <section class="py-20 bg-gray-50 dark:bg-gray-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">Nos Services</h1>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            v-motion
            :initial="{ opacity: 0, x: -100 }"
            :enter="{ opacity: 1, x: 0 }"
            class="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg"
          >
            <h2 class="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">developement</h2>
            <ul class="space-y-3 text-gray-600 dark:text-gray-300">
              <li>Societe technique</li>
              <li>developpement informatique</li>
              <li>software engineer</li>
              <li>Societe technique </li>
            </ul>
          </div>
          
          <div
            v-motion
            :initial="{ opacity: 0, x: 100 }"
            :enter="{ opacity: 1, x: 0 }"
            class="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg"
          >
            <h2 class="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Conseil dans le developement</h2>
            <ul class="space-y-3 text-gray-600 dark:text-gray-300">
              <li>Societe technique</li>
              <li>developpement informatique</li>
              <li>software engineer</li>
              <li>Societe technique </li>
            </ul>
          </div>
          
          <div
            v-motion
            :initial="{ opacity: 0, x: -100 }"
            :enter="{ opacity: 1, x: 0 }"
            class="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg"
          >
            <h2 class="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Conseil </h2>
            <ul class="space-y-3 text-gray-600 dark:text-gray-300">
              <li>Societe technique</li>
              <li>developpement informatique</li>
              <li>software engineer</li>
              <li>Societe technique </li>
            </ul>
          </div>
          
          <div
            v-motion
            :initial="{ opacity: 0, x: 100 }"
            :enter="{ opacity: 1, x: 0 }"
            class="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg"
          >
            <h2 class="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Conseil Organisationnel</h2>
            <ul class="space-y-3 text-gray-600 dark:text-gray-300">
              <li>Societe technique</li>
              <li>developpement informatique</li>
              <li>software engineer</li>
              <li>Societe technique </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>