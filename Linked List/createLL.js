 ////create a node using in a linked list-------------------
class Node {
    constructor(value,next=null){
        this.value = value;
        this.next = next;
    }
}
// Create a linked list
class LinkedList {
    constructor(value){
        let node = new Node(value)
        this.head = node;
        this.tail =node;

    }
    appened (newValue){
        let Nnode = new Node(newValue);
        this.tail.next = Nnode;
        this.tail = Nnode;
// this code using the single Linked List circular
        // this.tail.next = this.head

    }
    print(){
        let data = this.head;
        while (data) {
            console.log(data.value);
            data=data.next;
        }

    }
}

let list = new LinkedList(50);
list.appened(100);
list.appened(150);
list.appened(180);
list.appened(200);
list.print();
console.log(list)





 ////CRUD Operation using in a linked list-------------------


class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
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
    const NNode = new Node(value);
    this.tail.next = NNode;
    this.tail = NNode;
    this.length++;
  }

  prepend(value) {
    const NewNode = new Node(value);
    NewNode.next = this.head;
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
      preNode.next = node;
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

  update(value,position) {
    let updatedNode = this.findNode(position);
    updatedNode.value = value
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
testNode.append(300);
testNode.prepend(80);
testNode.prepend(50);
testNode.appendAt(10, 1);
testNode.appendAt(400, 7);
testNode.appendAt(150, 5);
testNode.delete(8);
testNode.delete(1);
testNode.update(60,2)
testNode.print();
console.log(testNode);
