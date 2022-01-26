

// let names = ["Java", "TypeScript", "Python"]
// console.log(names)
// console.log(names.length)

// // Print each value
// for (var n of names)
//     console.log(n)

// names["abc"] = "Xyz"

// for (var n in names)
//     console.log(n)

var marks = [90,87,45,34,80]

function pass(n)
{
    return n > 50;
}

console.log(marks.filter(pass))

// Anonymous function 
var selected = marks.filter(function(v)
        {  
         return v > 50;
        }
);        
console.log(selected)

// Arrow function 
var selected = marks.filter(v => v > 50); 
console.log(selected)

// print all values in the array 
marks.forEach( v => console.log(v))