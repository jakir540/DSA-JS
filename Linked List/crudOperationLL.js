// Create a node
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

// create Linked list

class LinkedList {
  constructor(value) {
    let node = new Node(value);
    this.head = node;
    this.taile = node;
    this.length = 1;
  }
  append(value) {
    let Nnode = new Node(value);
    this.taile.next = Nnode;
    this.taile = Nnode;
    this.length++;
  }
  prepend(value) {
    let NewNode = new Node(value);
    NewNode.next = this.head;
    this.head = NewNode;
    this.length++;
  }
  print() {
    let data = this.head;
    while (data) {
        console.log(this.length)
      console.log(data.value);
      data = data.next;
    }
  }
  InserAtPositon(position, value) {
    if (position === 1) {
      this.prepend(value);
    } else if (position === this.length + 1) {
      this.append(value);
    } else {

      let NewNode = new Node(value);
      let preNode = this.findNode(position - 1);     
      NewNode.next = preNode.next;
      preNode.next = NewNode;
      this.length++;
    }
  }

  Delete(position){
    let preNode = this.findNode(position-1)
    preNode.next = preNode.next.next;
    this.length--;
  }
  Update(position,value){
    let node = this.findNode(position);
    node.value = value;
  }

  findNode(n) {
    let counter = 1;
    let data = this.head;

    while (data) {     
      if (counter === n) break;
      counter++;
      data = data.next;
    }
    return data;
  }
}

let list = new LinkedList(50);
list.append(60);
list.append(70);
list.append(80);
list.prepend(40);
list.InserAtPositon(4, 150);
list.Delete(4);
list.Update(4,250)
list.InserAtPositon(6,500);
list.InserAtPositon(1,2);
list.print();
// console.log( list.head)
