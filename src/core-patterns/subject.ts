import { Observer } from './observer';
import { Collection } from './collection';
export class Subject<T> {
    constructor(private id: string, private observerCollection: Collection<Observer<T>>) { }

    registerObserver(obs: Observer<T>) {
        this.observerCollection.add(obs);
    }

    unregisterObserver(obs: Observer<T>) {
        this.observerCollection.remove(obs);
    }

    notifyObservers(data?: T) {
        const iterator = this.observerCollection.createIterator();
        iterator.reset();
        while (iterator.hasMore()) {
            const next = iterator.getNext();
            if (next) {
                next.notify(this.id, data);
            }
        }
    }
}