<template>
    <img alt="Vue logo" src="./assets/logo.png" />
    <LibraryPage />
    <LoginPage />
</template>

<script>
import LibraryPage from './components/page/library.vue';
import LoginPage from './components/page/login.vue';

export default {
    name: 'App',
    components: {
        LibraryPage,
        LoginPage,
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
