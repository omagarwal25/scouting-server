<template>
  <div class="flex flex-col items-center justify-center gap-5 p-2">
    <Scanner />
    <div class="flex w-full flex-col items-center justify-center border-t">
      <h1 class="text-2xl font-bold">Generate Codes</h1>
    </div>
    <Generator />
  </div>
</template>

<script setup lang="ts">
import Scanner from './components/Scanner.vue';
import Generator from './components/Generator.vue';
</script>
