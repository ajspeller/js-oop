function Shape(color) {
    this.color = color;
}

Shape.prototype.duplicate = function () {
    console.log('duplicate');
}

function Circle(radius, color) {
    Shape.call(this, color); // super constructor
    // instance members
    this.radius = radius;

    this.move = function () {
        console.log('draw');
    }
}

// resetting the prototype
Circle.prototype = Object.create(Shape.prototype);

// whenever you reset the prototype, you should also reset the constructor
Circle.prototype.constructor = Circle;

// prototype member
Circle.prototype.draw = function () {
    console.log('draw');
}

const s = new Shape();
const c = new Circle(3);