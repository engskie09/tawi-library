<template>
    <form class="needs-validation" novalidate @submit="handleOnSubmit">
        <div class="row g-3">
            <div class="col-md-12">
                <label for="name" class="form-label">Name</label>
                <input type="text" class="form-control" id="name" placeholder="" value="" required />
                <div class="invalid-feedback">name is required.</div>
            </div>

            <div class="col-md-12">
                <label for="description" class="form-label">Description</label>
                <textarea
                    type="text"
                    class="form-control"
                    id="description"
                    placeholder=""
                    rows="3"
                    value=""
                    required
                ></textarea>
                <div class="invalid-feedback">description is required.</div>
            </div>

            <div class="col-md-12">
                <label for="authors" class="form-label">Authors</label>
                <input type="text" class="form-control" id="authors" placeholder="" value="" required />
                <div class="invalid-feedback">authors is required.</div>
            </div>

            <div class="col-md-12">
                <label for="dateCreated" class="form-label">Date Created</label>
                <input type="date" class="form-control" id="dateCreated" placeholder="" value="" required />
                <div class="invalid-feedback">date created is required.</div>
            </div>
        </div>

        <hr class="my-4" />

        <button class="w-100 btn btn-warning btn-lg" type="submit">Save</button>
    </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'LibraryFormComponent',
    methods: {
        handleOnSubmit(event: Event) {
            event.preventDefault();
            if (event.target) {
                const element = event.target as HTMLFormElement;
                const isValid = element.checkValidity();

                if (!isValid) {
                    event.preventDefault();
                    event.stopPropagation();
                }

                element.classList.add('was-validated');
            }
        },
    },
});
</script>

<style scoped lang="scss"></style>
