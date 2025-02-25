<script setup lang="ts">
import { ref } from 'vue'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { ChevronUpIcon } from '@heroicons/vue/24/outline'
import { slideTransition } from '@/utils/animations'

const faqs = [
  {
    question: "Quels sont vos domaines d'expertise principaux ?",
    answer: "Nous sommes spécialisés dans le developement, le conseil dans le domaine, le conseil de deploiment et le conseil testing. Notre équipe d'experts couvre tous les aspects essentiels de la gestion d'entreprise."
  },
  {
    question: "Comment se déroule une mission de developpement ?",
    answer: "Nous sommes spécialisés dans le developement, le conseil dans le domaine, le conseil de deploiment et le conseil testing. Notre équipe d'experts couvre tous les aspects essentiels de la gestion d'entreprise."
  },
  {
    question: "Quels types d'entreprises accompagnez-vous ?",
    answer: "Nous sommes spécialisés dans le developement, le conseil dans le domaine, le conseil de deploiment et le conseil testing. Notre équipe d'experts couvre tous les aspects essentiels de la gestion d'entreprise."
  },
  {
    question: "Quelle est votre approche en matière de confidentialité ?",
    answer: "Nous sommes spécialisés dans le developement, le conseil dans le domaine, le conseil de deploiment et le conseil testing. Notre équipe d'experts couvre tous les aspects essentiels de la gestion d'entreprise."
  },
  {
    question: "Comment démarrer une collaboration avec votre societe ?",
    answer: "Nous sommes spécialisés dans le developement, le conseil dans le domaine, le conseil de deploiment et le conseil testing. Notre équipe d'experts couvre tous les aspects essentiels de la gestion d'entreprise."
  }
]
</script>

<template>
  <div class="w-full px-4 py-16">
    <div class="mx-auto w-full max-w-3xl">
      <div class="space-y-4">
        <Disclosure v-for="(faq, index) in faqs" :key="index" v-slot="{ open }" as="div"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: index * 200 } }"
        >
          <DisclosureButton
            class="flex w-full justify-between rounded-lg bg-white dark:bg-gray-800 px-4 py-4 text-left text-sm font-medium text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus-visible:ring focus-visible:ring-primary focus-visible:ring-opacity-75"
          >
            <span>{{ faq.question }}</span>
            <ChevronUpIcon
              :class="[
                open ? 'rotate-180 transform' : '',
                'h-5 w-5 text-gray-500 transition-transform duration-300 ease-in-out'
              ]"
            />
          </DisclosureButton>
          <transition v-bind="slideTransition">
            <DisclosurePanel
              class="px-4 pt-4 pb-2 text-sm text-gray-600 dark:text-gray-300"
            >
              {{ faq.answer }}
            </DisclosurePanel>
          </transition>
        </Disclosure>
      </div>
    </div>
  </div>
</template>