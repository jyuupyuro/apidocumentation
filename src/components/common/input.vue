<template>
    <div class="app-input">
      <label v-if="label" class="input-label">{{ label }}</label>
      <input
        v-bind="$attrs"
        :type="type"
        class="input-field"
        :placeholder="placeholder"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
      />
    </div>
  </template>
  
  <script setup>
  defineProps({
    modelValue: String,
    label: String,
    type: {
      type: String,
      default: 'text'
    },
    placeholder: String
  });
  defineEmits(['update:modelValue']);
  </script>
  
  <style scoped lang="scss">
  .app-input {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }
  
  .input-label {
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--text-color);
  }
  
  .input-field {
    padding: 0.5rem 1rem;
    border-radius: 10px;
    border: 1px solid var(--border-color);
    background-color: var(--card-bg);
    color: var(--text-color);
    transition: border-color 0.3s ease, background-color 0.3s ease;
  
    &:focus {
      outline: none;
      border-color: var(--btn-primary);
      box-shadow: 0 0 0 2px rgba(122, 77, 252, 0.2);
    }
  }
  </style>
  