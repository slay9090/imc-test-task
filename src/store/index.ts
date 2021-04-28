import { createStore } from "vuex";
import { store as clients } from "@/store/modules/clients";


export const store = createStore({
  modules: {
    clients,
  }
});

export function useStore() {
  return store;
}


