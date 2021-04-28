import {gendersType} from "@/types/enums/gendersType";

export interface IClient {
    id: number;
    _foreigner: boolean;
    _name: string | null;
    _sex: gendersType | null;
}