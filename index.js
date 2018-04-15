function Circle(radius) {
    // instance members
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}

const c1 = new Circle(1);
const c2 = new Circle(2);

console.log(c1);
console.log(c2);

// using the above code, each Circle object will have its own copy of the draw method.

// lets place the draw method on the prototype so that the same method is shared and not copied

function EfficientCircle(radius) {
    // instance member
    this.radius = radius;
    this.move = function () {
        this.changeColor();
        //this.draw
        console.log(`move`);
    }
}

// prototype member
EfficientCircle.prototype.draw = function () {
    this.move();
    console.log('draw');
}

EfficientCircle.prototype.changeColor = function () {
    console.log('changeColor');
}

const c3 = new EfficientCircle(2);
const c4 = new EfficientCircle(5);


EfficientCircle.prototype.toString = function () {
    return 'This circle has a radius of ' + this.radius;
}

console.log(c3);
console.log(c4);
console.log(EfficientCircle.prototype.draw);
console.log(EfficientCircle.prototype.toString);
console.log(c3.toString());
console.log(c4.toString());
c3.draw();