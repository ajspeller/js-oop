function HtmlElement() {
    this.click = function () {
        console.log(`click`);
    }
}

HtmlElement.prototype.focus = function () {
    console.log(`focus`);
}

const htmlElement = new HtmlElement();

console.log(htmlElement);

function HtmlSelectElement(items) {
    this.items = items ? items : [];
    this.addItem = function (item) {
        this.items.push(item);
    };
    this.removeItem = function (item) {
        let idx = items.indexOf(item);
        if (idx !== -1) {
            this.items.splice(idx, 1);
        }
    }
    this.displayItems = function() {
        console.table(items);
    }
}

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.constructor = HtmlSelectElement;

const h = new HtmlSelectElement([1, 2, 3]);


console.log(h);

h.displayItems();
h.addItem(7);
h.displayItems();
h.removeItem(7);
h.displayItems();