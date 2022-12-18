<template>
    <div class="container">
        <main>
            <img class="logo" alt="Vue logo" src="@/assets/company-logo-tawi-group-holdings-inc.png" />
            <nav>
                <span v-if="!email"><router-link to="/">Login</router-link></span>
                <span v-if="email"><router-link to="/library">Library</router-link> | </span>
                <span v-if="email"><router-link to="/library/form">Add Book</router-link></span>
            </nav>
            <router-view />
        </main>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from 'vuex';
import store from './store';
import { auth } from '@/firebase';

export default defineComponent({
    async mounted() {
        const store = useStore();

        auth.onAuthStateChanged((user) => {
            store.dispatch('fetchUser', user);
        });
    },
    computed: {
        email() {
            return store.getters.user?.data?.email;
        },
    },
});
</script>
<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}

.container {
    max-width: 960px;
}

.logo {
    width: 350px;
    height: 100px;
}
</style>
