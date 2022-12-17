<template>
    <form class="needs-validation" novalidate @submit="handleOnSubmit">
        <div class="row g-3">
            <div class="col-md-12">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" placeholder="" value="" required />
                <div class="invalid-feedback">email is required.</div>
            </div>

            <div class="col-md-12">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password" placeholder="" value="" required />
                <div class="invalid-feedback">password is required.</div>
            </div>
        </div>

        <hr class="my-4" />

        <button class="w-100 btn btn-primary btn-lg" type="submit">Login</button>
    </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'SignUpFormComponent',
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
