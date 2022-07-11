export class Heap<T> {
  private nodes: T[] = [];

  constructor(private compare: (a: T, b: T) => boolean) {} // compare(a, b) returns true if a > b and this is a max-heap

  get size(): number {
    return this.nodes.length;
  }

  get empty(): boolean {
    return this.size === 0;
  }

  get(index: number): T {
    if (index < 0 || index >= this.size) {
      throw new Error(`index ${index} is out of bounds`);
    }
    return this.nodes[index];
  }

  private getParentIndex(index: number): number {
    return Math.floor((index - 1) / 2);
  }

  private getLeftChildIndex(index: number): number {
    return index * 2 + 1;
  }

  private getRightChildIndex(index: number): number {
    return index * 2 + 2;
  }

  private hasParent(index: number): boolean {
    return this.getParentIndex(index) >= 0;
  }

  private hasLeftChild(index: number): boolean {
    return this.getLeftChildIndex(index) < this.size;
  }

  private hasRightChild(index: number): boolean {
    return this.getRightChildIndex(index) < this.size;
  }

  private swap(index1: number, index2: number): void {
    let temp = this.nodes[index1];
    this.nodes[index1] = this.nodes[index2];
    this.nodes[index2] = temp;
  }

  private heapifyUp(index: number): void {
    while (
      this.hasParent(index) &&
      this.compare(this.nodes[index], this.nodes[this.getParentIndex(index)])
    ) {
      this.swap(index, this.getParentIndex(index));
      index = this.getParentIndex(index);
    }
  }

  add(value: T): void {
    this.nodes.push(value);
    this.heapifyUp(this.size - 1);
  }

  private heapifyDown(): void {
    let index = 0;
    while (this.hasLeftChild(index)) {
      let biggerChildIndex = this.getLeftChildIndex(index);
      if (
        this.hasRightChild(index) && // has right child
        !this.compare(
          this.nodes[biggerChildIndex],
          this.nodes[this.getRightChildIndex(index)]
        ) // right child is bigger
      ) {
        biggerChildIndex = this.getRightChildIndex(index);
      }
      if (
        this.compare(this.nodes[index], this.nodes[biggerChildIndex]) // current node is bigger than bigger child
      ) {
        break;
      }

      this.swap(index, biggerChildIndex);
      index = biggerChildIndex;
    }
  }

  get top(): T | undefined {
    if (this.empty) {
      return undefined;
    }
    return this.nodes[0];
  }

  pop(): T {
    if (this.empty) {
      throw new Error("heap is empty");
    }
    let result = this.nodes[0];
    this.nodes[0] = this.nodes[this.size - 1];
    this.nodes.pop();
    this.heapifyDown();
    return result;
  }
}
