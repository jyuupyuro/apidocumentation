<template>
  <AppShell v-if="isLoggedIn">
    <router-view />
  </AppShell>
  <router-view v-else />
</template>

<script setup>
import { isLoggedIn } from '@/store/auth';
import AppShell from '@/layout/AppShell.vue';
</script>
