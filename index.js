// Value Types -- copy by value
// ===========
// Number
// String
// Boolean
// Symbol
// undefined
// null

// Reference Types -- copy by reference
// ===============
// Object
// Function
// Array

let x = 10;
let y = x;

x = 20;

// x & y are independent
console.log(x);
console.log(y);

console.log(`-------`);

let a = { value: 10 };
let b = a;

a.value = 20;

console.log(a.value);
console.log(b.value);

let number = 10; 

function increase(number){
    number++;
}

increase(number);
console.log(`number: `, number);


let obj = { value: 10 }; 

function increase(obj){
    obj.value++;
}

increase(obj);
console.log(`obj: `, obj);