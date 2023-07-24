class HashTable {
  constructor(size) {
    this.arr = new Array(size);
    this.size = size;
  }
  hashFunction(str) {
    str = str + "";
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
      sum = sum + str.charCodeAt(i);
    }
    const index = sum % this.size;      
    return index;
  }

  set(value) {
    let index = this.hashFunction(value);
    console.log(index);
    let indexArr = this.arr[index];
    console.log(indexArr);
    
    if (!indexArr) {
        indexArr = [value];
    } else {
        indexArr.push(value);
    }
    this.arr[index] = indexArr;
  }

  get(value) {
    let index = this.hashFunction(value);
    let resultArr = this.arr[index];
    console.log(resultArr);
    for (let i = 0; i < resultArr.length; i++) {
      if (resultArr[i] == value) {
        return true;
      }
    }
    return false;
  }
}

let Hash = new HashTable(5);
Hash.set("Jakir");
Hash.set("jakiya");
// Hash.set("taniya");
console.log(Hash.get("jakiya"));
