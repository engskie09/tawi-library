<template><LibraryFormComponent /></template>

<script lang="ts">
import { defineComponent } from 'vue';
import LibraryFormComponent from '@/components/LibraryFormComponent.vue';

export default defineComponent({
    name: 'LibraryView',
    components: {
        LibraryFormComponent,
    },
});
</script>

<style scoped lang="scss"></style>
