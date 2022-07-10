<script setup lang="ts">
import { useBreakpoints } from '~/composables';

const breakpoints = useBreakpoints();

</script>

<template>
<div  p4  class="bg-slate-900/3 dark:bg-slate-900/20 container mx-auto space-y-2 p-4 my-8 rounded" >
  <h1 class="text-pink-500 text-lg">Home</h1>
  <span class="bg-indigo-400 h-1 w-8 inline-block rounded"></span>
  <span class="bg-indigo-400 h-1 w-2 inline-block ml-2 rounded"></span>
  <p>Breakpoints: {{breakpoints}}</p>
  <span class="inline-block h-8 w-8 bg-slate-700"></span>
  <span class="inline-block h-8 w-8 bg-slate-800"></span>
  <span class="inline-block h-8 w-8 bg-fuchsia-500"></span>
  <span class="inline-block h-8 w-8 bg-slate-400"></span>
  <span class="inline-block h-8 w-8 bg-slate-200"></span>
  <p>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus deleniti nobis ipsa modi vel, necessitatibus esse perferendis. Delectus, ducimus aliquid laudantium obcaecati ratione assumenda accusantium harum in cum, doloremque corrupti blanditiis! Ullam, voluptas. Quia illum hic, atque culpa quis a!
  </p>
</div>
</template>
