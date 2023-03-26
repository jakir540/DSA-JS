// Create a node
class Node {
    constructor(value, next = null, prev = null) {
      this.value = value;
      this.next = next;
      this.prev = prev;
    }
  }
  
// create Linked list
  
  class LinkedList {
    constructor(value) {
      let node = new Node(value);
      this.head = node;
      this.tail = node;
      this.length = 1;
    }
// add the value in linked list after 
    append(value) {
      let Nnode = new Node(value);
      this.tail.next = Nnode;
      this.tail = Nnode;
      Nnode.prev = this.tail;
      this.length++;
    }
// add the value in linked list previous   
    prepend(value) {
      let NewNode = new Node(value);
      this.head.prev = NewNode;     
      NewNode.next = this.head;
      this.head = NewNode;
      NewNode.prev = null;
      this.length++;
    }
 // print the all datas value  
    print() {
      let data = this.head;
      while (data) {
        //   console.log(this.length)
        console.log(data.value);
        data = data.next;
      }
    }
 // Insert data any position    
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
        NewNode.prev = preNode;
        this.length++;
      }
    }
// Delete Node any position 
    Delete(position){
      let preNode = this.findNode(position-1)
      preNode.next = preNode.next.next;
      this.length--;
    }

 // Update any value any position   
    Update(position,value){
      let node = this.findNode(position);
      node.value = value;
    }
 // Find the Node   
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
//   list.append(70);
//   list.append(80);
list.prepend(15);
list.InserAtPositon(2,222)
list.Delete(2)
list.Update(2,333)
list.print();
 
//   console.log(list.head)
  // console.log( list.head)
  