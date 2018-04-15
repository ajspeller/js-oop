function Circle(radius) {
    // instance members
    this.radius = radius;

    this.move = function () {
        console.log('draw');
    }
}

// prototype member
Circle.prototype.draw = function () {
    console.log('draw');
}

const c1 = new Circle(1);

c1.draw();

console.log(Object.keys(c1)); // only returns instance members

// returns all members 
for (key in c1) {
    console.log(key); // returns both the instance and prototype members
}

console.log(c1.hasOwnProperty('radius')); // true .. instance member
console.log(c1.hasOwnProperty('draw')); // false .. prototype member