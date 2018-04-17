const _radius = new WeakMap();

class Circle {
    constructor(radius) {
        _radius.set(this, radius);
    }

    draw() {
        console.log(`Circle with radius ` + _radius.get(this));
    }
}

const c = new Circle(10);
// hack to get around the fact that _radius is private, 
// module will protect this private variable
_radius.get(c); 
c.draw();
