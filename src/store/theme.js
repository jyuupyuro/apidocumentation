import { ref } from 'vue';

export const isDark = ref(false);
export const themeReady = ref(false);

// initialize from localStorage
const savedTheme = localStorage.getItem('theme');
isDark.value = savedTheme === 'dark';
themeReady.value = true; // ✅ mark ready
