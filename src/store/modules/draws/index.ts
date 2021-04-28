import { ActionTree, GetterTree, Module, MutationTree } from "vuex";

import { IInput, IInputProperty } from "@/types/interfaces/base/IInput";
import {storeAll} from "@/store";



export const state: IInput = {
    formData: [],
};


export const mutations: MutationTree<IInput> = {
    setFormData(store: IInput, data: IInputProperty[]) {
        store.formData = data;
    },
};



export const actions: ActionTree<IInput, storeAll> = {
    receiveFormData({ commit }) {
        commit("setFormData", formJson);
    },
};



export const getters = {
    getFormData: (store: IInput) => store.formData,
};



export const store: Module<IInput, storeAll> = {
    actions,
    getters,
    state,
    mutations,
    namespaced: true
};




// MOK DATA
const formJson: any[] = [
    {
        "id": 1,
        "ct": 1,
        "cw": 215,
        "gn": 1,
        "ns": "Имя",
        "rv": "_name"
    },
    {
        "id": 2,
        "ct": 3,
        "cw": 130,
        "gn": 2,
        "ns": "Иностранец",
        "rv": "_foreigner"
    },
    {
        "id": 3,
        "ct": 2,
        "cw": 100,
        "gn": 3,
        "ns": "Пол",
        "rv": "_sex",
        "sl": [
            {
                "id": 1,
                "name": "муж"
            },
            {
                "id": 2,
                "name": "жен"
            }
        ]
    }
];