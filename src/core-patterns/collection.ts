import { Iterator } from "./iterator";
export interface Collection<T> {
  /**
   * Return an iterator
   */
  createIterator(): Iterator<T>;

  /**
   * Return the list of collection
   */
  getItems(): T[];

  /**
   * Add item to collection
   * @param item 
   */
  add(item: T): void;

  /**
   * Remove item from collection
   * @param item 
   */
  remove(item: T): void;

  /**
   * Reset collection
   */
  clear(): void;
}
