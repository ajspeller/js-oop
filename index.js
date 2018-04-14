// constructor function
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}

const circle = new Circle(10);

circle.location = {
    x: 1
};

// bracket notation:  useful for dynamic usage
circle['location'] = {
    x: 1
};

const propName = 'location';
circle[propName] = {
    x: 1
};

// bracket notation:  also useful when using special characters and reserved words
const propName2 = 'center location';
circle[propName2] = {
    x: 1
};

// remove properties
delete circle.location;
delete circle['location'];
