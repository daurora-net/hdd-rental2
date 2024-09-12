<template>
    <div>
        <h1>Welcome to Nuxt 3!</h1>
        <p>This is the home page.</p>
        <nuxt-link to="/login">Go to Login</nuxt-link>
        <nuxt-link to="/register">Go to Register</nuxt-link>
    </div>
</template>

<script setup>
// ミドルウェアを適用
definePageMeta({
    middleware: 'auth'
});
</script>