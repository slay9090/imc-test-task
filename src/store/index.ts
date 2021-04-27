import { createStore } from "vuex";
import demoData from "./modules/demoData";
import demoDraw from "@/store/modules/demoDraw";

// export default createStore({
//   modules: {
//     xxx: demoDraw,
//     demoData,
//   },
// });

const store = createStore({
  /* options */
});

// register a module `myModule`
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
store.registerModule("myModule", {
  demoData,
});

export default store;
