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

    // one method to get the value of the property
    // this.getDefaultLocation = function() {
    //     return defaultLocation;
    // };

    this.draw = function () {
        console.log('draw');
    };


    Object.defineProperty(this, 'defaultLocation', {
        // read only property
        get: function () {
            return defaultLocation;
        },
        // write to the property
        set: function (value) {
            if (!value.x || !value.y) {
                throw new Error('Invalid location.');
            }
            defaultLocation = value;
        }
    });
}

const circle = new Circle(10);
circle.defaultLocation = {
    x: 3,
    y: 4
};
console.log(circle.defaultLocation);
circle.draw();