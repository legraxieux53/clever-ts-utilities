import { Observer } from './../core-patterns/observer';
import { Collection } from './../core-patterns/collection';
import { Memento } from './../core-patterns/memento';
import { Originator } from './../core-patterns/originator';
import {HttpRequestPenddingMemento} from './http-request-pendding.memento';
import { Iterator, Subject } from '../core-patterns';

export class HttpRequestPendingService implements Originator<string> {
  private url: string;
  readonly subject = new Subject<string>('HttpRequestPendingService',
    new HttpRequestPendingCollection());

  constructor() {
    this.updateObserver();
  }

  private initializeState() {
    this.url = undefined;
  }

  private updateObserver() {
    this.subject.notifyObservers(this.url);
  }

  saveState(): Memento {
    const memento: Memento = new HttpRequestPenddingMemento(this, this.url);
    return memento;
  }

  setState(state: string) {
    this.url = state;
    this.updateObserver();
  }

  // getStateAsync(): Observable<string> {
  //   return this.subject.asObservable();
  // }

  // isPendingAsync(): Observable<boolean> {
  //   try {
  //     return this.getStateAsync().pipe(
  //       map((item) => {
  //         return this.urlExist(item);
  //       })
  //     );
  //   } catch (e) {
  //     return of(false);
  //   }
  // }

  private urlExist(url: string): boolean {
    return url &&
      url !== undefined &&
      url !== null &&
      !url.match(/^[\s]*$/g)
      ? !!url
      : false;
  }
}


export class HttpRequestPendingCollection implements Collection<Observer<string>> {
  private requests: Observer<string>[] = [];

  createIterator(): Iterator<Observer<string>> {
    return new HttpRequestPendingIteration(this);
  }
  getItems(): Observer<string>[] {
    return this.requests;
  }
  add(item: Observer<string>): void {
    this.requests.push(item);
  }
  remove(item: Observer<string>): void {
    this.requests = this.requests.filter(_item => item.getObserverData() !== _item.getObserverData());
  }
  clear(): void {
    this.requests = [];
  }
}

export class HttpRequestPendingIteration implements Iterator<Observer<string>> {
  private position = -1;
  constructor(private collection: HttpRequestPendingCollection) { }
  
  getNext(): Observer<string> {
    this.position++;
    return this.collection[this.position];
  }
  reset(): void {
    this.position = -1;
  }
  hasMore(): boolean {
    try {
      return !!this.collection[this.position + 1];
    } catch (e) {
      return false;
    }
  }
  toList(): Observer<string>[] {
    return this.collection.getItems();
  }
  getCursor(): number {
    return this.position;
  }

}