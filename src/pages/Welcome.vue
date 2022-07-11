<script setup lang="ts">
let value1 = $ref('');
</script>

<template>
  <div
    class="bg-gray-900/3 dark:bg-gray-900/15 container mx-auto space-y-2 p-4 my-8 p4 rounded"
  >
    <h1 class="text-pink-500 text-lg">Welcome</h1>
  <span class="bg-indigo-400 h-1 w-8 inline-block rounded"></span>
  <span class="bg-indigo-400 h-1 w-2 inline-block ml-2 rounded"></span>
  <el-date-picker
      v-model="value1"
      type="datetime"
      placeholder="Select date and time"
    />
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae voluptates ex suscipit optio aliquam quo distinctio tenetur, cumque dolorum perferendis aut repellendus totam quidem dicta! Nulla quae dolores, excepturi animi quis debitis possimus veritatis officia, adipisci non similique laudantium vel.
    </p>
  </div>
</template>
