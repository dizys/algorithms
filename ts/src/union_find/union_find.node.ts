export interface UFNode {
  parent: UFNode;
  rank: number;
}

export function newUFNode(): UFNode {
  let node: UFNode = {
    parent: undefined!, // ! is a hack to make the compiler happy
    rank: 0,
  };

  node.parent = node;

  return node;
}

export function ufFind(node: UFNode): UFNode {
  if (node.parent !== node) {
    node.parent = ufFind(node.parent);
  }

  return node.parent;
}

export function ufUnion(node1: UFNode, node2: UFNode): void {
  let root1 = ufFind(node1);
  let root2 = ufFind(node2);

  if (root1 === root2) {
    return;
  }

  if (root1.rank < root2.rank) {
    root1.parent = root2;
  } else if (root1.rank > root2.rank) {
    root2.parent = root1;
  } else {
    root2.parent = root1;
    root1.rank++;
  }
}
