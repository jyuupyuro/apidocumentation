<template>
    <div class="input-wrapper">
        <!-- Optional icon on the left -->
        <div class="input-icon ">
            <slot name="icon" />
        </div>
        <!-- Input field -->
        <b-form-input :value="modelValue" @input="$emit('update:modelValue', $event)" :type="type"
            :placeholder="placeholder" :class="['custom-input', inputClass]" />
    </div>
</template>

<script setup>
defineProps({
  modelValue: String,
  type: {
    type: String,
    default: 'text'
  },
  placeholder: String,
  inputClass: {
    type: [String, Array, Object],
    default: ''
  }
});

defineEmits(['update:modelValue']);
</script>