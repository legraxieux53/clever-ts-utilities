import { Collection, Iterator } from "../core-patterns";

/**
 * Manage chars collection
 */
export class CharsCollection implements Collection<string> {
  // eslint-disable-next-line require-jsdoc
  constructor(private str: string) {}

  // eslint-disable-next-line require-jsdoc
  getItems(): string[] {
    const result = [];
    let offset = 0;
    while (this.str.charAt(offset)) {
      result.push(this.str.charAt(offset));
      offset++;
    }
    return result;
  }

  // eslint-disable-next-line require-jsdoc
  createIterator(): Iterator<string> {
    return new CharsIterator(this);
  }
}

/**
 * Manage char iterations
 */
export class CharsIterator implements Iterator<string> {
  private iterationState = -1;

  // eslint-disable-next-line require-jsdoc
  constructor(private collection: CharsCollection) {}

  // eslint-disable-next-line require-jsdoc
  toList(): string[] {
    return this.collection.getItems();
  }

  // eslint-disable-next-line require-jsdoc
  getCursor(): number {
    return this.iterationState;
  }

  // eslint-disable-next-line require-jsdoc
  reset(): void {
    this.iterationState = -1;
  }

  // eslint-disable-next-line require-jsdoc
  getNext(): string {
    try {
      this.iterationState++;
      return this.collection.getItems()[this.iterationState] || null;
    } catch (e) {
      return null;
    }
  }

  // eslint-disable-next-line require-jsdoc
  hasMore(): boolean {
    try {
      return !!this.collection.getItems()[this.iterationState + 1];
    } catch (e) {
      return false;
    }
  }
}
