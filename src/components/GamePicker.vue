<template>
  <h1 class="border-b font-semibold">Select Game</h1>
  <div v-if="!schedule.selected" class="flex flex-col gap-5">
    <div class="flex items-center gap-4">
      <div class="flex flex-col gap-2">
        <label for="matchTypeSelector">Team Number</label>
        <select id="matchTypeSelector" class="p-2 rounded" v-model="matchType">
          <option value="qual">Qualifier</option>
          <option value="playoff">Playoff</option>
        </select>
      </div>
      <GoBtn @click="onGo" />
    </div>
    <div class="flex items-center gap-2">
      <select class="rounded p-2" v-model="selected">
        <option v-for="game in schedule.games" :key="game.matchNumber">
          {{ game.description }}
        </option>
      </select>
      <button class="p-2 rounded bg-green-700 text-white" @click="onSelect">
        Select
      </button>
    </div>
  </div>
  <div v-else class="flex items-center gap-2">
    <button @click="onChange" class="rounded bg-blue-700 text-white p-2">
      Game: {{ schedule.selected?.description }} (Change)
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useEventsStore } from '../stores/events';
import { useScheduleStore } from '../stores/schedule';
import GoBtn from './GoBtn.vue';

const matchType = ref<'qual' | 'playoff'>('qual');
const selected = ref<string>();

const schedule = useScheduleStore();
const event = useEventsStore();

const onGo = () => {
  if (!event.selected) {
    return;
  }

  schedule.fetch({ event: event.selected.code, type: matchType.value });
};

const onSelect = () => {
  schedule.selected = schedule.games.find(
    (e) => e.description === selected.value
  );
};

const onChange = () => {
  schedule.selected = undefined;
};
</script>
