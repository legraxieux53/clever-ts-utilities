import {Memento} from "./memento";

export interface Caretaker {
  undo();
  add(mement: Memento);
}
