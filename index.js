const _items = new WeakMap();

class Stack {

    constructor() {
        _items.set(this, []);
    }

    peek() {
        const items = _items.get(this);
        if (items.length === 0) {
            throw new Error(`Stack is empty`);
        }
        return items[items.length - 1];
    }

    push(value) {
        _items.get(this).push(value);
    }

    pop() {
        const items = _items.get(this);
        if (_items.get(this).length === 0) {
            throw new Error(`Stack is empty`);
        }
        return _items.get(this).pop();
    }

    get count() {
        const items = _items.get(this);
        return items.length;
    }
}

var stack = new Stack();
stack.push(1);
stack.push(2);
stack.push('a');
console.log(stack.count);
console.log(stack.peek());
stack.pop();
console.log(stack.peek());
