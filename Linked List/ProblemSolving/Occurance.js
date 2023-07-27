class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Occurance {
  constructor(value) {
    const node = new Node(value);
    this.head = node;
    this.tail = node;
    this.length = 1;
  }

  append(value) {
    const node = new Node(value);
    this.tail.next = node;
    this.tail = node;
  }
print(target){
    let data = this.head;
    let occurance = 0
    while(data){
        if (data.value == target) {
            occurance++;
        }
        data= data.next;
    }
    return occurance;
}

}

const list = new Occurance(10);
list.append(20);
list.append(30);
list.append(40);
list.append(20);
list.append(20);
list.append(20);
let result = list.print(20)
console.log(result)
console.log(list.head);
