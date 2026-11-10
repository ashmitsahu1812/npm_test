# Package Verification & Submission Proof: `@ashmit1812/dsa-kit`

- **Package Name:** `@ashmit1812/dsa-kit`
- **Published Version:** `1.0.1`
- **npm Registry URL:** [https://www.npmjs.com/package/@ashmit1812/dsa-kit](https://www.npmjs.com/package/@ashmit1812/dsa-kit)
- **Repository:** [https://github.com/ashmitsahu1812/dsa-kit](https://github.com/ashmitsahu1812/dsa-kit)
- **Status:** Verified Working (CommonJS & ESM)

---

## 1. Installation

Installed clean in a separate consumer project (`use_of_npm`):

```bash
npm install @ashmit1812/dsa-kit
```

`package.json` dependency:
```json
{
  "dependencies": {
    "@ashmit1812/dsa-kit": "^1.0.1"
  }
}
```

---

## 2. Test Verification Script (`index.js`)

```javascript
const {
  Stack,
  Queue,
  LinkedList,
  BinarySearchTree,
  MinHeap,
  MaxHeap,
} = require("@ashmit1812/dsa-kit");

// Tested:
// 1. Stack: push, pop, peek, size, ASCII terminal visualization
// 2. Queue: enqueue, dequeue, peek, size, ASCII terminal visualization
// 3. LinkedList: append, prepend, reverse, toArray, ASCII terminal visualization
// 4. BinarySearchTree: insert, height, min, max, contains, inorder traversal, boxed & indent visualization
// 5. MinHeap & MaxHeap: push, peek, toSortedArray, tree diagram visualization
```

---

## 3. Execution Command & Output

Command:
```bash
npm test
```

Output:
```text
> use_of_npm@1.0.0 test
> node index.js

=========================================
   TESTING @ashmit1812/dsa-kit PACKAGE   
=========================================

--- 1. Testing Stack ---
Initial Stack size: 3
┌────┐
│ 30 │ ← top
├────┤
│ 20 │
├────┤
│ 10 │
└────┘
Peek top: 30
Pop top: 30
Stack after pop:
┌────┐
│ 20 │ ← top
├────┤
│ 10 │
└────┘
 Stack tests passed!

--- 2. Testing Queue ---
Initial Queue size: 3
        ┌─────────┬──────────┬─────────┐
front → │ "First" │ "Second" │ "Third" │ ← rear
        └─────────┴──────────┴─────────┘
Peek front: First
Dequeue: First
Queue after dequeue:
        ┌──────────┬─────────┐
front → │ "Second" │ "Third" │ ← rear
        └──────────┴─────────┘
 Queue tests passed!

--- 3. Testing LinkedList ---
LinkedList elements (toArray): [ 50, 100, 200, 300, 400 ]
       ┌────┐   ┌─────┐   ┌─────┐   ┌─────┐   ┌─────┐
HEAD → │ 50 │ → │ 100 │ → │ 200 │ → │ 300 │ → │ 400 │ → null
       └────┘   └─────┘   └─────┘   └─────┘   └─────┘
Reversing LinkedList...
       ┌─────┐   ┌─────┐   ┌─────┐   ┌─────┐   ┌────┐
HEAD → │ 400 │ → │ 300 │ → │ 200 │ → │ 100 │ → │ 50 │ → null
       └─────┘   └─────┘   └─────┘   └─────┘   └────┘
 LinkedList tests passed!

--- 4. Testing BinarySearchTree ---
Tree Height: 2
Min value: 20
Max value: 80
Contains 40?: true
Contains 99?: false
Inorder Traversal (Sorted): [
  20, 30, 40, 50,
  60, 70, 80
]

Visual representation (Boxed style):
       50
   ┌────┴────┐
  30        70
 ┌─┴──┐    ┌─┴──┐
20   40   60   80

Visual representation (Indent style):
50
├── L: 30
│   ├── L: 20
│   └── R: 40
└── R: 70
    ├── L: 60
    └── R: 80
 BinarySearchTree tests passed!

--- 5. Testing MinHeap & MaxHeap ---
MinHeap root (peek): 1
MinHeap visual diagram:
     1
  ┌──┴───┐
  3      2
┌─┴─┐   ┌┘
5   9   8

array: [1, 3, 2, 5, 9, 8]
Extracted min elements in sorted order: [ 1, 2, 3, 5, 8, 9 ]

MaxHeap root (peek): 9
MaxHeap visual diagram:
     9
  ┌──┴───┐
  8      5
┌─┴─┐   ┌┘
1   3   2

array: [9, 8, 5, 1, 3, 2]
Extracted max elements in sorted order: [ 9, 8, 5, 3, 2, 1 ]
 Heap tests passed!

=========================================
 ALL TESTS PASSED: PACKAGE IS WORKING! 
=========================================
```

---

## 4. Summary of Verification Checks

| Feature / Structure | Operations Tested | Terminal Visualization | Status |
|---|---|---|---|
| **Stack** | `push`, `pop`, `peek`, `size` | Tested | Passed |
| **Queue** | `enqueue`, `dequeue`, `peek`, `size` | Tested | Passed |
| **LinkedList** | `append`, `prepend`, `reverse`, `toArray` | Tested | Passed |
| **BinarySearchTree** | `insert`, `min`, `max`, `height`, `contains`, `inorder` | Tested (Boxed + Indent) | Passed |
| **MinHeap** | `push`, `peek`, `toSortedArray` | Tested (Tree diagram) | Passed |
| **MaxHeap** | `push`, `peek`, `toSortedArray` | Tested (Tree diagram) | Passed |
| **Module Support** | CommonJS (`require`) & ESM (`import`) | Tested | Passed |
