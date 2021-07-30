import { Originator } from './../core-patterns/originator';
import { Memento } from './../core-patterns/memento';

export class HttpRequestPenddingMemento implements Memento {
  private state: string;

  constructor(private originator: Originator<any>, state: string) {
    this.state = state;
  }
  restore() {
    this.originator.setState(this.state);
  }
}
