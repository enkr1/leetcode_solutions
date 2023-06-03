class MedianFinder {
  constructor() {
    this.minHeap = new MinHeap(); // large set    [4,5,6]
    this.maxHeap = new MaxHeap(); // smaller set  [1,2,3]
  }

  addNum(num) {
    console.log(`num:${num}, peek:`)
    if (this.maxHeap.isEmpty() || num < this.maxHeap.peek()) {
      this.maxHeap.insert(num);
    } else {
      this.minHeap.insert(num);
    }

    console.log(this.maxHeap)
    console.log(this.minHeap)

    if (this.maxHeap.size() - this.minHeap.size() > 1) {
      console.log("reordering max")
      this.minHeap.insert(this.maxHeap.remove());
    } else if (this.minHeap.size() - this.maxHeap.size() > 1) {
      console.log("reordering min")
      this.maxHeap.insert(this.minHeap.remove());
    }

    console.log(this.maxHeap)
    console.log(this.minHeap)
  }

  findMedian() {
    if (this.maxHeap.size() === this.minHeap.size()) {
      return (this.maxHeap.peek() + this.minHeap.peek()) / 2;
    } else if (this.maxHeap.size() > this.minHeap.size()) {
      return this.maxHeap.peek();
    } else {
      return this.minHeap.peek();
    }
  }
}

// MinHeap class implementation
class MinHeap {
  constructor() {
    this.heap = [];
  }

  // ... (implementation details of MinHeap)

  // Additional methods used by MedianFinder class
  size() {
    return this.heap.length;
  }

  peek() {
    if (this.heap.length === 0) {
      return false;
      throw new Error("Heap is empty.");
    }
    return this.heap[0];
  }

  remove() {
    if (this.heap.length === 0) {
      return false;
      throw new Error("Heap is empty.");
    }
    const minValue = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return minValue;
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    while (this.hasParent(index) && this.parent(index) > this.heap[index]) {
      const parentIndex = this.getParentIndex(index);
      this.swap(parentIndex, index);
      index = parentIndex;
    }
  }

  heapifyDown() {
    let index = 0;
    while (this.hasLeftChild(index)) {
      let smallerChildIndex = this.getLeftChildIndex(index);
      if (
        this.hasRightChild(index) &&
        this.rightChild(index) < this.leftChild(index)
      ) {
        smallerChildIndex = this.getRightChildIndex(index);
      }

      if (this.heap[index] < this.heap[smallerChildIndex]) {
        break;
      } else {
        this.swap(index, smallerChildIndex);
      }
      index = smallerChildIndex;
    }
  }

  // Helper methods
  getLeftChildIndex(parentIndex) {
    return 2 * parentIndex + 1;
  }

  getRightChildIndex(parentIndex) {
    return 2 * parentIndex + 2;
  }

  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }

  hasLeftChild(index) {
    return this.getLeftChildIndex(index) < this.heap.length;
  }

  hasRightChild(index) {
    return this.getRightChildIndex(index) < this.heap.length;
  }

  hasParent(index) {
    return this.getParentIndex(index) >= 0;
  }

  leftChild(index) {
    return this.heap[this.getLeftChildIndex(index)];
  }

  rightChild(index) {
    return this.heap[this.getRightChildIndex(index)];
  }

  parent(index) {
    return this.heap[this.getParentIndex(index)];
  }

  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }
}

// MaxHeap class implementation
class MaxHeap {
  constructor() {
    this.heap = [];
  }

  // ... (implementation details of MaxHeap)

  // Additional methods used by MedianFinder class
  size() {
    return this.heap.length;
  }

  peek() {
    if (this.heap.length === 0) {
      return false;
      throw new Error("Heap is empty.");
    }
    return this.heap[0];
  }

  remove() {
    if (this.heap.length === 0) {
      return false;
      throw new Error("Heap is empty.");
    }
    const maxValue = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return maxValue;
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    while (this.hasParent(index) && this.parent(index) < this.heap[index]) {
      const parentIndex = this.getParentIndex(index);
      this.swap(parentIndex, index);
      index = parentIndex;
    }
  }

  heapifyDown() {
    let index = 0;
    while (this.hasLeftChild(index)) {
      let largerChildIndex = this.getLeftChildIndex(index);
      if (
        this.hasRightChild(index) &&
        this.rightChild(index) > this.leftChild(index)
      ) {
        largerChildIndex = this.getRightChildIndex(index);
      }

      if (this.heap[index] > this.heap[largerChildIndex]) {
        break;
      } else {
        this.swap(index, largerChildIndex);
      }
      index = largerChildIndex;
    }
  }

  // Helper methods
  getLeftChildIndex(parentIndex) {
    return 2 * parentIndex + 1;
  }

  getRightChildIndex(parentIndex) {
    return 2 * parentIndex + 2;
  }

  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }

  hasLeftChild(index) {
    return this.getLeftChildIndex(index) < this.heap.length;
  }

  hasRightChild(index) {
    return this.getRightChildIndex(index) < this.heap.length;
  }

  hasParent(index) {
    return this.getParentIndex(index) >= 0;
  }

  leftChild(index) {
    return this.heap[this.getLeftChildIndex(index)];
  }

  rightChild(index) {
    return this.heap[this.getRightChildIndex(index)];
  }

  parent(index) {
    return this.heap[this.getParentIndex(index)];
  }

  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }
}

var obj = new MedianFinder();
// obj.addNum(10);
// obj.addNum(2);
// obj.addNum(13);
obj.addNum(3);
obj.addNum(1);
obj.addNum(2);
var param_2 = obj.findMedian();
console.log(`p2: ${param_2}`)
// obj.addNum(3);
// obj.addNum(8);
// obj.addNum(6);
obj.addNum(7);
obj.addNum(4);
obj.addNum(5);
obj.addNum(6);
obj.addNum(9);

var param_3 = obj.findMedian();
console.log(`p3: ${param_3}`)
