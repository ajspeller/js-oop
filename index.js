// prevents pollution of the global object, window!
// 'use strict';


const Circle = function() {
    this.draw = function() {
        console.log(this);
    }
}
const c = new Circle();

// method call
c.draw(); // this points to the circle instance

const draw = c.draw;

console.log(draw);

// function call
console.log(draw()); // this point so the window object

class Square {
    draw() {
        console.log(this);
    }
}

const sq = new Square();
console.log(sq.draw());
const draw_again = sq.draw;
console.log(draw_again()); // undefined because the body of the class is executed in strict mode