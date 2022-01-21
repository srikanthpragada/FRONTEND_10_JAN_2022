function add(a, b) {
     console.log(a + b)
}

function mul(a, b = 10) {
    return a * b;
}

function sum(...values) {
    let total = 0;
    for (let v of values) 
        total += v
    
    return total 
}

add(10, 20)

console.log(mul(10, 20))
console.log(mul(5))

console.log(sum(10, 20, 30))
console.log(sum(10, 20, 30, 4, 5))