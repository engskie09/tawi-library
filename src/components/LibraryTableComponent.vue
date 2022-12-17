<template>
    <table class="table">
        <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Description</th>
                <th scope="col">Authors</th>
                <th scope="col">Date Created</th>
                <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(book, index) in books" v-bind:key="index">
                <th>{{ book.id }}</th>
                <th scope="row">{{ book.name }}</th>
                <td>{{ book.description }}</td>
                <td>{{ book.authors }}</td>
                <td>{{ book.dateCreated }}</td>
                <td>
                    <button @click="handleOnClickView" type="button" class="btn btn-info">View</button>
                    <button @click="handleOnClickDelete" type="button" class="btn btn-danger">Delete</button>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { getBooks } from '@/firebase';
import { DocumentData } from '@firebase/firestore';

export default defineComponent({
    name: 'LibraryTableComponent',
    setup() {
        // const books: DocumentData[] = [];
        // return { books };
    },
    data() {
        return {
            books: [] as DocumentData[],
        };
    },
    async mounted() {
        this.books = await getBooks();
        console.log(this.books);
    },
    methods: {
        handleOnClickView: () => {
            alert('view');
        },

        handleOnClickDelete: () => {
            alert('delete');
        },
    },
});
</script>

<style scoped lang="scss">
button {
    min-width: 80px;
    margin: 2px;
}
</style>
