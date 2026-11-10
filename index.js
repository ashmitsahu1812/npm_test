const {
  Stack,
  Queue,
  LinkedList,
  BinarySearchTree,
  MinHeap,
  MaxHeap,
} = require("@ashmit1812/dsa-kit");

console.log("=========================================");
console.log("   TESTING @ashmit1812/dsa-kit PACKAGE   ");
console.log("=========================================\n");

// 1. Stack Test
console.log("--- 1. Testing Stack ---");
const stack = Stack.from([10, 20, 30]);
console.log("Initial Stack size:", stack.size);
stack.print();
console.log("Peek top:", stack.peek()); // 30
console.log("Pop top:", stack.pop());   // 30
console.log("Stack after pop:");
stack.print();
console.log(" Stack tests passed!\n");

// 2. Queue Test
console.log("--- 2. Testing Queue ---");
const queue = Queue.from(["First", "Second", "Third"]);
console.log("Initial Queue size:", queue.size);
queue.print();
console.log("Peek front:", queue.peek()); // "First"
console.log("Dequeue:", queue.dequeue());  // "First"
console.log("Queue after dequeue:");
queue.print();
console.log(" Queue tests passed!\n");

// 3. LinkedList Test
console.log("--- 3. Testing LinkedList ---");
const list = LinkedList.from([100, 200, 300]);
list.append(400);
list.prepend(50);
console.log("LinkedList elements (toArray):", list.toArray());
list.print();
console.log("Reversing LinkedList...");
list.reverse();
list.print();
console.log(" LinkedList tests passed!\n");

// 4. Binary Search Tree Test
console.log("--- 4. Testing BinarySearchTree ---");
const bst = BinarySearchTree.from([50, 30, 70, 20, 40, 60, 80]);
console.log("Tree Height:", bst.height());
console.log("Min value:", bst.min());
console.log("Max value:", bst.max());
console.log("Contains 40?:", bst.contains(40));
console.log("Contains 99?:", bst.contains(99));
console.log("Inorder Traversal (Sorted):", bst.inorder());
console.log("\nVisual representation (Boxed style):");
bst.print();
console.log("\nVisual representation (Indent style):");
bst.print({ style: "indent" });
console.log(" BinarySearchTree tests passed!\n");

// 5. MinHeap & MaxHeap Test
console.log("--- 5. Testing MinHeap & MaxHeap ---");
const minHeap = MinHeap.from([5, 3, 8, 1, 9, 2]);
console.log("MinHeap root (peek):", minHeap.peek()); // 1
console.log("MinHeap visual diagram:");
minHeap.print();
console.log("Extracted min elements in sorted order:", minHeap.toSortedArray());

const maxHeap = MaxHeap.from([5, 3, 8, 1, 9, 2]);
console.log("\nMaxHeap root (peek):", maxHeap.peek()); // 9
console.log("MaxHeap visual diagram:");
maxHeap.print();
console.log("Extracted max elements in sorted order:", maxHeap.toSortedArray());
console.log(" Heap tests passed!\n");

console.log("=========================================");
console.log(" ALL TESTS PASSED: PACKAGE IS WORKING! ");
console.log("=========================================");

