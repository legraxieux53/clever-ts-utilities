export interface Observer {
    notify(id?: string): void;
}