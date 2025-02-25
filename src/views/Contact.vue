<script setup lang="ts">
import { useMotion } from '@vueuse/motion'
</script>

<template>
  <div class="pt-16">
    <section class="py-20 bg-gray-50 dark:bg-gray-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div
            v-motion
            :initial="{ opacity: 0, x: -100 }"
            :enter="{ opacity: 1, x: 0 }"
            class="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg"
          >
            <h1 class="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Contactez-nous</h1>
            <div class="space-y-6">
              <div>
                <h2 class="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Notre adresse</h2>
                <p class="text-gray-600 dark:text-gray-300">
                  Societe technique de developpement <br>
                  informatique et de reseaux
                </p>
              </div>
              
              <div>
                <h2 class="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Téléphone</h2>
                <p class="text-gray-600 dark:text-gray-300">+212 (0) 000 000 000</p>
              </div>
              
              <div>
                <h2 class="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Email</h2>
                <p class="text-gray-600 dark:text-gray-300">test@test.com</p>
              </div>
              
              <div>
                <h2 class="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Site web</h2>
                <p class="text-gray-600 dark:text-gray-300">www.test.ma</p>
              </div>
            </div>
          </div>
          
          <div
            v-motion
            :initial="{ opacity: 0, x: 100 }"
            :enter="{ opacity: 1, x: 0 }"
            class="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg"
          >
            <h2 class="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Envoyez-nous un message</h2>
            <form class="space-y-6">
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Nom complet</label>
                <input
                  type="text"
                  class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-primary focus:border-primary bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
              
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-primary focus:border-primary bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
              
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Téléphone</label>
                <input
                  type="tel"
                  class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-primary focus:border-primary bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                <textarea
                  rows="4"
                  class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-primary focus:border-primary bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                ></textarea>
              </div>
              
              <button
                type="submit"
                class="w-full bg-primary text-white py-3 px-6 rounded-md hover:bg-opacity-90 transition-colors"
              >
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>