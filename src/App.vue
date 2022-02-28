<template>
  <div class="p-2 flex flex-col items-center justify-center gap-5">
    <scanner />
    <div class="border-t flex flex-col items-center justify-center w-full">
      <h1 class="font-bold text-2xl">Generate Codes</h1>
    </div>
    <generator />
  </div>
</template>

<script setup lang="ts">
import Scanner from './components/Scanner.vue';
import Generator from './components/Generator.vue';
</script>
