import { IndeterminateCheckboxState } from './indeterminate-checkbox-state.enum';
import { FunAccess } from './fun-access.interface';

export interface Menus {
  parentId?: number;
  name: string;
  state?: IndeterminateCheckboxState;
  children?: Menus[];
  functions?: FunAccess[];
}
