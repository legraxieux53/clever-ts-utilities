import {Memento} from "./memento";

export interface Originator<T> {
  saveState(): Memento;
  setState(state: T);
}
