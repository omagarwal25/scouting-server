<template>
  <table class="divide-y divide-gray-200">
    <thead class="bg-gray-50">
      <tr>
        <th
          scope="col"
          class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          v-for="i in ['Team Number', 'Type', 'Match Number', 'Color', 'Scout']"
        >
          {{ i }}
        </th>
        <th scope="col" class="relative px-6 py-3">
          <span class="sr-only">Edit</span>
        </th>
      </tr>
    </thead>
    <tbody class="bg-white divide-y divide-gray-200">
      <tr class="border-b p-2 m-2" v-for="game in games.games">
        <td
          class="capitalize px-6 py-4 whitespace-nowrap text-sm text-gray-500"
        >
          {{ game.data.split(',')[22] }}
        </td>
        <td
          class="capitalize px-6 py-4 whitespace-nowrap text-sm text-gray-500"
        >
          {{ game.data.split(',')[19] }}
        </td>
        <td
          class="capitalize px-6 py-4 whitespace-nowrap text-sm text-gray-500"
        >
          {{ game.data.split(',')[18] }}
        </td>
        <td
          class="capitalize px-6 py-4 whitespace-nowrap text-sm"
          :class="
            game.data.split(',')[21] === 'red'
              ? 'text-red-700'
              : 'text-blue-700'
          "
        >
          {{ game.data.split(',')[21] }}
        </td>
        <td
          class="capitalize px-6 py-4 whitespace-nowrap text-sm text-gray-500"
        >
          {{ game.data.split(',')[24] }}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
          <button
            @click="onDelete(game.hash)"
            class="text-indigo-600 hover:text-indigo-900"
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { useGamesStore } from '../stores/games';

const games = useGamesStore();

const onDelete = (game: string) => {
  games.remove(game);
};
</script>
