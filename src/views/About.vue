<script setup lang="ts">
import { toggleDark, isDark } from '~/composables';

defineProps<{ msg: string }>()
</script>

<template>
<div @click="toggleDark()"  p4  class="bg-gray-400/20" >
  <h1>About</h1>
  <router-link to="/"><i i-mdi-home />Home</router-link>
  <span>|</span>
  <router-link to="/about"><i i-fa-info-circle />About</router-link>
  <i v-if="isDark" i-carbon-sun />
  <i v-else i-carbon-moon />
  <p>
    Recommended IDE setup:
    <a dark:text-green-400 href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>
</div>
</template>
