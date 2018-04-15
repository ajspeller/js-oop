// Object.getPrototypeOf(anyObj);

// anyObj.__proto__ (the parent of anyObj)
// Constructor.prototype is the same as __proto__
// 

function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}

// object used as the parent for objects created by the Circle constructor
const circle = new Circle(10);

