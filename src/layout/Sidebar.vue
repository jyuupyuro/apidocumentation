<template>
  <div class="p-3 sidenav__container h-100">
    <h5 class="mb-4 text-start">API Documentation</h5>
    <!-- <b-list-group flush>
      <router-link v-for="api in apiDocs" :key="api.id" :to="{ name: 'Docs', query: { endpoint: api.id } }"
        class="list-group-item list-group-item-action" :class="{ active: api.id === $route.query.endpoint }">
        <span class="text-uppercase small text-muted me-2">{{ api.method }}</span>
        <span>{{ api.path }}</span>
      </router-link>
    </b-list-group> -->
    <div>
      <li class="list-group-item" v-for="(section, index) in menuData" :key="index">
        <div class="fw-bold py-2 text-start">{{ section.title }}</div>
      <li v-for="(item, idx) in section.items" :key="idx" class="py-2 list-group-item border-0 px-2 text-start sidenav__submenu"
        style="cursor: pointer;">
        {{ item }}
      </li>
      </li>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const menuData = ref([
  {
    title: 'Introduction',
    items: ['']
  },
  {
    title: 'General Transactions',
    items: ['Member Promotion Transaction', 'Insert Transaction', 'Update Transaction', 'All Transaction', 'Get Sum Transaction', 'Get Sum Daily', 'Fund Method Summary', 'Fund Method Transaction', 'Get Member Sum Transactions']
  },
  {
    title: 'Payment Gateways',
    items: ['Deposit']
  },
]);
</script>