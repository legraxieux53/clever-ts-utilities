export interface Observer<T> {
    notify(id: string, data?: T): void;
    getObserverData(): T;
}