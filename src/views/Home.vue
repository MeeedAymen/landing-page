<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useMotion } from '@vueuse/motion'
import ServiceCard from '../components/ServiceCard.vue'
import TestimonialCard from '../components/TestimonialCard.vue'
import FAQ from '../components/FAQ.vue'

const services = [
  {
    title: 'Audit',
    description: 'Services d\'audit financier, comptable et organisationnel pour optimiser vos performances.',
    icon: '/images/icons/audit.svg',
    delay: 0
  },
  {
    title: 'Conseil Fiscal',
    description: 'Expertise en optimisation fiscale et accompagnement dans vos obligations fiscales.',
    icon: '/images/icons/tax.svg',
    delay: 200
  },
  {
    title: 'Conseil Juridique',
    description: 'Assistance juridique complète pour sécuriser vos activités professionnelles.',
    icon: '/images/icons/legal.svg',
    delay: 400
  }
]

const testimonials = [
  {
    name: 'Sarah Martin',
    role: 'Directrice Financière',
    content: 'IBK Consulting nous a fourni un service exceptionnel. Leur expertise en audit a permis d\'identifier des opportunités d\'amélioration significatives.',
    image: '/images/testimonials/person1.jpg',
    delay: 0
  },
  {
    name: 'Thomas Laurent',
    role: 'CEO',
    content: 'Une équipe professionnelle et réactive. Leur accompagnement en matière fiscale a été déterminant pour notre développement.',
    image: '/images/testimonials/person2.jpg',
    delay: 200
  },
  {
    name: 'Michel Dubois',
    role: 'Directeur Général',
    content: 'Excellent cabinet de conseil. Leur approche personnalisée et leur expertise ont fait une réelle différence pour notre entreprise.',
    image: '/images/testimonials/person3.jpg',
    delay: 400
  }
]

const servicesRef = ref(null)
const testimonialsRef = ref(null)

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-scroll')
        }
      })
    },
    { threshold: 0.1 }
  )

  if (servicesRef.value) observer.observe(servicesRef.value)
  if (testimonialsRef.value) observer.observe(testimonialsRef.value)
})
</script>

<template>
  <div class="pt-16">
    <!-- Hero Section -->
    <section class="relative h-screen flex items-center">
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
      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :enter="{ opacity: 1, y: 0 }"
          class="text-4xl md:text-6xl font-bold text-white mb-6"
        >
          IBK Consulting
        </h1>
        <p
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 200 } }"
          class="text-xl md:text-2xl text-white mb-8"
        >
          Cabinet d'Audit et Conseil Fiscal, Juridique et Organisationnel
        </p>
        <router-link
          to="/contact"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 400 } }"
          class="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-colors"
        >
          Contactez-nous
        </router-link>
      </div>
    </section>

    <!-- Services Section -->
    <section ref="servicesRef" class="py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :enter="{ opacity: 1, y: 0 }"
          class="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          Nos Services
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard
            v-for="service in services"
            :key="service.title"
            v-bind="service"
          />
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section ref="testimonialsRef" class="py-20 bg-white dark:bg-gray-800 overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :enter="{ opacity: 1, y: 0 }"
          class="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          Témoignages Clients
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TestimonialCard
            v-for="testimonial in testimonials"
            :key="testimonial.name"
            v-bind="testimonial"
          />
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-20 bg-gray-50 dark:bg-gray-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :enter="{ opacity: 1, y: 0 }"
          class="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          Questions Fréquentes
        </h2>
        <FAQ />
      </div>
    </section>
  </div>
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