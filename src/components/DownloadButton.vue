<script setup lang="ts">
import { useGamesStore } from '../stores/games';

const games = useGamesStore();

const onDownload = () => {
  const link = document.createElement('a');
  link.href = URL.createObjectURL(games.export);
  link.download = `scouting-save-${new Date().toISOString()}`;
  link.click();
  URL.revokeObjectURL(link.href);
};
</script>

<a text="download" @click.prevent="downloadItem(item)" />
