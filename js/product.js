class Product {
    constructor(name, price = 0) {
        this.name = name;
        // if(!price)
        //   price = 0;

        this.price = price;
    }
    // Methods 
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
console.log(`Selling price = ${p.sellingPrice()}`)

p2 = new Product("Mac Pro")
p2.print() 
