//      "id": 1,
//     "_foreigner": false,
//     "_name": "Имя1",
//     "_sex": 1


import {gendersType} from "@/types/enums/gendersType";

export interface IData {
    id: number
    _foreigner: boolean
    _name: string | null
    _sex: gendersType | null
}
export interface IDemoTableData {
     table: IData[]
}