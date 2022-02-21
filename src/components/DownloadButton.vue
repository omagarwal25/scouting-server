<script setup lang="ts">
import { useGamesStore } from '../stores/games';

const games = useGamesStore();

const onDownload = () => {
  const link = document.createElement('a');
  link.href = URL.createObjectURL(games.export);
  link.download = `scouting-save-${new Date().toISOString()}.csv`;
  link.click();
  URL.revokeObjectURL(link.href);
};

const onReset = () => {
  games.reset();
};
</script>
<template>
  <div class="flex items-center gap-2">
    <a
      text="Download"
      @click.prevent="onDownload"
      class="p-2 bg-green-700 text-white rounded"
    />

    <button class="p-2 bg-red-500 text-white rounded" @click="onReset">
      Reset
    </button>
  </div>
</template>
