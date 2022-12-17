<template><LibraryFormComponent /> <LibraryTableComponent /></template>

<script lang="ts">
import { defineComponent } from 'vue';
import LibraryFormComponent from '@/components/LibraryFormComponent.vue';
import LibraryTableComponent from '@/components/LibraryTableComponent.vue';

export default defineComponent({
    name: 'LibraryView',
    components: {
        LibraryFormComponent,
        LibraryTableComponent,
    },
});
</script>

<style scoped lang="scss"></style>
