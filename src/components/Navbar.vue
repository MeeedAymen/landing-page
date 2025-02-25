<script setup lang="ts">
import { ref } from 'vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import ThemeToggle from './ThemeToggle.vue'

const isOpen = ref(false)

const navItems = [
  { name: 'Accueil', path: '/' },
  { name: 'À propos', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Carrières', path: '/careers' },
  { name: 'Contact', path: '/contact' },
]
</script>

<template>
  <nav class="bg-white dark:bg-gray-900 shadow-lg fixed w-full z-50 border-b dark:border-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <div class="flex-shrink-0 flex items-center">
            <router-link to="/" class="flex items-center space-x-2">
              <img src="/images/logos/logo%20IBK.jpg" alt="IBK Consulting" class="h-8 w-auto" />
            </router-link>
          </div>
        </div>
        
        <!-- Desktop menu -->
        <div class="hidden sm:flex sm:items-center sm:space-x-4">
          <div class="flex items-baseline space-x-4">
            <router-link
              v-for="item in navItems"
              :key="item.name"
              :to="item.path"
              class="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-white transition-colors"
            >
              {{ item.name }}
            </router-link>
          </div>
          <ThemeToggle />
        </div>

        <!-- Mobile menu button -->
        <div class="flex items-center space-x-2 sm:hidden">
          <ThemeToggle />
          <button
            @click="isOpen = !isOpen"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-white focus:outline-none"
          >
            <Bars3Icon v-if="!isOpen" class="h-6 w-6" />
            <XMarkIcon v-else class="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div v-show="isOpen" class="sm:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <router-link
          v-for="item in navItems"
          :key="item.name"
          :to="item.path"
          class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-white transition-colors"
          @click="isOpen = false"
        >
          {{ item.name }}
        </router-link>
      </div>
    </div>
  </nav>
</template>