let names = ["Java", "TypeScript", "Python"]
console.log(names)
console.log(names.length)

// Print each value
for (var n of names)
    console.log(n)

names["abc"] = "Xyz"
for (var n in names)
    console.log(n)