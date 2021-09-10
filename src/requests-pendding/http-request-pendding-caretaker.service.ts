import { Memento } from './../core-patterns/memento';
import { Caretaker } from './../core-patterns/caretaker';

export class HttpRequestPenddingCaretakerService implements Caretaker {
  private history: Memento[];

  constructor() {
    this.history = [];
  }
  
  add(mement: Memento) {
    this.history.push(mement);
  }

  undo() {
    this.history.pop();
    try {
      this.history[this.history.length - 1].restore();
    } catch (e) {}
  }
}
