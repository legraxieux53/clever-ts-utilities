export interface Iterator<T> {
  /**
   * Return next iterator
   */
  getNext(): T;

  /**
   * Reset the state of iterator
   */
  reset(): void;

  /**
   * Check if iterator has more items
   */
  hasMore(): boolean;

  /**
   * Return a list of items
   * @deprecated Use getItems from Collection
   */
  toList(): T[];

  /**
   * Return the curent cursor
   * @deprecated
   */
  getCursor(): number;
}
