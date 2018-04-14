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