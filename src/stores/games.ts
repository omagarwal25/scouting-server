import { useStorage } from '@vueuse/core';
import { defineStore } from 'pinia';

interface Game {
  data: string;
  // exported: boolean;
}

export const useGamesStore = defineStore('games', {
  state: () => ({
    games: useStorage<Game[]>('games', []),
  }),

  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    add(game: string) {
      this.games.push({ data: game });
    },

    reset() {
      this.games = [];
    },
  },

  getters: {
    export(): Blob {
      const data = this.games.reduce(
        (e, c) => (c.data == '' ? e : e + c.data + '\r\n'),
        'apron,human player low,human player high,intake floor, intake human,missed,scored high,scored low,preloaded balls,defense?,penalties?,intake floor, intake human,missed,scored high,scored low,climb height,climb success,match number,match type,scout id,team color,team number,rank,scout initials\r\n'
      );
      // this.games.forEach((e) => (e.exported = true));
      return new Blob([data]);
    },
  },
});
