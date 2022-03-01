<template>
  <div class="flex items-center gap-2">
    <a
      text="Download"
      @click.prevent="onDownload"
      class="rounded bg-green-700 p-2 text-white"
    />

    <button class="rounded bg-red-500 p-2 text-white" @click="onReset">
      Reset
    </button>
  </div>
</template>

<script setup lang="ts">
import { useGamesStore } from '~/stores/games';

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
