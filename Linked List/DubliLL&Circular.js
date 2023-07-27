class Node {
  constructor(value, next = null, prev = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class LinkedList {
  constructor(value) {
    const node = new Node(value);
    this.head = node;
    this.tail = node;
    this.length = 1;
  }

  append(value) {
    const node = new Node(value);
    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
    this.length++;
  }

  prepend(value) {
    const NewNode = new Node(value);
    NewNode.next = this.head;
    this.head.prev = NewNode;
    this.head = NewNode;
    this.length++;
  }

  appendAt(value, position) {
    if (position === 1) {
      this.prepend(value);
    } else if (position == this.length + 1) {
      this.append(value);
    } else {
      const node = new Node(value);
      const preNode = this.findNode(position - 1);
      node.next = preNode.next;
      preNode.next.prev = node;
      preNode.next = node;
      node.prev = preNode;

      this.length++;
    }
  }

  delete(position) {
    if (position == 1) {
      let deleteNode = this.findNode(position);
      this.head = deleteNode.next;
      this.length--;
    } else if (position == this.length + 1) {
      let preNode = this.findNode(position - 1);
      preNode.next = null;
      this.length--;
    } else {
      let preNode = this.findNode(position - 1);
      preNode.next = preNode.next.next;
      this.length--;
    }
  }

  update(value, position) {
    let updatedNode = this.findNode(position);
    updatedNode.value = value;
  }

  findNode(n) {
    let data = this.head;
    let counter = 1;

    while (data) {
      if (counter == n) break;
      counter++;
      data = data.next;
    }
    return data;
  }

  print() {
    let data = this.head;
    while (data) {
      console.log(data.value);
      data = data.next;
    }
  }
}

const testNode = new LinkedList(100);
testNode.append(200);
testNode.prepend(50);
testNode.appendAt(150,3)
testNode.delete(3)
testNode.appendAt(150,3)
testNode.update(80,1)
testNode.print();
// testNode.append(300)
// testNode.append(400)
console.log(testNode.head);
// console.log(testNode.tail);
