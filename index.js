function mixin(target, ...sources) {
    Object.assign(target, ...sources);
}

const canEat = {
    eat: function () {
        this.hunger--;
        console.log(`eating`);
    }
};
const canWalk = {
    walk: function () {
        this.hunger--;
        console.log(`walking`);
    }
};

const canSwim = {
    swim: function () {
        console.log(`swimming`);
    }
}

function Person() {}
mixin(Person.prototype, canEat, canSwim, canWalk);
const person = new Person();
console.log(person);

function GoldFish() {}
mixin(GoldFish.prototype, canEat, canSwim);
const goldFish = new GoldFish();
console.log(goldFish);