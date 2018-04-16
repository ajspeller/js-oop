function extend(Child, Parent) {
    // resetting the prototype
    Child.prototype = Object.create(Parent.prototype);
    // whenever you reset the prototype, you should also reset the constructor
    Child.prototype.constructor = Child;
}


function Circle() {}

extend(Circle, Shape); 

Circle.prototype.duplicate = function () {
    console.log('duplicate circle');
}

function Square() {
}

extend(Square, Shape);

Square.prototype.duplicate = function () {
    console.log('duplicate square');
}

const shapes = [new Circle(), Square()];

for (let shape of shapes) {
    shape.duplicate();
}