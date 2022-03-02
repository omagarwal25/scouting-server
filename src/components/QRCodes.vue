<template>
  <FlexVert v-for="team in transformed?.teams" class="items-center">
    <h1
      class="text-xl font-semibold"
      :class="team.color === 'red' ? 'text-red-700' : 'text-blue-700'"
    >
      Team {{ team.number }}
    </h1>
    <QrcodeVue
      :value="`${transformed?.number},${transformed?.type},${team.scoutId},${team.color},${team.number}`"
      :size="500"
    />
  </FlexVert>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useScheduleStore } from '~/stores/schedule';
import QrcodeVue from 'qrcode.vue';
import FlexVert from './util/FlexVert.vue';

const schedule = useScheduleStore();

const transformed = computed(() => {
  const selected = schedule.selected;

  if (!selected) return;

  const teams: { number: number; color: 'red' | 'blue'; scoutId: number }[] =
    [];

  let scoutId = 0;
  for (const i of selected.teams) {
    const color = i.station.charAt(0).toLowerCase() === 'b' ? 'blue' : 'red';

    teams.push({ number: i.teamNumber, color, scoutId });
    scoutId += 1;
  }

  return {
    teams,
    type:
      selected.tournamentLevel === 'Qualification' ? 'qualifier' : 'playoff',
    number: selected.matchNumber,
  };
});
</script>
