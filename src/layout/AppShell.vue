<template>
  <div class="d-flex flex-column" style="height: 100vh">
    <!-- Header -->
    <Header />
    <!-- Main Content Area -->
    <b-container class="appshell">
      <b-row class="h-100">
        <!-- Sidebar -->
        <b-col md="3">
          <Sidebar />
        </b-col>
        <!-- Main Content -->
        <b-col md="9">
          <slot /> <!-- or router-view if you're not nesting -->
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script setup>
import Sidebar from './Sidebar.vue';
import Header from './Header.vue';
</script>