import { ActionTree, GetterTree, Module, MutationTree } from "vuex";

import {
    IClientEditor,
} from "@/types/interfaces/IClientEditor";
import {IClient} from "@/types/interfaces/IClient";





export const state:IClientEditor = {
    table: [],
    formData: []
};


export const mutations: MutationTree<IClientEditor> = {
    setData(store: IClientEditor, data: IClient[]) {
        store.table = data;
    },
};



export const actions: ActionTree<IClientEditor, IClientEditor> = {
    receiveData({ commit }) {
        commit("setData", dataJson);
    },
};



export const getters:GetterTree<IClientEditor, IClientEditor>  = {
    getData: (store: IClientEditor) => store.table,
};



export const store: Module<IClientEditor, IClientEditor> = {
    actions,
    getters,
    state,
    mutations,
    namespaced: true
};




// MOK DATA
const dataJson = {
    "table": [
        {
            "id": 1,
            "_foreigner": false,
            "_name": "Имя1",
            "_sex": 1
        },
        {
            "id": 2,
            "_foreigner": true,
            "_name": "Имя2",
            "_sex": 2
        },
        {
            "id": 3,
            "_foreigner": true,
            "_name": "Имя3",
            "_sex": 1
        },
        {
            "id": 4,
            "_foreigner": true,
            "_name": "Имя4",
            "_sex": 2
        },
        {
            "id": 5,
            "_foreigner": false,
            "_name": "Имя5",
            "_sex": 2
        },
        {
            "id": 6,
            "_foreigner": false,
            "_name": "Имя6",
            "_sex": 2
        },
        {
            "id": 7,
            "_foreigner": false,
            "_name": "Имя7",
            "_sex": 1
        }
    ],
    "formData": [
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
    ]
};