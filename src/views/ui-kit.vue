<template>
    <div class="ui container py-4">
        <h2 class="mb-4">UI Components Showcase</h2>

        <section class="mb-5 ui">
            <h5>Typography</h5>
            <p class="display-6">Display Heading</p>
            <p class="h1">Heading 1</p>
            <p class="h2">Heading 2</p>
            <p class="lead">This is lead text</p>
            <p>This is normal paragraph text.</p>
        </section>

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
            <h5>Form Elements</h5>
            <div class="d-flex gap-3 flex-wrap justify-content-center">
                <div>
                    <Input v-model="email" placeholder="Email address">
                    <template #icon>
                        <i class="fas fa-envelope" data-icon-left></i>
                    </template>
                    </Input>
                </div>
                <div>
                    <Input v-model="testing" type="select"
                        :options="[{ value: '', text: 'Select an option' }, { value: '', text: 'Another option' }]" />
                </div>
            </div>
        </section>

        <section class="mb-5 ui">
            <h5>CodeBlock</h5>
            <div class="d-flex gap-3 flex-wrap justify-content-center">
                <CodeBlock lang="javascript" :code="`const greet = (name) => console.log('Hello, ' + name);`" />
            </div>
        </section>

        <section class="mb-5 ui">
            <h5>Table UI</h5>
            <b-table :items="tableDemo" :bordered=true :striped=true :dark=isDark></b-table>
        </section>

        <section class="mb-5 ui">
            <h5>Tab UI</h5>
            <div class="nav__container border">
                <b-tabs content-class="mt-3">
                    <b-tab title="First">
                        <p>I'm the first tab</p>
                    </b-tab>
                    <b-tab title="Second">
                        <p>I'm the second tab</p>
                    </b-tab>
                </b-tabs>
            </div>
        </section>
    </div>
</template>

<script setup>
import Button from '@/components/common/Button.vue';
import Input from '@/components/common/Input.vue';
import CodeBlock from '../components/common/CodeBlock.vue';
import { isDark } from '@/store/theme';

const tableDemo = [
    { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
    { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
    { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
    { age: 38, first_name: 'Jami', last_name: 'Carney' }
]
</script>
