<template>
    <button class="btn" :class="`btn-${variant}`, `btn-${size}`" @click="$emit('click', $event)">
        <slot />
    </button>
</template>

<script setup>
defineProps({
    variant: {
        type: String,
        default: 'primary', // primary, secondary, success, alert
    },
    size: {
        type: String,
        default: 'md', // sm, md, lg
    }
});

defineEmits(['click']);
</script>