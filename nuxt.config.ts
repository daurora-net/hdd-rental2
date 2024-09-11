export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },
    plugins: [
        '~/plugins/firebase.js'
    ],
    nitro: {
        output: {
            publicDir: 'public'  // 静的ファイルの出力先を変更する
        }
    }
})