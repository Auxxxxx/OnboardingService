import { defineStore } from "pinia";



export const useCounterStore = defineStore("counter", {
  state: () => ({
    sum: 0,
    navPopup:false
  }),
  getters: {},
  actions: {

  },
});
