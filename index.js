function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log(`draw`);
    }
}

class ES6_Circle {
    constructor(radius) {
        this.radius = radius;
        this.move = function() {  // method on the object
            console.log(`move`);
        }
    }
    draw() { // method on the prototype
        this.console.log(`draw`);
    }
}

const c = new Circle(1);
const cES6 = new ES6_Circle(8);

console.log(c, cES6);