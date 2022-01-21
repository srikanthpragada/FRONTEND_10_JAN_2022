
function print_name(n)
{
  console.log(n)
}

var names = ["JavaScript", "C#", "Python"]

names.forEach(print_name)

// Using anonymous function
names.forEach(function (v) {
   console.log(v)
})

// Using arrow function 
names.forEach(n => console.log(n))