<template>
  <button class="rounded bg-green-700 p-2 text-white" @click="click">
    Go!
  </button>
</template>

<script setup lang="ts">
const { click } = defineEmits<{ click: () => void }>();
</script>
