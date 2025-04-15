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
    <div class="d-flex flex-column gap-4 mt-4">
      <Button variant="alert" size="sm" @click="logoutUser">
        Logout
      </Button>
      <Button size="md" variant="primary">
        Primary Button
      </Button>
      <Button size="md" variant="secondary">
        Seconday Button
      </Button>
      <Button size="md" variant="success">
        Success Button
      </Button>
    </div>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router';
import { apiDocs } from '@/api/docs';
import { logout } from '@/store/auth';
import Button from '@/components/common/button.vue';

const router = useRouter();
const route = useRoute();

const logoutUser = () => {
  logout();
  router.push('/login');
};
</script>