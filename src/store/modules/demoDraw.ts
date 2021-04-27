import { MutationTree, ActionTree } from "vuex";

import { IInput, IInputProperty } from "@/types/interfaces/base/IInput";

export const state1 = (): IInput => ({
  formData: [],
});

export type RootState1 = ReturnType<typeof state1>;

export const mutations1: MutationTree<RootState1> = {
  setFormData(store: IInput, data: IInputProperty[]) {
    store.formData = data;
  },
};

export const actions1: ActionTree<RootState1, IInputProperty> = {
  receiveFormData({ commit }) {
    commit("setFormData", formJson);
  },
};

export const getters1 = {
  getFormData: (store: IInput) => store.formData,
};

export default { state1, actions1, getters1, mutations1 };

// MOK DATA
const formJson: any[] = [
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
