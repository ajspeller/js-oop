function extend(Child, Parent) {
    // resetting the prototype
    Child.prototype = Object.create(Parent.prototype);
    // whenever you reset the prototype, you should also reset the constructor
    Child.prototype.constructor = Child;
}

function Shape() {}

Shape.prototype.duplicate = function () {
    console.log('duplicate');
}

function Circle(radius, color) {}

extend(Circle, Shape); 

Circle.prototype.duplicate = function () {
    Shape.prototyoe.duplicate.call(this);
    console.log('duplicate circle');
}

const c = new Circle(3);