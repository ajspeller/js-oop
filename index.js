const _radius = new WeakMap(); // the keys can be garbage collected

class Circle {
    constructor(radius) {
        _radius.set(this, radius); // private

        // Object.defineProperty(this, 'radius', {
        //     get: function () {

        //     }
        // });
    }
    get radius() {
        return _radius.get(this);
    }
    set radius(value){
        if (value <= 0) {
            throw new Error(`invalis raidus`);
        }
        _radius.set(this.value);
    }
}


const c = new Circle(9);