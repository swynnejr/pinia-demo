import { defineStore } from "pinia";

interface BeerStore {
  totalCount: number;
  totalPrice: number;
  timeShopping: number;
  receipt: string[];
}

export const useBeerStore = defineStore("beersRus", {
  state: (): BeerStore => ({
    totalCount: 0,
    totalPrice: 0,
    timeShopping: 0,
    receipt: [],
  }),
  actions: {
    clearCart() {
      this.receipt = [];
      this.totalCount = 0;
      this.totalPrice = 0;
    },
    triggerCounter() {
      setInterval(() => {
        this.timeShopping += 1;
      }, 1000);
    },
  },
  getters: {
    getTime(state) {
      return state.timeShopping;
    },
  },
});
