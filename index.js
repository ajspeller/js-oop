// use abstration to ...
// 1) hide the details
// 2) show the essentials`

// constructor function
function Circle(radius) {
    this.radius = radius;
    this.defaultLocation = { // hide
        x: 0,
        y: 0
    };
    this.computeOptimumLocation = function () { // hide

    };
    this.draw = function () {
        this.computeOptimumLocation()
        console.log('draw');
    }
}

const circle = new Circle(10);