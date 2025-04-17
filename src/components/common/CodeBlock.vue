<template>
    <div class="code-block-wrapper">
      <button class="copy-btn" @click="copyToClipboard">Copy</button>
      <div class="code-block" v-html="highlighted"></div>
    </div>
  </template>
  
  <script setup>
  import { ref, watch, computed } from 'vue';
  import { highlight } from '@/utils/codeHighlighter';
  import { isDark } from '@/store/theme';
  
  const props = defineProps({
    code: { type: String, required: true },
    lang: { type: String, default: 'javascript' }
  });
  
  const highlighted = ref('');
  
  const theme = computed(() => isDark.value ? 'one-dark-pro' : 'plastic');
  
  const render = async () => {
    highlighted.value = ''; // 🔄 clear before regenerating
    highlighted.value = await highlight(props.code, props.lang, theme.value);
  };
  
  // ✅ Watch both props.code and theme
  watch([() => props.code, theme], render, { immediate: true });
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(props.code);
  };
  </script>
  