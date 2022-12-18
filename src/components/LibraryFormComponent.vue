<template>
    <form class="needs-validation" novalidate @submit="handleOnSubmit">
        <div class="row g-3">
            <div class="col-md-12">
                <label for="name" class="form-label">Name</label>
                <input
                    v-model="name"
                    v-on:keypress="handleNameOnKeypress"
                    type="text"
                    class="form-control"
                    id="name"
                    placeholder=""
                    maxlength="50"
                    required
                />
                <div class="invalid-feedback">name is required.</div>
            </div>

            <div class="col-md-12">
                <label for="description" class="form-label">Description</label>
                <textarea
                    v-model="description"
                    v-on:keypress="handleDescriptionOnKeypress"
                    type="text"
                    class="form-control"
                    id="description"
                    placeholder=""
                    rows="3"
                    maxlength="100"
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

            <div class="col-md-12">
                <label for="icon" class="form-label">Icon</label>
                <input
                    v-on:change="handleIconOnChange"
                    type="file"
                    class="form-control"
                    id="12"
                    placeholder=""
                    :required="isIconRequired"
                />
                <div class="invalid-feedback">icon is required.</div>
            </div>
        </div>

        <hr class="my-4" />

        <button class="w-100 btn btn-warning btn-lg" type="submit">Save</button>
    </form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { createBook, updateBook, uploadBookIcon, getBook } from '@/firebase';
import router from '@/router';

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
        const icon = ref(new File([], ''));
        const isIconRequired = ref(true);

        return { name, description, authors, dateCreated, icon, isIconRequired };
    },

    async mounted() {
        if (this.id) {
            const book = await getBook(this.id);
            if (book) {
                this.name = book.name;
                this.description = book.description;
                this.authors = book.authors;
                this.dateCreated = book.dateCreated;
                this.isIconRequired = false;
            }
        }
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
                    if (this.id) {
                        await updateBook(this.id, {
                            name: this.name,
                            description: this.description,
                            authors: this.authors,
                            dateCreated: this.dateCreated,
                        });

                        router.push({ name: 'libraryTable' });
                    } else {
                        const iconPath = await uploadBookIcon(this.icon);

                        await createBook({
                            name: this.name,
                            description: this.description,
                            authors: this.authors,
                            dateCreated: this.dateCreated,
                            icon: iconPath,
                        });

                        router.push({ name: 'libraryTable' });
                    }
                }

                element.classList.add('was-validated');
            }
        },

        async handleNameOnKeypress(event: KeyboardEvent) {
            if (!/^[a-z0-9]+$/i.test(event.key)) {
                event.preventDefault();
            }
        },

        async handleDescriptionOnKeypress(event: KeyboardEvent) {
            if (!/^[a-z0-9]+$/i.test(event.key)) {
                event.preventDefault();
            }
        },

        async handleIconOnChange(event: Event) {
            const element = event.target as HTMLInputElement;
            const file = element.files ? element.files[0] : null;

            if (file) {
                this.icon = file;
            }
        },
    },
});
</script>

<style scoped lang="scss"></style>
