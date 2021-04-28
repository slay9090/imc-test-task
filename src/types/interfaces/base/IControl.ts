
import {inputType} from "@/types/enums/inputType";

export interface IControl {
    id: number;
    ct: inputType;
    cw: number;
    gn: number;
    ns: string;
    rv: string;
    sl?: object;
}