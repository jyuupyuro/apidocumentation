<template>
    <header class="d-flex justify-content-between align-items-center px-4 py-3 header__container border-bottom ">
        <h4 class="m-0">📘 API Documentation</h4>
        <div class="d-flex gap-3">
            <b-form-checkbox v-model="isDark"  switch>
                {{ isDark ? 'Dark' : 'Light' }}
            </b-form-checkbox>
            <b-button size="sm" variant="outline-danger" @click="handleLogout">
                Logout
            </b-button>
        </div>
    </header>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { logout as clearSession } from '@/store/auth';
import { ref, watch, onMounted } from 'vue';

const router = useRouter();
const isDark = ref(false);

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