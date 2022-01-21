class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    sellingPrice() {
        return this.price * 1.08; // 8% tax 
    }
}

class DiscountedProduct extends Product  {
    constructor(name, price, discountRate) {
        super(name, price)    // call superclass's constructor 
        this.discountRate = discountRate;
    }
    // Override method in super class 
    sellingPrice() {
        let discount = this.price * this.discountRate / 100;
        let beforetax = this.price - discount;
        let aftertax = beforetax * 1.08; // 8% tax
        return aftertax;
    }
}


p = new DiscountedProduct("Dell XPS 9500", 2000000, 15);
console.log(p.sellingPrice().toFixed(2))