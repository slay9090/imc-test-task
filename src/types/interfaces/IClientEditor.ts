import {IClient} from "@/types/interfaces/IClient";
import {IControl} from "@/types/interfaces/base/IControl";


export interface IClientEditor {
  table: IClient[];
  formData: IControl[];
}
