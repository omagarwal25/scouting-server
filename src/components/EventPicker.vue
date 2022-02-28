<template>
  <h1 class="font-semibold border-b">Select Event</h1>
  <div v-if="!events.selected" class="flex flex-col gap-2">
    <div class="flex items-center gap-4">
      <div class="flex flex-col gap-2">
        <label for="teamNumberPicker">Team Number</label>
        <input
          class="border p-2 rounded"
          id="teamNumberPicker"
          type="number"
          v-model="teamNumber"
          placeholder="Team Number"
        />
      </div>
      <div class="flex flex-col gap-2">
        <label for="weekPicker">Week Number</label>
        <input
          class="border p-2 rounded"
          id="weekPicker"
          type="number"
          v-model="week"
          placeholder="Week"
        />
      </div>
      <GoBtn @click="onGo" />
    </div>
    <div class="flex items-center gap-2">
      <select class="rounded p-2" v-model="selected">
        <option v-for="event in events.events" :key="event.code">
          {{ event.name }}
        </option>
      </select>
      <button class="p-2 rounded bg-green-700 text-white" @click="onSelect">
        Select
      </button>
    </div>
  </div>
  <div v-else class="flex items-center gap-2">
    <button @click="onChange" class="rounded bg-blue-700 text-white p-2">
      Event: {{ events.selected.name }} (Change)
    </button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useEventsStore } from '../stores/events';
import { useScheduleStore } from '../stores/schedule';
import GoBtn from './GoBtn.vue';

const teamNumber = ref<number>();
const week = ref<number>();
const selected = ref<string>();

const events = useEventsStore();
const scheduled = useScheduleStore();

const onGo = async () => {
  await events.fetch({ team: teamNumber.value, week: week.value });
};

const onSelect = () => {
  events.selected = events.events.find((e) => e.name === selected.value);
};

const onChange = () => {
  events.selected = undefined;
  scheduled.selected = undefined;
};
</script>
