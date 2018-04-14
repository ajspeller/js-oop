// use abstration to ...
// 1) hide the details
// 2) show the essentials`

// remove this. and just declare the variables locally to hide them

// constructor function
function Circle(radius) {
    this.radius = radius;
    
    let defaultLocation = { // hide
        x: 0,
        y: 0
    };

    let computeOptimumLocation = function () { // hide

    };
    this.draw = function () {
        computeOptimumLocation();
        // defaultLocation
        // this.radius
        console.log('draw');
    }
}

const circle = new Circle(10);
circle.
circle.draw();