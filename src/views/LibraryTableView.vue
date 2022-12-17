<template><LibraryFormComponent /> <LibraryTableComponent /></template>

<script lang="ts">
import { defineComponent } from 'vue';
import LibraryTableComponent from '@/components/LibraryTableComponent.vue';

export default defineComponent({
    name: 'LibraryView',
    components: {
        LibraryTableComponent,
    },
});
</script>

<style scoped lang="scss"></style>
