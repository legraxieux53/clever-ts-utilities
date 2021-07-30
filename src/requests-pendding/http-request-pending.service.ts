import { Observer } from './../core-patterns/observer';
import { Collection } from './../core-patterns/collection';
import { Memento } from './../core-patterns/memento';
import { Originator } from './../core-patterns/originator';
import { HttpRequestPenddingMemento } from './http-request-pendding.memento';
import { Iterator, Subject } from '../core-patterns';

export class HttpRequestPendingService implements Originator<string> {
  private url: string;
  readonly subject = new Subject<boolean>('HttpRequestPendingService',
    new HttpRequestPendingCollection());

  constructor() {
    this.updateObserver();
  }

  private initializeState() {
    this.url = undefined;
  }

  private updateObserver() {
    if (this.urlExist(this.url)) {
      this.subject.notifyObservers(true);
    } else {
      this.subject.notifyObservers(false);
    }
  }

  saveState(): Memento {
    const memento: Memento = new HttpRequestPenddingMemento(this, this.url);
    this.updateObserver();
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


export class HttpRequestPendingCollection implements Collection<Observer<boolean>> {
  private requests: Observer<boolean>[] = [];

  createIterator(): Iterator<Observer<boolean>> {
    return new HttpRequestPendingIteration(this);
  }
  getItems(): Observer<boolean>[] {
    return this.requests;
  }
  add(item: Observer<boolean>): void {
    this.requests.push(item);
  }
  remove(item: Observer<boolean>): void {
    this.requests = this.requests.filter(_item => item.getObserverData() !== _item.getObserverData());
  }
  clear(): void {
    this.requests = [];
  }
}

export class HttpRequestPendingIteration implements Iterator<Observer<boolean>> {
  private position = 0;
  constructor(private collection: HttpRequestPendingCollection) { }

  getNext(): Observer<boolean> {
    const result = this.collection[this.position];
    this.position++;
    return result;
  }
  reset(): void {
    this.position = 0;
  }
  hasMore(): boolean {
    try {
      return !!this.collection.getItems()[this.position];
    } catch (e) {
      return false;
    }
  }
  toList(): Observer<boolean>[] {
    return this.collection.getItems();
  }
  getCursor(): number {
    return this.position;
  }

}