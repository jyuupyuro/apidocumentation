<template>
  <div class="d-flex justify-content-center align-items-center login__container" style="min-height: 100vh">
    <div title="Login" class="px-5 py-3 d-flex flex-column justify-content-start login__glass">
      <h1 class="text-start mb-4">Login</h1>
      <b-form class="d-flex flex-column gap-3" @submit.prevent="handleLogin">
        <div class="d-flex flex-column align-items-start gap-1">
          <label for="email">Username</label>
          <b-form-input class="bg-light" id="email" v-model="email" type="email" placeholder="Enter email" required />
        </div>
        <div class="d-flex flex-column align-items-start gap-1">
          <label for="password">Password</label>
          <b-form-input id="password" v-model="password" type="password" />
        </div>
        <b-button type="submit" class="login__button" variant="primary" block>Login</b-button>
      </b-form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { login } from '@/store/auth';

const email = ref('');
const password = ref('');
const router = useRouter();

const handleLogin = () => {
  if (email.value === 'admin@example.com' && password.value === '123456') {
    login('fake-token'); // sets localStorage AND updates reactive state
    router.push('/docs');
  } else {
    alert('Invalid credentials');
  }
};
</script>