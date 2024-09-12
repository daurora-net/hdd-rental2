<template>
    <div>
        <h1>Login</h1>
        <form @submit.prevent="loginUser">
            <div>
                <label for="email">Email:</label>
                <input type="email" v-model="email" required />
            </div>
            <div>
                <label for="password">Password:</label>
                <input type="password" v-model="password" required />
            </div>
            <button type="submit">Login</button>
        </form>
        <p v-if="error">{{ error }}</p>
        <p v-if="message">{{ message }}</p>
        <nuxt-link to="/register">Create an account</nuxt-link>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
const email = ref('');
const password = ref('');
const error = ref(null);
const message = ref(null);

const loginUser = async () => {
    error.value = null;
    message.value = null;
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value);
        const user = userCredential.user;

        if (user && user.emailVerified) {
            // ログイン後、indexページにリダイレクト
            message.value = "ログインに成功しました。";
            navigateTo('/');
        } else {
            message.value = "メール認証がまだ完了していません。";
        }
    } catch (err) {
        error.value = "ログインに失敗しました: " + err.message;
    }
};
</script>