import { getAuth } from "firebase/auth";

export default defineNuxtRouteMiddleware((to, from) => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user && !user.emailVerified) {
        return navigateTo('/verify-email'); // 認証が完了していない場合はリダイレクト
    }
});