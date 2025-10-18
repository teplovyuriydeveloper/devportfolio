<template>
  <header class="bg-white/80 backdrop-blur-md shadow-sm fixed top-0 left-0 w-full z-50">
    <nav class="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
      <!-- Логотип -->
      <NuxtLink to="/" class="text-2xl font-bold text-gray-800 hover:text-gray-900 transition">
        DevPortfolio
      </NuxtLink>

      <!-- Навигация -->
      <ul class="hidden md:flex space-x-8 text-gray-600 font-medium">
        <li><NuxtLink to="/" class="hover:text-gray-900 transition">Home</NuxtLink></li>
        <li><NuxtLink to="/projects" class="hover:text-gray-900 transition">Projects</NuxtLink></li>
        <li><NuxtLink to="/about" class="hover:text-gray-900 transition">About</NuxtLink></li>
        <li><NuxtLink to="/contact" class="hover:text-gray-900 transition">Contact</NuxtLink></li>
      </ul>

      <!-- Кнопка-бургер для мобильных -->
      <button @click="menuOpen = !menuOpen" class="md:hidden text-gray-700 focus:outline-none">
        <svg v-if="!menuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
             viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
             viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
    </nav>

    <!-- Мобильное меню -->
    <transition name="fade">
      <div v-if="menuOpen" class="md:hidden bg-white shadow-md">
        <ul class="flex flex-col items-center py-4 space-y-4 text-gray-700 font-medium">
          <li><NuxtLink to="/" @click="menuOpen=false">Home</NuxtLink></li>
          <li><NuxtLink to="/projects" @click="menuOpen=false">Projects</NuxtLink></li>
          <li><NuxtLink to="/about" @click="menuOpen=false">About</NuxtLink></li>
          <li><NuxtLink to="/contact" @click="menuOpen=false">Contact</NuxtLink></li>
        </ul>
      </div>
    </transition>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const menuOpen = ref(false)
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
