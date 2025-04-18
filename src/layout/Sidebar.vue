<template>
  <div class="p-3 sidenav__container h-100">
    <h5 class="mb-4 text-start">API Documentation</h5>
    <div>
      <li class="list-group-item" v-for="(section, index) in menuData" :key="index">
        <div style="cursor: pointer;" @click="scrollTo(section.title)" class="fw-bold py-2 text-start">{{ section.title }}</div>
      <li v-for="(item, idx) in section.items" :key="idx"
        class="py-2 list-group-item border-0 px-2 text-start sidenav__submenu pe-auto"
        @click="scrollTo(item)">
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

const scrollTo = (label) => {
  const id = label
    .toLowerCase()
    .replace(/\s+/g, '-')              // spaces to dashes
    .replace(/[^\w\-]+/g, '');         // remove non-word chars

  const el = document.getElementById(id);
  console.log(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};
</script>