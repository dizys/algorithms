import * as UFNode from "./union_find.node";
import * as UFArray from "./union_find.array";

test("union_find.node: simple", () => {
  let node1 = UFNode.newUFNode();
  let node2 = UFNode.newUFNode();
  let node3 = UFNode.newUFNode();

  UFNode.ufUnion(node1, node2);
  expect(UFNode.ufFind(node1)).toBe(UFNode.ufFind(node2));

  UFNode.ufUnion(node2, node3);
  expect(UFNode.ufFind(node1)).toBe(UFNode.ufFind(node3));
});

test("union_find.node: rank", () => {
  let node1 = UFNode.newUFNode();
  let node2 = UFNode.newUFNode();
  let node3 = UFNode.newUFNode();

  UFNode.ufUnion(node1, node2);
  expect(UFNode.ufFind(node1)).toBe(UFNode.ufFind(node2));

  expect(node1.rank).toBe(1);
  expect(node2.rank).toBe(0);

  UFNode.ufUnion(node2, node3);
  expect(UFNode.ufFind(node1)).toBe(UFNode.ufFind(node3));

  expect(node1.rank).toBe(1);
  expect(node2.rank).toBe(0);
  expect(node3.rank).toBe(0);
});

test("union_find.array: simple", () => {
  let unionFind = new UFArray.UnionFind(3);

  unionFind.union(0, 1);
  expect(unionFind.find(0)).toBe(unionFind.find(1));

  unionFind.union(1, 2);
  expect(unionFind.find(0)).toBe(unionFind.find(2));
});

test("union_find.array: rank", () => {
  let unionFind = new UFArray.UnionFind(3);

  unionFind.union(0, 1);
  expect(unionFind.find(0)).toBe(unionFind.find(1));

  expect(unionFind._getRank(0)).toBe(1);
  expect(unionFind._getRank(1)).toBe(0);

  unionFind.union(1, 2);
  expect(unionFind.find(0)).toBe(unionFind.find(2));

  expect(unionFind._getRank(0)).toBe(1);
  expect(unionFind._getRank(1)).toBe(0);
  expect(unionFind._getRank(2)).toBe(0);
});
