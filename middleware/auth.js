import { getAuth } from "firebase/auth";

export default defineNuxtRouteMiddleware((to, from) => {
    const auth = getAuth();
    const user = auth.currentUser;

    // ログインしていない場合はログインページへリダイレクト
    if (!user) {
        return navigateTo('/login');
    }

    // メール認証が未完了の場合はメール認証ページへ
    if (user && !user.emailVerified) {
        return navigateTo('/verify-email');
    }
});