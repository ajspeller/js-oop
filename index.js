function Shape() {

}

Shape.prototype.duplicate = function () {
    console.log('duplicate');
}

function Circle(radius) {
    // instance members
    this.radius = radius;

    this.move = function () {
        console.log('draw');
    }
}

Circle.prototype = Object.create(Shape.prototype);

// prototype member
Circle.prototype.draw = function () {
    console.log('draw');
}

const s = new Shape();
const c = new Circle(3);