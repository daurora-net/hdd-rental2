import { getAuth, onAuthStateChanged } from "firebase/auth";

export default defineNuxtRouteMiddleware((to, from) => {
    const auth = getAuth();

    return new Promise((resolve) => {
        onAuthStateChanged(auth, (user) => {
            if (!user) {
                // ユーザーがログインしていない場合はログインページへリダイレクト
                return resolve(navigateTo('/login'));
            }
            if (user && !user.emailVerified) {
                // ユーザーがメール認証をしていない場合は verify-email ページへリダイレクト
                return resolve(navigateTo('/verify-email'));
            }
            resolve();
        });
    });
});