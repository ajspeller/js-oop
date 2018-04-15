function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}

const circle = new Circle(10);

// remember that objects created by a given constructor will have the same prototype

let person = {
    name: 'AJ'
}

Object.defineProperty(person, 'name', {
    writable: false,
});


console.log(person);

for (let key in person) {
    console.log(key);
}

console.log(Object.keys(person));

let objectBase = Object.getPrototypeOf(person);

let descriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString');

console.log(descriptor);




let pet = {
    name: 'flash'
}

Object.defineProperty(pet, 'name', {
    writable: false, // make the object read-only
    enumerable: false, // do not allow looping with this property
    configurable: false // do not allow the property to be deleted
});

pet.name = 'princess';

console.log(`The name has not changed: `, pet.name); // the name is not changed
console.log(`The key is not shown: `, Object.keys(pet)); // the key is not shown

delete pet.name;

console.log(`this property should be deleted: `, pet.name);
