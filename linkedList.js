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

  size() {
    return this.size;
  }

  getHead() {
    return this.head;
  }

  tail() {
    let n = this.head;
    while (n.next) {
      n = n.next;
    }
    return n;
  }

  atIndex(index) {
    let n = this.head;
    if (index < this.size) {
      for (let i = 0; i < index; i++) {
        n = n.next;
      }
      return n;
    }
    return "That index is larger than the list";
  }

  pop() {
    let n = this.head;
    for (let i = 2; i < this.size; i++) {
      n = n.next;
    }
    n.next = null;
    this.size--;
  }

  contains(variable) {
    let n = this.head;
    for (let i = 2; i <= this.size; i++) {
      if (n.value === variable) {
        return true;
      } else return false;
      n = n.next;
    }
  }

  find(variable) {
    let n = this.head;
    let index = 0;
    for (let i = 2; i <= this.size; i++) {
      if (n.value === variable) {
        return index;
      }
      n = n.next;
      index++;
    }
  }

  toString() {
    let n = this.head;
    let string = "";
    for (let i = 2; i <= this.size; i++) {
      string += "(" + n.value + ") => ";
      n = n.next;
    }
    return string;
  }
}

let newList = new LinkedList();
console.log(newList);
newList.append("A");
console.log(newList.head);
newList.append("B");
newList.append("C");
console.log(newList.size);
console.log(newList);
console.log(newList.contains("B"));
console.log(newList.find("B"));
console.log(newList.toString());
console.log(newList.getHead());
console.log(newList.tail());
console.log(newList.atIndex(1));
console.log(newList.atIndex(2));
console.log(newList.atIndex(8));
console.log(newList);
newList.pop();
console.log(newList);
console.log(newList.tail());
