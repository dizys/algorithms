export class UnionFind {
  private nodes: number[] = [];
  private ranks: number[] = [];

  constructor(private n: number = 10) {
    for (let i = 0; i < n; i++) {
      this.nodes.push(i);
      this.ranks.push(0);
    }
  }

  private assertValidIndex(index: number): void {
    if (index < 0 || index >= this.n) {
      throw new Error(`index ${index} is out of bounds`);
    }
  }

  find(index: number): number {
    this.assertValidIndex(index);
    let parentIndex = this.nodes[index];
    if (parentIndex !== index) {
      parentIndex = this.find(parentIndex);
      this.nodes[index] = parentIndex;
    }
    return parentIndex;
  }

  union(index1: number, index2: number): void {
    this.assertValidIndex(index1);
    this.assertValidIndex(index2);
    let root1 = this.find(index1);
    let root2 = this.find(index2);
    if (root1 === root2) {
      return;
    }
    if (this.ranks[root1] < this.ranks[root2]) {
      this.nodes[root1] = root2;
    } else if (this.ranks[root1] > this.ranks[root2]) {
      this.nodes[root2] = root1;
    } else {
      this.nodes[root2] = root1;
      this.ranks[root1]++;
    }
  }

  _getRank(index: number): number {
    this.assertValidIndex(index);
    return this.ranks[index];
  }
}
