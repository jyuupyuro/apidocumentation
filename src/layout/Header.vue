<template>
  <header class="d-flex justify-content-between align-items-center px-4 py-3 header__container header__border">
    <router-link to="/docs" class="text-decoration-none text-reset">
      <h4 class="m-0">API Documentation</h4>
    </router-link>
    <Input v-model="search" inputClass="header__form" placeholder="Search Here">
    <template #icon>
      <i class="fas fa-search" data-icon-left></i>
    </template>
    </Input>
    <div class="d-flex gap-3">
      <b-form-checkbox v-model="isDark" switch>
        {{ isDark ? '🌙' : '🌞' }}
      </b-form-checkbox>
      <Button size="sm" variant="alert" @click="handleLogout">
        Logout
      </Button>
    </div>
  </header>
  <div class="theme-transition-circle" ref="circleRef"></div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { logout as clearSession } from '@/store/auth';
import { ref, watch, onMounted } from 'vue';
import Input from '../components/common/Input.vue';
import Button from '../components/common/Button.vue';

const router = useRouter();
const isDark = ref(false);
const circleRef = ref(null);

// Watch the toggle and update <body> + localStorage
watch(isDark, (val) => {
  document.body.classList.remove('light', 'dark');
  document.body.classList.add(val ? 'dark' : 'light');
  localStorage.setItem('theme', val ? 'dark' : 'light');
});

// On initial load, read the theme and apply it
onMounted(() => {
  const savedTheme = localStorage.getItem('theme');
  const isDarkMode = savedTheme === 'dark';
  isDark.value = isDarkMode;

  document.body.classList.remove('light', 'dark');
  document.body.classList.add(isDarkMode ? 'dark' : 'light');
});

// Logout function
const handleLogout = () => {
  clearSession();
  router.push('/login');
};
</script>