<template>
    <div class="code-block" v-html="highlighted" />
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { highlight } from '@/utils/codeHighlighter';
  
  const props = defineProps({
    code: String,
    lang: {
      type: String,
      default: 'javascript',
    },
  });
  
  const highlighted = ref('');
  
  onMounted(async () => {
    highlighted.value = await highlight(props.code, props.lang);
  });
  </script>