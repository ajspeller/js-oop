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
    this.displayItems = function () {
        console.table(items);
    }
    this.render = function () {
        let str = '';
        str += `<select>`;
        this.items.forEach(i => {
            str += `<option>${i}</option>`;
        })
        str += `</select>`;
        return str;
    }
}

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.constructor = HtmlSelectElement;

function HtmlImageElement(source) {
    this.source = source;
    this.render = function() {
        return `<img src="${this.source}"> />`;
    }
}

HtmlImageElement.prototype = new HtmlElement();
HtmlImageElement.constructor = HtmlImageElement;

const elements = [
    new HtmlSelectElement([1, 2, 3]),
    new HtmlImageElement('www.ajspeller.com')
]

for (let element of elements) {
    console.log(element.render()); 
} 
