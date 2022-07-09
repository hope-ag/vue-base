<script setup lang="ts">
import { ref } from 'vue'
import { toggleDark, isDark, useBreakpoints } from '~/composables';

const breakpoints = useBreakpoints();

defineProps<{ msg: string }>()
const count = ref(0)
</script>

<template>
<router-link to="/"><i i-mdi-home />Home</router-link>
  <span>|</span>
  <router-link to="/about"><i i-fa-info-circle />About</router-link>
<div @click="toggleDark()"  p4  class="bg-gray-400/20" >
<p>{{breakpoints.lg}}</p>
  <h1>{{ msg }}</h1>
  <i v-if="isDark" i-carbon-sun />
  <i v-else i-carbon-moon />
  <p>
    Recommended IDE setup:
    <a dark:text-green-400 href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>See <code>README.md</code> for more information.</p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Docs
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>

  <button type="button" @click.prevent="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</div>
</template>
