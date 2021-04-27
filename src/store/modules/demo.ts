import { MutationTree, ActionTree } from "vuex";
import {
  IDemoTableData,
  IData
} from "@/types/interfaces/demo-table/IDemoTableData";

export const state = (): IDemoTableData => ({
  table: [],
});

export type RootState = ReturnType<typeof state>;

export const mutations: MutationTree<RootState> = {
  setTableProp(store: IDemoTableData, data: IData[]) {
    store.table = data;
  },
};

export const actions: ActionTree<RootState, RootState> = {
  receiveTableProp({ commit}) {
    commit('setTableProp' ,tableJson)
  }
};

export const getters = {
  getTableProp: (store: IDemoTableData) => store.table,
};

// MOK DATA
const tableJson: any[] = [
  {
    id: 1,
    _foreigner: false,
    _name: "Имя1",
    _sex: 1,
  },
  {
    id: 2,
    _foreigner: true,
    _name: "Имя2",
    _sex: 2,
  },
  {
    id: 3,
    _foreigner: true,
    _name: "Имя3",
    _sex: 1,
  },
  {
    id: 4,
    _foreigner: true,
    _name: "Имя4",
    _sex: 2,
  },
  {
    id: 5,
    _foreigner: false,
    _name: "Имя5",
    _sex: 2,
  },
  {
    id: 6,
    _foreigner: false,
    _name: "Имя6",
    _sex: 2,
  },
  {
    id: 7,
    _foreigner: false,
    _name: "Имя7",
    _sex: 1,
  },
];

export  default  {state,  actions, getters, mutations}