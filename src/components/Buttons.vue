<template>
  <div v-if="!isLoading" class="flex flex-col items-center gap-1">
    <h1 class="text-red-500" v-if="error">{{ error }}</h1>
    <h1 v-else-if="result" class="flex gap-1">
      Result:
      <code class="">{{ result }}</code>
    </h1>
    <DownloadButton />
  </div>
  <div v-else>
    <loading v-model:active="isLoading" :can-cancel="false" is-full-page />
  </div>
</template>

<script lang="ts" setup>
import DownloadButton from './DownloadButton.vue';

const { result, isLoading, error } = defineProps<{
  result?: string;
  isLoading: boolean;
  error?: string;
}>();

console.log('uwu');
</script>
