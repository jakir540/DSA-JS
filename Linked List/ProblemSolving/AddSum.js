class Node {
    constructor(value,next = null){
        this.value = value;
        this.next = next;

    }
}

class Sum {
    constructor(value){
        const node = new Node(value);
        this.head = node;
        this.tail = node;
    
    }
    append(value){
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode
    }
    sum(head){
        let sum =0;
        let data = head;
        while(data){
            sum = sum + data.value;
            data = data.next;

        }
        return sum;
    }

}

const list = new Sum(100);
list.append(200);
list.append(300);
list.append(400);
list.append(400);
const result = list.sum(list.head)
console.log(result)
console.log(list.head)
