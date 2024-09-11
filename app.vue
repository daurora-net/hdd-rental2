<template>
    <div>
        <NuxtRouteAnnouncer />
        <header>
            <h1>My Custom App</h1>
        </header>
        <main>
            <NuxtPage /> <!-- ルーティングされたページがここに表示されます -->
        </main>
        <footer>
            <p>© 2024 My Custom App</p>
        </footer>
    </div>
</template>

<script setup>
import { getAuth } from "firebase/auth";

const auth = getAuth();
const user = auth.currentUser;

if (user && user.emailVerified) {
    console.log("ユーザーはメール認証済みです。");
} else {
    console.log("メール認証がまだ完了していません。");
}
</script>