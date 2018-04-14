// constructor function
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}

Circle.call({}, 1);  // the this keyword references {}, arguments passed in one at a time
Circle.apply({}, [1]); // the this keyword references {}, arguments in an array

const another = new Circle(1);



const newCircle = new Circle(1);
newCircle.draw();

const Circle1 = new Function('radius',
    `
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
`);

const circle1 = new Circle1(1);