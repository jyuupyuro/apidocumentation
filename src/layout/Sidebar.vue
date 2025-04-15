<template>
  <div class="border-end p-3 sidebar__container h-100">
    <h5 class="mb-4">API Docs</h5>
    <b-list-group flush>
      <router-link v-for="api in apiDocs" :key="api.id" :to="{ name: 'Docs', query: { endpoint: api.id } }"
        class="list-group-item list-group-item-action" :class="{ active: api.id === $route.query.endpoint }">
        <span class="text-uppercase small text-muted me-2">{{ api.method }}</span>
        <span>{{ api.path }}</span>
      </router-link>
    </b-list-group>
    <b-button variant="outline-danger" size="sm" class="mt-4 w-100" @click="logoutUser">
      Logout
    </b-button>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router';
import { apiDocs } from '@/api/docs';
import { logout } from '@/store/auth';

const router = useRouter();
const route = useRoute();

const logoutUser = () => {
  logout();
  router.push('/login');
};
</script>