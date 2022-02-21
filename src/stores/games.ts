import { RemoveableRef, useLocalStorage, useStorage } from '@vueuse/core';
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
      const data = this.games.reduce((e, c) => e + c.data + '\r\n', '');
      // this.games.forEach((e) => (e.exported = true));
      return new Blob([data]);
    },
  },
});
