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
if (head === null || head.next === null) return head;

  let newHead = head.next;
  head.next = swapPairs(newHead.next);
  newHead.next = head;

  return newHead;
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

const print = (head) => {
  if (!head) return [];
  return [head.val, ...print(head.next)];
};

console.log("Before:", print(linked_list));
linked_list = swapPairs(linked_list);
console.log("After:", print(linked_list));

// 3. Fibonacci

function fibon (n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fib(n - 1) + fib(n - 2);
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
  if (n === 1) return 1;
  if (n === 2) return 2;

  return climbStairs(n - 1) + climbStairs(n - 2);
}

// Result output
console.log(climbStairs(2)); // 2
console.log(climbStairs(3)); // 3
console.log(climbStairs(4)); // 5

// 5. Power Function

function Powerfunc (x, n) {
      if (n === 0) return 1;
      if(n < 0) {
        return 1 / myPow(x, -n)
      }

       if (n % 2 === 0) {
    let half = myPow(x, n / 2);
    return half * half;
  }

  return x * myPow(x, n - 1);
}

//Result output
console.log(Powerfunc(2.46453, 0));
console.log(Powerfunc(15, -5));
console.log(Powerfunc(25, 0.45));
console.log(Powerfunc(3, 2));
console.log(Powerfunc(44, 1));

console.log("===============");
