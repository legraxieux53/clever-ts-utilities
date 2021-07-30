import { Iterator } from "./iterator";

// import { Iterator } from "typescript";

export interface Collection<T> {
  /**
   * Return an iterator
   */
  createIterator(): Iterator<T>;

  /**
   * Return the list of collection
   */
  getItems(): T[];
}
