<template>
    <div class="d-flex" style="min-height: 100vh">
      <!-- Sidebar -->
      <Sidebar />
  
      <!-- Main content area -->
      <div class="flex-grow-1 p-4">
        <slot /> <!-- or router-view if you're not nesting -->
      </div>
    </div>
  </template>
  
  <script setup>
  import Sidebar from './Sidebar.vue';
  </script>
  