import * as NBHeap from "./heap.array";

test("heap.array: max heap simple", () => {
  let heap = new NBHeap.Heap<number>((a, b) => a >= b); // max-heap by default
  heap.add(1);
  heap.add(2);
  heap.add(3);
  expect(heap.peek()).toBe(3);
  expect(heap.size).toBe(3);
  expect(heap.pop()).toBe(3);
  expect(heap.size).toBe(2);
  expect(heap.pop()).toBe(2);
  expect(heap.size).toBe(1);
  expect(heap.empty).toBe(false);
  expect(heap.pop()).toBe(1);
  expect(heap.size).toBe(0);
  expect(heap.empty).toBe(true);
  expect(heap.peek()).toBe(undefined);
});

test("heap.array: max heap simple 2", () => {
  let heap = new NBHeap.Heap<number>((a, b) => a >= b); // max-heap by default
  heap.add(5);
  heap.add(9);
  heap.add(3);
  heap.add(45);
  heap.add(23);
  heap.add(16);
  heap.add(7);
  expect(heap.size).toBe(7);
  expect(heap.pop()).toBe(45);
  expect(heap.pop()).toBe(23);
  expect(heap.pop()).toBe(16);
  expect(heap.pop()).toBe(9);
  expect(heap.pop()).toBe(7);
  expect(heap.pop()).toBe(5);
  expect(heap.pop()).toBe(3);
});

test("heap.array: max heap simple 3", () => {
  let heap = new NBHeap.Heap<number>((a, b) => a >= b); // max-heap by default
  heap.add(5);
  heap.add(9);
  heap.add(3);
  expect(heap.pop()).toBe(9);
  heap.add(45);
  heap.add(23);
  expect(heap.pop()).toBe(45);
  heap.add(16);
  expect(heap.pop()).toBe(23);
  expect(heap.pop()).toBe(16);
  heap.add(9);
  expect(heap.pop()).toBe(9);
  expect(heap.pop()).toBe(5);
  expect(heap.pop()).toBe(3);
});

test("heap.array: min heap simple", () => {
  let heap = new NBHeap.Heap<number>((a, b) => a <= b); // min-heap
  heap.add(1);
  heap.add(2);
  heap.add(3);
  expect(heap.peek()).toBe(1);
  expect(heap.size).toBe(3);
  expect(heap.pop()).toBe(1);
  expect(heap.size).toBe(2);
  expect(heap.pop()).toBe(2);
  expect(heap.size).toBe(1);
  expect(heap.empty).toBe(false);
  expect(heap.pop()).toBe(3);
  expect(heap.size).toBe(0);
  expect(heap.empty).toBe(true);
  expect(heap.peek()).toBe(undefined);
});

test("heap.array: min heap simple 2", () => {
  let heap = new NBHeap.Heap<number>((a, b) => a <= b); // min-heap
  heap.add(5);
  heap.add(9);
  heap.add(3);
  heap.add(45);
  heap.add(23);
  heap.add(16);
  heap.add(7);
  expect(heap.size).toBe(7);
  expect(heap.pop()).toBe(3);
  expect(heap.pop()).toBe(5);
  expect(heap.pop()).toBe(7);
  expect(heap.pop()).toBe(9);
  expect(heap.pop()).toBe(16);
  expect(heap.pop()).toBe(23);
  expect(heap.pop()).toBe(45);
});

test("heap.array: min heap simple 3", () => {
  let heap = new NBHeap.Heap<number>((a, b) => a <= b); // min-heap
  heap.add(5);
  heap.add(9);
  heap.add(3);
  expect(heap.pop()).toBe(3);
  heap.add(45);
  heap.add(23);
  expect(heap.pop()).toBe(5);
  heap.add(16);
  expect(heap.pop()).toBe(9);
  expect(heap.pop()).toBe(16);
  heap.add(9);
  expect(heap.pop()).toBe(9);
  expect(heap.pop()).toBe(23);
  expect(heap.pop()).toBe(45);
});
