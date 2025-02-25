<script setup lang="ts">
import { useMotion } from '@vueuse/motion'
import HeroSection from '@/components/sections/HeroSection.vue'
import JobCard from '@/components/careers/JobCard.vue'
import BenefitCard from '@/components/careers/BenefitCard.vue'
import { fadeInUp } from '@/utils/animations'

const positions = [
  {
    title: 'developpeur Senior',
    department: 'developement',
    location: 'Agadir',
    type: 'Temps plein',
    description: 'Nous sommes spécialisés dans le developement, le conseil dans le domaine.',
    requirements: [
      'Minimum 5 ans d\'expérience en audit',
      'Expertise en normes IFRS',
      'Excellentes capacités d\'analyse'
    ]
  },
  {
    title: 'Consultant developement',
    department: 'Conseil',
    location: 'Agadir',
    type: 'Temps plein',
    description: 'ONous sommes spécialisés dans le developement, le conseil dans le domaine,',
    requirements: [
      'Expérience en fiscalité marocaine',
      'Maîtrise du developement',
      'Capacité à gérer plusieurs dossiers'
    ]
  },
  {
    title: 'Juriste d\'entreprise',
    department: 'Conseil Juridique',
    location: 'Agadir',
    type: 'Temps plein',
    description: 'Nous sommes spécialisés dans le developement, le conseil dans le domaine,',
    requirements: [
      'Formation en droit des affaires',
      'Expérience en conseil',
      'Excellentes capacités rédactionnelles'
    ]
  }
]

const benefits = [
  {
    title: 'Développement professionnel',
    description: 'Formation continue et opportunités d\'évolution',
    icon: '🎓'
  },
  {
    title: 'Environnement stimulant',
    description: 'Culture d\'entreprise dynamique et collaborative',
    icon: '🌟'
  },
  {
    title: 'Projets innovants',
    description: 'Participation à des projets variés et challengeants',
    icon: '💡'
  }
]
</script>

<template>
  <div class="pt-16">
    <HeroSection
        title="Carrières chez notre entreprise"
        subtitle="Rejoignez une équipe dynamique et participez à des projets stimulants"
        background="gradient"
    />

    <!-- Open Positions -->
    <section class="py-20 bg-gray-50 dark:bg-gray-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
            v-motion
            v-bind="fadeInUp"
            class="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          Postes Ouverts
        </h2>
        <div class="grid gap-8">
          <JobCard
              v-for="(position, index) in positions"
              :key="index"
              :position="position"
              :index="index"
          />
        </div>
      </div>
    </section>

    <!-- Why Join Us -->
    <section class="py-20 bg-white dark:bg-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
            v-motion
            v-bind="fadeInUp"
            class="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          Pourquoi nous rejoindre ?
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <BenefitCard
              v-for="(benefit, index) in benefits"
              :key="index"
              :benefit="benefit"
              :index="index"
          />
        </div>
      </div>
    </section>
  </div>
</template>