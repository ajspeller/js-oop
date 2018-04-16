const _radius = new WeakMap(); // the keys can be garbage collected
const _move = new WeakMap();

class Circle {
    constructor(radius) {
        _radius.set(this, radius); // private
        _move.set(this, () => {
            console.log(`move`, this);
        });
    }
    draw() {
        console.log(_radius.get(this));
        _move.get(this)();
        console.log(`draw`);
    }
}

const c = new Circle(9);

console.log(c);
c.draw();