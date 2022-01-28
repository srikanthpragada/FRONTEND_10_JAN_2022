const product = {
    name : "Mac Pro",
    price : 200000
};

const marks = [10,20,30];

const [m1,m2,m3] = marks;

console.log(m1)

const [f, ...s] = marks;  // spread operator 

console.log(f)
console.log(s)

console.log(product)

const {name, price} = product;

console.log(name + " - " + price)

