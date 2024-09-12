<template>
    <div>
        <h1>Welcome to Nuxt 3!</h1>
        <p>This is the home page.</p>
        <button @click="logout">Logout</button> <!-- ログアウトボタンのみ表示 -->
    </div>
</template>

<script setup>
import { getAuth, signOut } from "firebase/auth";
import { useRouter } from 'vue-router';

const auth = getAuth();
const router = useRouter();

const logout = async () => {
    try {
        await signOut(auth);
        router.push('/login'); // ログアウト後にログインページへリダイレクト
    } catch (error) {
        console.error("ログアウトに失敗しました:", error);
    }
};

// ログインしているかチェックするためにミドルウェアを使用
definePageMeta({
    middleware: 'auth',
});
</script>