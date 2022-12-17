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

            <div v-if="error" class="alert alert-danger">{{ error }}</div>
        </div>

        <hr class="my-4" />

        <button class="w-100 btn btn-primary btn-lg" type="submit">Sign Up</button>
    </form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default defineComponent({
    name: 'SignUpFormComponent',
    setup() {
        const email = ref('');
        const password = ref('');
        const error = ref('');

        const store = useStore();
        const router = useRouter();

        return { email, password, error, store, router };
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
                    try {
                        await this.store.dispatch('register', {
                            email: this.email,
                            password: this.password,
                            name: this.email,
                        });

                        this.router.push('/');
                    } catch (error) {
                        this.error = (error as Error).message;
                    }
                }

                element.classList.add('was-validated');
            }
        },
    },
});
</script>

<style scoped lang="scss"></style>
