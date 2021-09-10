import { Observer } from './../core-patterns/observer';
import { Collection } from './../core-patterns/collection';
import { Memento } from './../core-patterns/memento';
import { Originator } from './../core-patterns/originator';
import { HttpRequestPenddingMemento } from './http-request-pendding.memento';
import { Iterator, Subject } from '../core-patterns';

export class HttpRequestPendingService implements Originator<string>, Subject {
  static classID = 'HttpRequestPendingService';

  private url: string;
  private observers: Collection<Observer>;

  constructor() {
    this.observers = new HttpRequestPendingCollection();
    this.notifyObservers();
  }

  registerObserver(obs: Observer): void {
    this.observers.add(obs);
  }
  unregisterObserver(obs: Observer): void {
    this.observers.remove(obs);
  }
  notifyObservers(): void {
    const observersIterator = this.observers.createIterator();
    observersIterator.reset();
    while(observersIterator.hasMore()) {
      const next = observersIterator.getNext();
      next.notify(HttpRequestPendingService.classID);
    }
  }

  private initializeState() {
    this.url = undefined;
  }

  saveState(): Memento {
    const memento: Memento = new HttpRequestPenddingMemento(this, this.url);
    this.notifyObservers();
    return memento;
  }

  setState(state: string) {
    this.url = state;
    this.notifyObservers();
  }

  isPending(): boolean {
    try {
      return this.urlExist(this.url);
    } catch (e) {
      return false;
    }
  }

  private urlExist(url: string): boolean {
    return url &&
      url !== undefined &&
      url !== null &&
      !url.match(/^[\s]*$/g)
      ? !!url
      : false;
  }
}


export class HttpRequestPendingCollection implements Collection<Observer> {
  private requests: Observer[] = [];

  createIterator(): Iterator<Observer> {
    return new HttpRequestPendingIteration(this);
  }
  getItems(): Observer[] {
    return this.requests;
  }
  add(item: Observer): void {
    this.requests.push(item);
  }
  remove(item: Observer): void {
    this.requests = this.requests.filter(_item => _item !== item);
  }

  clear(): void {
    this.requests = [];
  }
}

export class HttpRequestPendingIteration implements Iterator<Observer> {
  private position = 0;
  constructor(private collection: HttpRequestPendingCollection) { }

  getNext(): Observer {
    const result = this.collection.getItems()[this.position];
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
  toList(): Observer[] {
    return this.collection.getItems();
  }
  getCursor(): number {
    return this.position;
  }

}