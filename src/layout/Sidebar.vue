<template>
  <div class="p-3 sidenav__container h-100">
    <h5 class="mb-4">API Documentation</h5>
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
      <li v-for="(item, idx) in section.items" :key="idx" class="py-1 list-group-item border-0 px-2 text-start"
        style="cursor: pointer;">
        {{ item }}
      </li>
      </li>
    </div>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router';
import { apiDocs } from '@/api/docs';
import { logout } from '@/store/auth';
import Button from '@/components/common/button.vue';
import { ref } from 'vue';

const router = useRouter();
const route = useRoute();
const menuData = ref([
  {
    title: 'Components',
    items: ['Modal', 'Table', 'Button']
  },
  {
    title: 'Utilities',
    items: ['Color', 'Spacing', 'Typography']
  },
  {
    title: 'Layouts',
    items: ['Grid', 'Container', 'Header']
  }
]);

const logoutUser = () => {
  logout();
  router.push('/login');
};
</script>