import { Observer } from './observer';
export interface Subject {
    registerObserver(obs: Observer): void;
    unregisterObserver(obs: Observer): void;
    notifyObservers(): void;
}