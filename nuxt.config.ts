import { defineNuxtConfig } from 'nuxt/config';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: "./src",

  runtimeConfig: {
    // サーバーサイドで使える変数
    apiSecret: 9999,

    public: {
      // クライアントサイドで使える変数
      apiBase: "/api",
    },

    // Nitro Config
    nitro: {},

    // PostCSS Config
    postcss: {},

    // Vite Config
    vite: {},

    // Webpack Config
    webpack: {},

    // eslint, prettier, stylelint, tailwind, vitest のコンフィグは別ファイル
    // Vitest => めっちゃ速い Unit testing framework らしい
  },
});
