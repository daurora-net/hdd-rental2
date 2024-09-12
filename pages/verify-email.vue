<template>
    <div>
        <h1>Your email has been verified</h1>
        <p>You can now sign in with your new account.</p>
        <p>You will be redirected to the homepage in {{ seconds }} seconds.</p>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { getAuth, applyActionCode } from "firebase/auth";

const seconds = ref(5);
const router = useRouter();
const auth = getAuth();

onMounted(async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const oobCode = urlParams.get('oobCode'); // メールリンクの oobCode を取得
    const mode = urlParams.get('mode'); // verifyEmail モードを確認

    try {
        if (mode === 'verifyEmail' && oobCode) {
            // メール確認のコードを適用
            await applyActionCode(auth, oobCode);
            const countdown = setInterval(() => {
                if (seconds.value > 0) {
                    seconds.value--;
                } else {
                    clearInterval(countdown);
                    router.push('/'); // トップページにリダイレクト
                }
            }, 1000);
        } else {
            throw new Error("Invalid action code or mode");
        }
    } catch (error) {
        console.error("Error verifying email:", error);
        router.push('/'); // 認証失敗時にリダイレクト
    }
});
</script>