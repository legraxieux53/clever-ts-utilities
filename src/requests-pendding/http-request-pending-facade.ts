import { Observer } from '../core-patterns';
import { HttpRequestPenddingCaretakerService } from './http-request-pendding-caretaker.service';
import { HttpRequestPendingService } from './http-request-pending.service';

export class HttpRequestPendingFacade {
    private static instance: HttpRequestPendingFacade;

    private requestPending: HttpRequestPendingService
    private requestCareTeker: HttpRequestPenddingCaretakerService

    private constructor() {
        this.requestPending = new HttpRequestPendingService();
        this.requestCareTeker = new HttpRequestPenddingCaretakerService();
        this.requestCareTeker.add(this.requestPending.saveState());
    }

    /**
     * Get instance of the class  
     * @returns HttpRequestPendingFacade
     */
    static getInstance(): HttpRequestPendingFacade {
        if (!this.instance) {
            this.instance = new HttpRequestPendingFacade();
        }
        return this.instance;
    }

    /**
     * increment the url collection
     * @param url string
     */
    incrementUrl(url: string): void {
        this.requestPending.setState(url);
        this.requestCareTeker.add(this.requestPending.saveState());
    }

    /**
     * Decrement the url collection
     */
    decrementUrl(): void {
        this.requestCareTeker.undo();
    }

    /**
     * Check if request is pending. It must be used in Observer class.
     * @returns boolean
     */
    isPending(): boolean {
        return this.requestPending.isPending();
    }

    /**
     * Register observer
     * @param obs Observer
     */
    addObserver(obs: Observer): void {
        this.requestPending.registerObserver(obs);
    }

    /**
     * Unregister observer
     * @param obs Observer
     */
    removeObserver(obs: Observer): void {
        this.requestPending.unregisterObserver(obs);
    }
}
