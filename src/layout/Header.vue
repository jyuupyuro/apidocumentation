<template>
    <header class="d-flex justify-content-between align-items-center px-4 py-3 bg-white border-bottom ">
      <h4 class="m-0">📘 API Documentation</h4>
      <b-button size="sm" variant="outline-danger" @click="handleLogout">
        Logout
      </b-button>
    </header>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router';
  import { logout as clearSession } from '@/store/auth'; // rename to avoid conflict
  
  const router = useRouter();
  
  const handleLogout = () => {
    clearSession();         // remove token
    router.push('/login');  // redirect
  };
  </script>
  