class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  append(value) {
    let node = new Node(value);
    if (this.size === 0) {
      this.head = node;
    } else {
      let n = this.head;
      while (n.next) {
        n = n.next;
      }
      n.next = node;
    }
    this.size++;
  }

  prepend(value) {
    let node = new Node(value);
    let currentHead = this.head;
    node.next = currentHead;
    this.head = node;
    this.size++;
  }
}

let newList = new LinkedList();
newList.append("hello");
newList.append("goodbye");
newList.append("what");
newList.prepend("to_start");
newList.append("when");
newList.prepend("this_is");
//newList.append("tomorrow");
//newList.append("hello");
console.log(newList);
