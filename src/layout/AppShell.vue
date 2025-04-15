<template>
  <div class="apidoucmentation d-flex flex-column" style="height: 100vh">
    <!-- Header -->
    <Header />
    <!-- Main Content Area -->
    <div class="custom-container appshell">
      <b-row class="h-100">
        <!-- Sidebar -->
        <b-col md="3">
          <Sidebar class="d-none d-md-block" />
        </b-col>
        <!-- Main Content -->
        <b-col md="9">
          <slot /> <!-- or router-view if you're not nesting -->
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script setup>
import Sidebar from './Sidebar.vue';
import Header from './Header.vue';
</script>