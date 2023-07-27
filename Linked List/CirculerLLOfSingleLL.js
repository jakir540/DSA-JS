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
      this.tail.next = this.head
      this.length = 1;
    }
  
    append(value) {
      const NNode = new Node(value);
      this.tail.next = NNode;
      this.tail.next.next = this.head;
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
  testNode.append(200)
  testNode.append(300)
  testNode.append(400)
  testNode.append(500)
  testNode.append(600)
  testNode.prepend(50)
  testNode.update(80,1)
  testNode.delete(7)
//   testNode.print();
  console.log(testNode.head)