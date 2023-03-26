// create a node
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedL {
  constructor(value) {
    let node = new Node(value);
    this.head = node;
    this.tail = node;
    this.length = 1;
  }
  appened(value) {
    let Nnode = new Node(value);
    this.tail.next = Nnode;
    this.tail = Nnode;
    this.length++;
  }
  prepened(value) {
    let nNode = new Node(value);
    nNode.next = this.head;
    this.head = nNode;
    this.length++;
  }

  print() {
    let data = this.head;
    while (data) {
      console.log(data.value);
      // console.log(this.length)
      data = data.next;
    }
  }

  InsertAtPosition(position, value) {
    if (position == 1) {
      this.prepened(value);
    } else if (position == this.length + 1) {
      this.appened(value);
    } else {
      let newNode = new Node(value);
      let preNode = this.FindNode(position - 1);
      newNode.next = preNode.next;
      preNode.next = newNode;

      this.length++;
    }
  }

  DeleteNode(position) {
    let node = this.FindNode(position - 1);
    // console.log(node)
    node.next = node.next.next;
    console.log()
    this.length--;
  }

  update(position,giveValue){   
    let FNode = this.FindNode(position);
    FNode.value = giveValue;

  }

  FindNode(n) {
    let counter = 1;
    let data = this.head;
    while (data) {
      if (counter == n) break;
      counter++;
      data = data.next;
    }
    return data;
  }


}

let list = new LinkedL(10);
list.appened(20);
list.appened(30);
list.appened(40);
list.appened(50);
list.DeleteNode(2);
list.update(3,1000);
list.print();




// console.log(list.head);
