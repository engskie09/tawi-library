<template>
    <form class="needs-validation" novalidate @submit="handleOnSubmit">
        <div class="row g-3">
            <div class="col-md-12">
                <label for="name" class="form-label">Name</label>
                <input v-model="name" type="text" class="form-control" id="name" placeholder="" required />
                <div class="invalid-feedback">name is required.</div>
            </div>

            <div class="col-md-12">
                <label for="description" class="form-label">Description</label>
                <textarea
                    v-model="description"
                    type="text"
                    class="form-control"
                    id="description"
                    placeholder=""
                    rows="3"
                    required
                ></textarea>
                <div class="invalid-feedback">description is required.</div>
            </div>

            <div class="col-md-12">
                <label for="authors" class="form-label">Authors</label>
                <input v-model="authors" type="text" class="form-control" id="authors" placeholder="" required />
                <div class="invalid-feedback">authors is required.</div>
            </div>

            <div class="col-md-12">
                <label for="dateCreated" class="form-label">Date Created</label>
                <input
                    v-model="dateCreated"
                    type="date"
                    class="form-control"
                    id="dateCreated"
                    placeholder=""
                    required
                />
                <div class="invalid-feedback">date created is required.</div>
            </div>
        </div>

        <hr class="my-4" />

        <button class="w-100 btn btn-warning btn-lg" type="submit">Save</button>
    </form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { createBook } from '@/firebase';

export default defineComponent({
    name: 'LibraryFormComponent',
    props: {
        id: String,
    },
    setup() {
        const name = ref('');
        const description = ref('');
        const authors = ref('');
        const dateCreated = ref(new Date());

        return { name, description, authors, dateCreated };
    },
    methods: {
        async handleOnSubmit(event: Event) {
            event.preventDefault();
            if (event.target) {
                const element = event.target as HTMLFormElement;
                const isValid = element.checkValidity();

                if (!isValid) {
                    event.preventDefault();
                    event.stopPropagation();
                } else {
                    await createBook({
                        name: this.name,
                        description: this.description,
                        authors: this.authors,
                        dateCreated: this.dateCreated,
                    });
                }

                element.classList.add('was-validated');
            }
        },
    },
});
</script>

<style scoped lang="scss"></style>
