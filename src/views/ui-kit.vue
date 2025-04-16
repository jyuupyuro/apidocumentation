<template>
    <div class="ui container py-4">
        <h2 class="mb-4">UI Components Showcase</h2>

        <section class="mb-5 ui">
            <h5>Buttons</h5>
            <div class="d-flex gap-3 flex-wrap justify-content-center">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="success">Success</Button>
                <Button variant="alert">Alert</Button>
            </div>
        </section>

        <section class="mb-5 ui">
            <h5>Typography</h5>
            <p class="display-6">Display Heading</p>
            <p class="h1">Heading 1</p>
            <p class="h2">Heading 2</p>
            <p class="lead">This is lead text</p>
            <p>This is normal paragraph text.</p>
        </section>
    </div>
</template>

<script setup>
import Button from '@/components/common/button.vue';
</script>
