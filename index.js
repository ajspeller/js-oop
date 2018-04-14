// factory function
let createCircle = (radius) => {
    return {
        radius,
        draw: function () {
            console.log('draw');
        }
    }
}

const circle = createCircle(1);


// constructor function
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}

const newCircle = new Circle(1);

newCircle.draw();

let x = {}  // let x = new Object();
new String() // '' "" ``
new Number() // 1, 2, 3 ...
new Boolean() // true false