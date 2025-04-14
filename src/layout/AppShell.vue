<template>
  <b-container style="min-height: 100vh">
    <!-- Sidebar -->
    <b-row>
      <b-col md="4">
        <Sidebar />
      </b-col>
      <b-col md="8">
        <slot /> <!-- or router-view if you're not nesting -->
      </b-col>
    </b-row>
  </b-container>
</template>

<script setup>
import Sidebar from './Sidebar.vue';
</script>