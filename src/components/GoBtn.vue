<template>
  <button class="p-2 bg-green-700 text-white rounded" @click="click">
    Go!
  </button>
</template>

<script setup lang="ts">
const { click } = defineEmits<{ click: () => void }>();
</script>
