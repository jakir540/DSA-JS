// create a node using in a linked list
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
