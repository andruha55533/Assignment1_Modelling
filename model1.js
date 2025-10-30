// 1. Reverse Text 
function Reversestring(string) {
    return string.split("").reverse().join("");
}

let reversed_text = Reversestring(" Моє ім'я - Олександр! ");

// Result output
console.log("===============");
console.log(reversed_text);
console.log("===============");

// 2. Node swap
class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

function swapPairs(head) {
    let dummy = new Node(0);
    dummy.next = head;
    let current = dummy;

    while (current.next && current.next.next) {
        let first = current.next;
        let second = current.next.next;

        first.next = second.next;
        second.next = first;
        current.next = second;

        current = current.next.next;
    }

    return dummy.next;
}

// Тест
let linked_list = new Node(1);
linked_list.next = new Node(2);
linked_list.next.next = new Node(3);
linked_list.next.next.next = new Node(4);
linked_list.next.next.next.next = new Node(5);
linked_list.next.next.next.next.next = new Node(6);
linked_list.next.next.next.next.next.next = new Node(7);

const print = (root) => {
    let res = [];
    while(root) {
        res.push(root.val);
        root = root.next;
    }
    return res;
};

console.log("Before:", print(linked_list));
linked_list = swapPairs(linked_list);
console.log("After:", print(linked_list));

// 3. Fibonacci

function fibon (n) {
    if (n < 2) return n;
    let a = 0, b = 1;
    for ( let i = 2; i <= n; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}

// Result output
console.log(fibon(5));
console.log(fibon(10));
console.log(fibon(4));
console.log(fibon(7));
console.log(fibon(9));
console.log("===============");

// 4. Stairs climbing

function climbStairs(n) {
  if (n <= 2) return n;
  let a = 1, b = 2;
  for (let i = 3; i <= n; i++) {
    let temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}

// Result output
console.log(climbStairs(2)); // 2
console.log(climbStairs(3)); // 3
console.log(climbStairs(4)); // 5

// 5. Power Function

function Powerfunc (x, n) {
      if (n === 0) return 1;
      if(n < 0) {
        x = 1 / x;
        n = -n;
      }

      let res = 1;
      while(n > 0) {
        if(n % 2 === 1) res *= x;
        x *= x;
        n = Math.floor(n / 2);
      }

      return res;
}

//Result output
console.log(Powerfunc(2.46453, 0));
console.log(Powerfunc(15, -5));
console.log(Powerfunc(25, 0.45));
console.log(Powerfunc(3, 2));
console.log(Powerfunc(44, 1));
console.log("===============");