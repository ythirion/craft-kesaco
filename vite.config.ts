import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    // lightningcss échoue à minifier une règle CSS imbriquée du thème Slidev par défaut
    cssMinify: false,
  },
})
