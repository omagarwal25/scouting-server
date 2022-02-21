<template>
  <div class="p-2 flex flex-col items-center justify-center gap-5">
    <div class="w-[500px] h-[500px]">
      <qr-stream @decode="onDecode" class="mb">
        <div style="color: red" class="frame"></div>
      </qr-stream>
    </div>
    <div v-if="!isLoading" class="flex flex-col items-center gap-1">
      <h1 class="text-red-500" v-if="error">{{ error }}</h1>
      <h1 v-else-if="result" class="flex gap-1">
        Result:
        <code class="">{{ result }}</code>
      </h1>
      <download-button />
    </div>
    <div v-else>
      <loading v-model:active="isLoading" :can-cancel="false" is-full-page />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
// @ts-ignore
import { QrStream } from 'vue3-qr-reader';
import { useGamesStore } from './stores/games';
import DownloadButton from './components/DownloadButton.vue';

const games = useGamesStore();

const result = ref<string | undefined>('');
const isLoading = ref(false);
const error = ref<string | undefined>();

function onDecode(data: string) {
  console.log(data.match(/,/g)?.length);
  if (data.match(/,/g)?.length != 24) {
    error.value = 'Invalid QR Code. Please Try Again';
  } else {
    result.value = data;
    games.add(data);
    error.value = undefined;
    setTimeout(() => (result.value = undefined), 2000);
  }

  isLoading.value = true;
  setTimeout(() => (isLoading.value = false), 500);
}
</script>

<style scoped>
.frame {
  border-style: solid;
  border-width: 2px;
  border-color: red;
  height: 350px;
  width: 350px;
  position: absolute;
  top: 0px;
  bottom: 0px;
  right: 0px;
  left: 0px;
  margin: auto;
}
</style>
