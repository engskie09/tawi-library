<template>
    <form class="needs-validation" novalidate @submit="handleOnSubmit">
        <div class="row g-3">
            <div class="col-md-12">
                <label for="email" class="form-label">Email</label>
                <input v-model="email" type="email" class="form-control" id="email" placeholder="" required />
                <div class="invalid-feedback">email is required.</div>
            </div>

            <div class="col-md-12">
                <label for="password" class="form-label">Password</label>
                <input v-model="password" type="password" class="form-control" id="password" placeholder="" required />
                <div class="invalid-feedback">password is required.</div>
            </div>
        </div>

        <hr class="my-4" />

        <button class="w-100 btn btn-primary btn-lg" type="submit">Login</button>
    </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

export default defineComponent({
    name: 'SignUpFormComponent',
    data() {
        return { email: '', password: '' };
    },
    methods: {
        handleOnSubmit(event: Event) {
            event.preventDefault();
            if (event.target) {
                const element = event.target as HTMLFormElement;
                const isValid = element.checkValidity();

                if (!isValid) {
                    event.preventDefault();
                    event.stopPropagation();
                } else {
                    console.log(this.email);
                    console.log(this.password);

                    createUserWithEmailAndPassword(getAuth(), this.email, this.password)
                        .then(() => {
                            alert('successfully registered');
                        })
                        .catch(() => {
                            alert('try again');
                        });
                }

                element.classList.add('was-validated');
            }
        },
    },
});
</script>

<style scoped lang="scss"></style>
