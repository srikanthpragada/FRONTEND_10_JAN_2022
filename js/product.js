class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    print() {
        console.log(this.name)
        console.log(this.price)
    }

    sellingPrice() {
        return this.price * 1.08; // 8% tax 
    }
}

p = new Product("Dell XPS 9500", 2000000);
p.print()
console.log(p.sellingPrice())