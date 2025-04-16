<template>
    <div class="input-wrapper">
        <!-- Optional icon -->
        <div class="input-icon">
            <slot name="icon" />
        </div>

        <!-- Select Input -->
        <b-form-select v-if="type == 'select'" :value="modelValue" @change="$emit('update:modelValue', $event)"
            :options="options" :class="['custom-input', inputClass]" />

        <!-- Input -->
        <b-form-input v-else :value="modelValue" @input="$emit('update:modelValue', $event)"
            :placeholder="placeholder" :class="['custom-input', inputClass]" />
    </div>
</template>


<script setup>
defineProps({
    modelValue: [String, Number],
    type: {
        type: String,
        default: 'text' // can also be 'select'
    },
    placeholder: String,
    options: {
        type: Array,
        default: () => []
    },
    inputClass: {
        type: [String, Array, Object],
        default: ''
    }
});

defineEmits(['update:modelValue']);
</script>