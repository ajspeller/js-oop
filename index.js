class Shape {
    constructor(color) {
        this.color = color;
    }
    move() {
        console.log(`move`);
    }
}

class Circle extends Shape {
    constructor(color, radius) {
        super(color); // call the constructor of the parent object
        this.radius = radius;
    }
    draw() {
        console.log(`draw`);
    }
}

const c = new Circle('red', 4);

console.log(c);

c.move();
c.draw();