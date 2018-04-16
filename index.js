class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    // instance method
    draw() {}

    // static method
    static parse(str) { // does not exist in the object
        const radius = JSON.parse(str).radius;
        return new Circle(radius);
    }
}

const circle = Circle.parse('{ "radius": 1 }');
console.log(circle);