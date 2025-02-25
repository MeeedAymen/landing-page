<script setup lang="ts">
import { MapPinIcon, PhoneIcon, EnvelopeIcon, GlobeAltIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <footer class="bg-white dark:bg-gray-900 border-t dark:border-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Logo and Description -->
        <div>
          <div class="flex items-center mb-4">
            <img src="/images/logos/logo%20IBK.jpg" alt="IBK Consulting" class="h-12 w-auto" />
          </div>
          <p class="text-gray-600 dark:text-gray-400">
            Cabinet d'Audit et Conseil Fiscal, Juridique et Organisationnel
          </p>
        </div>

        <!-- Contact Info -->
        <div>
          <h3 class="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Contact</h3>
          <div class="space-y-3">
            <div class="flex items-start">
              <MapPinIcon class="h-6 w-6 text-primary mr-2 flex-shrink-0" />
              <p class="text-gray-600 dark:text-gray-400">
                Av. Al Mouqawama Immeuble Yassmine, Bloc A Etage 6 Bureau 67
              </p>
            </div>
            <div class="flex items-center">
              <PhoneIcon class="h-5 w-5 text-primary mr-2" />
              <p class="text-gray-600 dark:text-gray-400">+212 (0) 528 220 279</p>
            </div>
            <div class="flex items-center">
              <EnvelopeIcon class="h-5 w-5 text-primary mr-2" />
              <p class="text-gray-600 dark:text-gray-400">Contact@ibk.ma</p>
            </div>
            <div class="flex items-center">
              <GlobeAltIcon class="h-5 w-5 text-primary mr-2" />
              <p class="text-gray-600 dark:text-gray-400">www.ibk.ma</p>
            </div>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Liens Rapides</h3>
          <div class="space-y-2">
            <router-link
              v-for="item in ['Accueil', 'Services', 'Contact']"
              :key="item"
              :to="item === 'Accueil' ? '/' : `/${item.toLowerCase()}`"
              class="block text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-accent transition-colors"
            >
              {{ item }}
            </router-link>
          </div>
        </div>
      </div>

      <div class="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <p class="text-gray-600 dark:text-gray-400">
            © {{ new Date().getFullYear() }} IBK Consulting. Tous droits réservés.
          </p>
          <p class="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
            Coded by IBK developer
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>