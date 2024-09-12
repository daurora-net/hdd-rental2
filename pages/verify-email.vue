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

const router = useRouter();
const seconds = ref(5); // 5秒後にリダイレクト

// ページが読み込まれたときにカウントダウンを開始し、リダイレクトする
onMounted(() => {
    const countdown = setInterval(() => {
        if (seconds.value > 0) {
            seconds.value--;
        } else {
            clearInterval(countdown);
            router.push('/'); // indexページにリダイレクト
        }
    }, 1000); // 1秒ごとにカウントダウン
});
</script>