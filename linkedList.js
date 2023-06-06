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
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = node;
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
    let prev = this.head;
    while (prev.next) {
      prev = prev.next;
    }
    return prev;
  }

  atIndex(index) {
    let prev = this.head;
    if (index < this.size) {
      for (let i = 0; i < index; i++) {
        prev = prev.next;
      }
      return prev;
    }
    return "That index is larger than the list";
  }

  pop() {
    let prev = this.head;
    for (let i = 2; i < this.size; i++) {
      prev = prev.next;
    }
    prev.next = null;
    this.size--;
  }

  contains(variable) {
    let prev = this.head;
    let bullion;
    for (let i = 1; i < this.size; i++) {
      if (prev.value === variable) {
        bullion = true;
      } else bullion = false;
      prev = prev.next;
    }
    return bullion;
  }

  find(variable) {
    let prev = this.head;
    let index = 0;
    for (let i = 1; i <= this.size; i++) {
      if (prev.value === variable) {
        return index;
      }
      prev = prev.next;
      index++;
    }
  }

  toString() {
    let prev = this.head;
    let string = "";
    for (let i = 1; i <= this.size; i++) {
      string += "(" + prev.value + ") => ";
      prev = prev.next;
    }
    string += "null";
    return string;
  }
}

let newList = new LinkedList();
newList.append("A");
newList.append("B");
newList.append("C");
console.log(newList.toString());
console.log(newList);
console.log(newList.size);
console.log(newList.contains("B"));
console.log(newList.find("B"));
console.log(newList.toString());
console.log(newList.getHead());
console.log(newList.tail());
console.log(newList.atIndex(1));
console.log(newList.atIndex(2));
console.log(newList.atIndex(8));
newList.pop();
console.log(newList);

console.log(newList);
console.log(newList.tail());
