import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import {store} from "@/store";

const app = createApp(App as any)
app.use(router)
app.use(store)
app.mount('#app')



import BTable from '@/components/base/table/BTable.vue'
app.component("BTable", BTable);
