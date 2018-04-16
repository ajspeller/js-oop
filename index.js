const _radius = Symbol(); // unique identifier
const _draw = Symbol();

class Circle {
    constructor(radius) {
        // this.radius = radius;
        // this.['radius'] = radius;
        this[_radius] = radius; // private because it cannot be accessed directly  
    }

    [_draw]() { // computed property name in the prototype
    }
}

const c = new Circle(9);
console.log(c.radius);

const key = (Object.getOwnPropertySymbols(c))[0];
console.log(c[key]); // hack to access the property .. do not use