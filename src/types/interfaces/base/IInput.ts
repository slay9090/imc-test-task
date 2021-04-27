// ct - тип компонента формы (1 - edit, 2 - select, 3 - checkbox)
// cw - ширина компонента в пикселах
// gn - порядковый номер компонента на форме
// ns - отображаемое имя компонента
// rv - ссылка на поле Таблицы
// sl - описание справочника select-компонента



import {inputType} from "@/types/enums/inputType";


export interface IInput {
    id: number
    ct: inputType
    cw: number
    gn: number
    ns: string
    rv: string
    sl?: object
}