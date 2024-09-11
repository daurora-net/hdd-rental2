<template>
    <div>
        <h1>Register</h1>
        <form @submit.prevent="registerUser">
            <div>
                <label for="email">Email:</label>
                <input type="email" v-model="email" required />
            </div>
            <div>
                <label for="password">Password:</label>
                <input type="password" v-model="password" required />
            </div>
            <button type="submit">Register</button>
        </form>
        <p v-if="error">{{ error }}</p>
        <p v-if="message">{{ message }}</p>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import app from "~/plugins/firebase";

const auth = getAuth(app);
const email = ref('');
const password = ref('');
const error = ref(null);
const message = ref(null);

const registerUser = async () => {
    error.value = null;
    message.value = null;
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
        const user = userCredential.user;

        await sendEmailVerification(user);
        message.value = "メールを送信しました。メールを確認し、リンクをクリックして認証してください。";
    } catch (err) {
        error.value = "登録に失敗しました: " + err.message;
    }
};
</script>