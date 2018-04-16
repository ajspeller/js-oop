function Shape(color) {
    this.color = color;
}

Shape.prototype.duplicate = function () {
    console.log('duplicate');
}

function extend(Child, Parent) {
    // resetting the prototype
    Child.prototype = Object.create(Parent.prototype);
    // whenever you reset the prototype, you should also reset the constructor
    Child.prototype.constructor = Child; 
}

function Circle(radius, color) {
    Shape.call(this, color); // super constructor
    // instance members
    this.radius = radius;

    this.move = function () {
        console.log('draw');
    }
}

extend(Circle, Shape);


// prototype member
Circle.prototype.draw = function () {
    console.log('draw');
}

function Square(size) {
    this.size = size;
}

extend(Square, Shape);

const s = new Shape();
const c = new Circle(3);