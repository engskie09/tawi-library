<template>
    <table class="table">
        <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Description</th>
                <th scope="col">Authors</th>
                <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">1</th>
                <td>name</td>
                <td>desc</td>
                <td>author</td>
                <td>
                    <button type="button" class="btn btn-info">View</button>
                    <button type="button" class="btn btn-danger">Delete</button>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'LibraryTableComponent',
});
</script>

<style scoped lang="scss">
button {
    min-width: 80px;
    margin: 2px;
}
</style>
