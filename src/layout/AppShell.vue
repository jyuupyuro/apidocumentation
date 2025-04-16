<template>
  <div class="apidoucmentation d-flex flex-column">
    <!-- Header -->
    <Header />

    <!-- Main Content Area -->
    <div class="custom-container appshell">
      <b-row class="full-height-row">
        <!-- Sidebar -->
        <b-col v-if="route.name !== 'UI-kit'" md="3">
          <Sidebar class="d-none d-md-block" />
        </b-col>

        <!-- Main Content -->
        <b-col :md="route.name === 'UI-kit' ? 12 : 9">
          <slot />
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import Sidebar from './Sidebar.vue';
import Header from './Header.vue';

const route = useRoute();
</script>
