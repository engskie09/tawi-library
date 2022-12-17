<template><SignUpFormComponent /></template>

<script lang="ts">
import { defineComponent } from 'vue';
import SignUpFormComponent from '@/components/SignUpFormComponent.vue';

export default defineComponent({
    name: 'LoginView',
    components: { SignUpFormComponent },
});
</script>

<style scoped lang="scss"></style>
