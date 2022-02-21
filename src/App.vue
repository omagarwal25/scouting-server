<template>
  <div>
    <div class="mb">Qr Stream</div>
    <div class="center stream">
      <qr-stream @decode="onDecode" class="mb">
        <div style="color: red" class="frame"></div>
      </qr-stream>
    </div>
    <div class="result">Result: {{ result }}</div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
// @ts-ignore
import { QrStream } from 'vue3-qr-reader';
import { useGamesStore } from './stores/games';

const games = useGamesStore();

const result = ref('');

function onDecode(data: string) {
  result.value = data;
  games.add(data);
}
</script>

<style scoped>
.stream {
  max-height: 500px;
  max-width: 500px;
  margin: auto;
}
.frame {
  border-style: solid;
  border-width: 2px;
  border-color: red;
  height: 200px;
  width: 200px;
  position: absolute;
  top: 0px;
  bottom: 0px;
  right: 0px;
  left: 0px;
  margin: auto;
}
</style>
