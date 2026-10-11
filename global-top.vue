<script setup lang="ts">
import { useNav } from '@slidev/client'

const { currentPage, total } = useNav()
</script>

<template>
  <footer
    v-if="currentPage > 1"
    class="absolute bottom-3 left-14 right-14 flex justify-between text-[0.55rem] text-[#555]"
    style="font-family: 'Space Mono', monospace"
  >
    <span>Craft Kesaco ? · Yoan Thirion · CC BY-SA 4.0</span>
    <span>{{ currentPage }} / {{ total }}</span>
  </footer>
</template>
