<template>
  <b-container class="mt-5 d-flex justify-content-center">
    <b-card title="Login" class="p-4" style="max-width: 400px; width: 100%;">
      <b-form @submit.prevent="handleLogin">
        <b-form-group label="Email" label-for="email">
          <b-form-input id="email" v-model="email" type="email" placeholder="Enter email" required />
        </b-form-group>

        <b-form-group label="Password" label-for="password">
          <b-form-input id="password" v-model="password" type="password" placeholder="Enter password" required />
        </b-form-group>

        <b-button type="submit" variant="primary" block>Login</b-button>
      </b-form>
    </b-card>
  </b-container>
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